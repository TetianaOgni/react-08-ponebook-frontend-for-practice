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
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
 
axios.defaults.baseURL = "https://64c94f62b2980cec85c220c6.mockapi.io"

export const fetchContactsThunk = () => createAsyncThunk(
    "contacts/fetchContactsThunk",
     async (_, thunkApi) => {
        try{
          const contactsData = await axios.get("/contacts")
          console.log(contactsData)
          return contactsData
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message)
        }   
     })  
     const initialState = {
        contacts: [],
        isLoading: false,
        error: null,
      };
      
      const contactsSlice = createSlice({
        name: "contacts",
        initialState,
        reducers: {},
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
            })
            .addCase(fetchContactsThunk.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            }),
      });
export const contactsReducer = contactsSlice.reducer; 