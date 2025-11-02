import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:"root",
    storage,
    whitelist:["user"]
}

const rootReducers= combineReducers({
    user:userReducer,
})

const persistedReducer= persistReducer(persistConfig, rootReducers);

const store= configureStore({
    reducer:persistedReducer
})
 const persistor= persistStore(store);

 export default {store;
