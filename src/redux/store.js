import { combineReducers,createStore} from 'redux'
import {devToolsEnhancer} from '@redux-devtools/extension'
import {phoneBookReducer} from "./phoneBookReducer"
 const rootReducer = combineReducers({
  phoneBook: phoneBookReducer
 })
const enhancer = devToolsEnhancer()
export const store = createStore(rootReducer, enhancer)






