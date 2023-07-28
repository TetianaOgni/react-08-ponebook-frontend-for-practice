import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import phoneBookReducer from "./phoneBookSlice"


const phoneBookPersistConfig = {
  key: 'contacts', 
  storage,
  whitelist:['contacts']
}
// повʼязуем редьюс із локалсториджем
export const store = configureStore({
  reducer: {
    phoneBook: persistReducer(phoneBookPersistConfig, phoneBookReducer),
},

middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}),

});
export const persistor = persistStore(store)





