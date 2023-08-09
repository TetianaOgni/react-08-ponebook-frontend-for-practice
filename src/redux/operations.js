import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const $instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
})
export const setToken = token => {
    $instance.defaults.headers['Authorization'] = `Bearer ${token}`
}
export const clearToken = () => {
    $instance.defaults.headers['Authorization'] = ''
}

export const registerUserThunk = createAsyncThunk(
    'auth/register', 
    async (userData, thunkApi) => {
        console.log(1, userData)
        try{
         const {data} = await $instance.post('/users/signup', userData)
         console.log(data)
         setToken(data.token);
         return data
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message)
        }
    })
    
export const loginUserThunk = createAsyncThunk(
        'auth/login', 
        async (userData, thunkApi) => {
            console.log(2, userData)
           
            try{
             const {data} = await $instance.post('/users/login', userData)
             console.log(data)
             setToken(data.token);
             return data
            }
            catch(error){
                return thunkApi.rejectWithValue(error.message)
            }
 })
 export const refreshUserThunk = createAsyncThunk(
    'auth/refresh', 
    async (_, thunkApi) => {
        const state = thunkApi.getState()
        const token = state.auth.token
       
        try{
         setToken(token)
         const {data} = await $instance.get('/users/current')
         console.log("refresh", data)
         setToken(data.token);
         return data
        }
        catch(error){
            console.log("errorlogout", error)
            return thunkApi.rejectWithValue(error.message)
        }
})

export const logoutUserThunk = createAsyncThunk(
    'auth/logout', 
    async (_, thunkApi) => {
        try{
         const {data} = await $instance.post('/users/logout')
         console.log(data)
         clearToken()
         return data
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message)
        }
})
