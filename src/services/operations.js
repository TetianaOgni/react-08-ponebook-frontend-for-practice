import { createAsyncThunk } from '@reduxjs/toolkit'
import { $instance } from '../redux/operations';

export const fetchContactsThunk =  createAsyncThunk(
    "contacts/fetchContactsThunk",
     async (_, thunkApi) => {
        try{
          const contactsData = await $instance.get("/contacts")
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
              const contactsData = await $instance.post("/contacts", contact)
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
                  const contactsData = await $instance.delete(`/contacts/${id}`)
                  return contactsData.data
                }
                catch(error){
                    return thunkApi.rejectWithValue(error.message)
                }   
             }) 
