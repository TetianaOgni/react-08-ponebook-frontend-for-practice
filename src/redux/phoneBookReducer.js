const initialState = {
    contacts: [], 
    filter: ''
   
 }

export const phoneBookReducer = (state = initialState, action) => {
    switch(action.type){
        case "phoneContacts/setContacts": {
           return {
            ...state, contacts: action.payload
           }
        }
        case "phoneContacts/removeContact":{
           return {
            ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload)
           }
        }
        case "phoneContacts/setFilter": {
            return {
                ...state, filter: action.payload
            }
        }
        default: return state
    }
    
}
export const setContacts = (payload)=>{
    return {
        type: "phoneContacts/setContacts",
        payload,
    }
}
export const removeContact = (contactId)=>{
    return {
        type: "phoneContacts/removeContact",
        payload: contactId,
    }
}
export const setFilter = (payload)=>{
    return {
        type: "phoneContacts/setFilter",
        payload,
    }
}

// {type: "phoneContacts/setContatcs", payload:  []}
// {type: "phoneContacts/setFilter", payload:  ''}