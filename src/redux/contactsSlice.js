import { createSlice } from "@reduxjs/toolkit"
import {fetchContactsThunk, postContactsThunk, deleteContactsThunk} from '../services/operations' 

     const initialState = {
          contacts: [],
          isLoading: false,
          error: null
      }
      
      const contactsSlice = createSlice({
        name: "contacts",
        initialState,
        reducers: {
    },
        extraReducers: builder =>
          builder
           // для отримання контактів з бекенду 
            .addCase(fetchContactsThunk.pending, state => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(fetchContactsThunk.fulfilled, (state, action) => {
              state.isLoading = false;
              state.error = null;
              state.contacts = action.payload;
            })
            .addCase(fetchContactsThunk.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })
            // для додавання контакту з бекенду 
            .addCase(postContactsThunk.pending, state => {
                state.isLoading = true;
                state.error = null;
              })
            .addCase(postContactsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = [...state.contacts, action.payload]
                // state.contacts.push(action.payload) теж саме тількі швидше 
              })
            .addCase(postContactsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
              })
            //   для видалення контакту з бекенду 
            .addCase(deleteContactsThunk.pending, state => {
                state.isLoading = true;
                state.error = null;
              })
            .addCase(deleteContactsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = state.contacts.filter(
                    contact => contact.id !== action.payload.id
                    );
              })
            .addCase(deleteContactsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
      });

export const { addContacts, removeContact, } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer
