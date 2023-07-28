import { createSlice } from "@reduxjs/toolkit"

   const initialState = {
       contacts: [], 
       filter: ''
      
    }
   const phoneBookSlice = createSlice({
    name: "phoneContacts",
    initialState: initialState,
   reducers:{
    addContacts: (state, action) => {
         state.contacts = [...state.contacts, action.payload]
        },
    
    removeContact: (state, action) => {
           state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
          },

    filterContacts: (state, action)=> {
                state.contacts = [...state.contacts, action.payload]
    },
    }
   }
   )
export const { addContacts, removeContact, filterContacts} = phoneBookSlice.actions
export default phoneBookSlice.reducer;  


//    setContacts setFilter замінила на addContacts filterContacts
   // export const phoneBookReducer = (state = initialState, action) => {
   //     switch(action.type){
   //         case "phoneContacts/setContacts": {
   //            return {
   //             ...state, contacts: action.payload
   //            }
   //         }
   //         case "phoneContacts/removeContact":{
   //            return {
   //             ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload)
   //            }
   //         }
   //         case "phoneContacts/setFilter": {
   //             return {
   //                 ...state, filter: action.payload
   //             }
   //         }
   //         default: return state
   //     }
       
   // }
   // export const setContacts = (payload)=>{
   //     return {
   //         type: "phoneContacts/setContacts",
   //         payload,
   //     }
   // }
   // export const removeContact = (contactId)=>{
   //     return {
   //         type: "phoneContacts/removeContact",
   //         payload: contactId,
   //     }
   // }
   // export const setFilter = (payload)=>{
   //     return {
   //         type: "phoneContacts/setFilter",
   //         payload,
   //     }
   // }
   
   // {type: "phoneContacts/setContatcs", payload:  []}
   // {type: "phoneContacts/setFilter", payload:  ''}



















// import { createSlice } from "@reduxjs/toolkit";
// import shortid from 'shortid';

// const phoneBookSlice = createSlice({
//     name: 'contacts',
//     initialState: {
//         contacts: []
//     },
//     reducers: {
//      addContacts(state, action){
//         console.log(state)
//         console.log(action)
//         state.contacts.push({
//             id: shortid.generate(),
//             data: action.payload.data,
//         })
//      },
//      removeContacts(state, action){
//         state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
//      }
//     },
// })

// export const {addContacts, removeContacts} = phoneBookSlice.actions
// export default phoneBookSlice.reducer
