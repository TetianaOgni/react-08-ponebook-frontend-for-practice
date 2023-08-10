import { createSlice } from "@reduxjs/toolkit";
import { registerUserThunk, loginUserThunk, refreshUserThunk, logoutUserThunk } from "./operations";

const initialState = {
    userData: null,
    authenticated: false,
    token: null,
    isLoading: false,
    error: null,

}
const authSlice = createSlice({
   name: "auth",
   initialState,
   extraReducers: builder => 
   builder
  //  ------- register---------
   .addCase(registerUserThunk.pending, state => {
    state.isLoading = true;
    state.error = null;
   })
   .addCase(registerUserThunk.fulfilled, (state, action) => {
    state.isLoading = false;
    state.authenticated = true;
    state.userData = action.payload.user;
    state.token = action.payload.token
   })
   .addCase(registerUserThunk.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload
   })
//  -------  login---------
   .addCase(loginUserThunk.pending, state => {
    state.isLoading = true;
    state.error = null;
    state.authenticated = true;
   })
   .addCase(loginUserThunk.fulfilled, (state, action) => {
    state.isLoading = false;
    state.authenticated = true;
    state.userData = action.payload.user;
    state.token = action.payload.token
   })
   .addCase(loginUserThunk.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload
   })
   //  -------refresh---------
   .addCase(refreshUserThunk.pending, state => {
    state.isLoading = true;
    state.error = null;
   })
   .addCase(refreshUserThunk.fulfilled, (state, action) => {
    state.isLoading = false;
    state.authenticated = true;
    state.userData = action.payload;
   })
   .addCase(refreshUserThunk.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload
   })
    //  -------logout---------
    .addCase(logoutUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
       })
       .addCase(logoutUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = false;
        state.userData = null;
        state.token = null;
       })
       .addCase(logoutUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
       })
})

export const selectLoading = state => state.auth.isLoading
export const selectError = state => state.auth.error
export const selectToken = state => state.auth.token
export const selectUserData = state => state.auth.userData
export const selectAuthenticated = state => state.auth.authenticated

export const authReducer = authSlice.reducer