// import { createSlice } from "@reduxjs/toolkit"

//    const initialState = {
//        contacts: [], 
//     //    filter: ''
      
//     }
//    const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: initialState,
//    reducers:{
//     addContacts(state, action){
//             state.contacts.push(action.payload)
//            },
    
//     removeContact: (state, action) => {
//            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
//           },

//     // filterContacts: (state, action)=> {
//     //             state.filter = action.payload
//     // },
//      }
//    }
//    )
// export const { addContacts, removeContact, } = contactsSlice.actions
// export default contactsSlice.reducer; 


import { createSlice } from "@reduxjs/toolkit"
// import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
import {fetchContactsThunk, postContactsThunk, deleteContactsThunk} from '../services/operations' 
 
// axios.defaults.baseURL = "https://64c94f62b2980cec85c220c6.mockapi.io"

// export const fetchContactsThunk =  createAsyncThunk(
//     "contacts/fetchContactsThunk",
//      async (_, thunkApi) => {
//         try{
//           const contactsData = await axios.get("/contacts")
//           console.log(11, contactsData.data)
//           return contactsData
//         }
//         catch(error){
//             return thunkApi.rejectWithValue(error.message)
//         }   
//      })  
     const initialState = {
    
          contacts: [],
          isLoading: false,
          error: null
       
        // filter: null
      }
      
      const contactsSlice = createSlice({
        name: "contacts",
        initialState,
        reducers: {
          addContacts(state, action) {
            state.contacts.push(action.payload);
            console.log("my", action.payload)
          },
      
          removeContact: (state, action) => {
            state.contacts = state.contacts.filter(
              (contact) => contact.id !== action.payload
            );
          },
    },
        extraReducers: builder =>
          builder
            .addCase(fetchContactsThunk.pending, state => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(fetchContactsThunk.fulfilled, (state, action) => {
              state.isLoading = false;
              state.error = null;
              state.contacts = action.payload;
              console.log("backend", action.payload)
 
            })
            .addCase(fetchContactsThunk.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })
            // для додавання контакту з бекенду mockapi.io
            .addCase(postContactsThunk.pending, state => {
                state.isLoading = true;
                state.error = null;
              })
            .addCase(postContactsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = [...state.contacts, action.payload]
                console.log("backend", action.payload)
   
              })
            .addCase(postContactsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
              })
            //   для видалення контакту з бекенду mockapi.io
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
                console.log("backend", action.payload, state.contacts)
   
              })
            .addCase(deleteContactsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
      });

export const { addContacts, removeContact, } = contactsSlice.actions
export default contactsSlice.reducer;
// export const contactsReducer = contactsSlice.reducer; 