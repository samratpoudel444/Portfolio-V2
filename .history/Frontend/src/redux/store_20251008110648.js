import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
Storage

const persistConfig={
    key:"root",
}


export default configureStore({
    reducer:{
        user: userReducer
    }
})