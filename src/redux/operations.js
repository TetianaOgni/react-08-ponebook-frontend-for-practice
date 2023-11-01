import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const $instance = axios.create({
    baseURL: 'http://localhost:4400/',
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
        try{
         const {data} = await $instance.post('/users/signup', userData)
         setToken(data.token);
         return data
        }
        catch(error){
            // console.log("register!", error)

            return thunkApi.rejectWithValue(error.message)
        }
    })
    
export const loginUserThunk = createAsyncThunk(
        'auth/login', 
        async (userData, thunkApi) => {
           console.log('userData', userData)
            try{
             const {data} = await $instance.post('/users/login', userData)
             setToken(data.token);
             return data
            }
            catch(error){
                console.log("login!", error)
                return thunkApi.rejectWithValue(error.message)
            }
 })
 export const refreshUserThunk = createAsyncThunk(
    'auth/refresh', 
    async (_, thunkApi) => {
        const state = thunkApi.getState()//извлекает токен пользователя из состояния.
        const token = state.auth.token
        console.log('token0', token)//

        try{
         setToken(token)//устанавливает токен в заголовках HTTP-запросов для аутентификации на сервере
         console.log('token1', token)//
         const {data} = await $instance.get('/users/current', token)//
         return data
        }
        catch(error){
            console.log('помилка нема токена')
            return thunkApi.rejectWithValue(error.message)
        }
})

export const logoutUserThunk = createAsyncThunk(
    'auth/logout', 
    async (_, thunkApi) => {
        try{
         const {data} = await $instance.post('/users/logout')
         clearToken()
         return data
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message)
        }
})

export const updateAvatarUserThunk = createAsyncThunk(

//     'auth/updateAvatar',
//   async (file, thunkApi) => {
//     try {
//       const formData = new FormData();
//       formData.append('avatar', file);
//       const res = await axios.patch('/users/avatars', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       return res.data.avatarUrl;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );


    'auth/updateAvatar',
    async (file, thunkApi) => {
        try {
            const formData = new FormData()
            formData.append("avatar", file)
            // як на бекенде в перший параметр из router.patch(
            //     "/avatars",
            //     authenticate,
            //     upload.single("avatar"),
            //     ctrl.updateAvatar
            //   );
            const res = await axios.patch('/users/avatars', formData, {headers: {"Content-Type": "multipart/form-data"}})
            return res.data.avatarUrl
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)
