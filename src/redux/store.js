import { combineReducers,createStore} from 'redux'
import {devToolsEnhancer} from '@redux-devtools/extension'
import {phoneBookReducer} from "./phoneBookReducer"
 const rootReducer = combineReducers({
  phoneBook: phoneBookReducer
 })
const enhancer = devToolsEnhancer()
export const store = createStore(rootReducer, enhancer)








// import { configureStore } from "@reduxjs/toolkit";
// import phoneBookReducer from "./phoneBookSlice";

// import {reducer as rootReducer} from './reducer'

// export default configureStore({
//     reducer: {
//         contacts: phoneBookReducer,
//     }
// }) 



