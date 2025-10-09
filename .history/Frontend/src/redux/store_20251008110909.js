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
    user:
})


export default configureStore({
    reducer:{
        user: userReducer
    }
})