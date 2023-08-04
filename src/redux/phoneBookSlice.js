// import { createSlice } from "@reduxjs/toolkit"
//    const initialState = {
//        contacts: [], 
//        filter: ''
      
//     }
//    const phoneBookSlice = createSlice({
//     name: "phoneBook",
//     initialState: initialState,
//    reducers:{
//     addContacts(state, action){
//             state.contacts.push(action.payload)
//            },
    
//     removeContact: (state, action) => {
//            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
//           },

//     filterContacts: (state, action)=> {
//                 state.filter = action.payload
//     },
//      }
//    }
//    )
// export const { addContacts, removeContact, filterContacts} = phoneBookSlice.actions
// export default phoneBookSlice.reducer; 


// import {combineReducers} from "redux"
// import contactsReducer from "./contactsSlice";
// import filterReducer from "./filterSlice";
// const phoneBookSlice = combineReducers({
//    contacts: contactsReducer,
//    filter: filterReducer,
// })
// export default phoneBookSlice.reducer; 
