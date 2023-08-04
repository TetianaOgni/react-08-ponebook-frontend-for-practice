import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = "https://64c94f62b2980cec85c220c6.mockapi.io/"

export const fetchContactsThunk =  createAsyncThunk(
    "contacts/fetchContactsThunk",
     async (_, thunkApi) => {
        try{
          const contactsData = await axios.get("contacts")
          return contactsData.data
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message)
        }   
     }) 

export const postContactsThunk =  createAsyncThunk(
        "contacts/postContactsThunk",
         async (contact, thunkApi) => {
            try{
              const contactsData = await axios.post("/contacts", contact)
              return contactsData.data
            }
            catch(error){
                return thunkApi.rejectWithValue(error.message)
            }   
         }) 

export const deleteContactsThunk =  createAsyncThunk(
            "contacts/deleteContactsThunk",
             async (id, thunkApi) => {
                try{
                  const contactsData = await axios.delete(`/contacts/${id}`)
                  return contactsData.data
                }
                catch(error){
                    return thunkApi.rejectWithValue(error.message)
                }   
             }) 
