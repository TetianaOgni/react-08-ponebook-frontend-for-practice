// import { configureStore } from "@reduxjs/toolkit";
// // import phoneBookReducer from "./phoneBookSlice"
// import contactsReducer from "./contactsSlice"
// import filterReducer from "./filterSlice"

// export const store = configureStore({
//   reducer: {
//     // phoneBook:  phoneBookReducer,
//     contacts: contactsReducer,
//     filter: filterReducer,
// },
// });

import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer} from "./contactsSlice"

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
},
});







