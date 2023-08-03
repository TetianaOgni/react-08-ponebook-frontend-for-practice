import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
 
axios.defaults.baseURL = "https://64c94f62b2980cec85c220c6.mockapi.io"

export const fetchContactsThunk = () => createAsyncThunk(
    'contacts/fetchContactsThunk',
     async (_, thunkApi) => {
        try{
          const contactsData = await axios.get('/contacts')
          console.log(1, contactsData.data)
          return contactsData
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message)
        }
        
     })