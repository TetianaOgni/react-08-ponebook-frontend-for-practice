import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = "https://64c94f62b2980cec85c220c6.mockapi.io/"


export const fetchContactsThunk =  createAsyncThunk(
    "contacts/fetchContactsThunk",
     async (_, thunkApi) => {
        try{
          const contactsData = await axios.get("contacts")
          console.log("get", contactsData.data)
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
              console.log("post", contactsData.data)
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
                  console.log("del", contactsData.data)
                  return contactsData.data
                }
                catch(error){
                    return thunkApi.rejectWithValue(error.message)
                }   
             }) 


           
 
// fetch('https://https://64c94f62b2980cec85c220c6.mockapi.io/api/v1/contacts', {
//   method: 'GET',
//   headers: {'content-type':'application/json'},
// }).then(res => {
//   if (res.ok) {
//     console.log(res)
//       return res.json();
//   }
//   // handle error
// }).then(tasks => {
//   // Do something with the list of tasks
//   console.log(tasks)
// }).catch(error => {
//   // handle error
// })
// fetch()

// import axios from 'axios';

// axios.defaults.baseURL = 'https://64c94f62b2980cec85c220c6.mockapi.io';
// const BASE_URL = 'https://64c94f62b2980cec85c220c6.mockapi.io'
// const options = {
//     headers: { 'content-type': 'application/json' },
// };
// export const fetchTasks = async () => {

//     const response = await axios.get(`${BASE_URL}/contacts`, options) 
      
//       console.log(response);
//       return response
//     }


// fetchTasks() 
// {
//     console.log(data)
// };

// axios.defaults.baseURL = "https://64c94f62b2980cec85c220c6.mockapi.io/"

// export const fetchContactsThunk = () => createAsyncThunk(
//     'contacts/fetchAll',
//      async (_, thunkApi) => {
//         try{
//           const contactsData = await axios.get('/contacts')
//           console.log(1, contactsData.data)
//           return contactsData
//         }
//         catch(error){
//             return thunkApi.rejectWithValue(error.message)
//         }
        
//      })