import { createSlice } from "@reduxjs/toolkit"

   const initialState = {
       filter: "",
    }
   const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
   reducers:{

    filterContacts: (state, action)=> {
         state.filter = action.payload
    },
     }
   }
   )
export const {filterContacts} = filterSlice.actions
export default filterSlice.reducer; 

