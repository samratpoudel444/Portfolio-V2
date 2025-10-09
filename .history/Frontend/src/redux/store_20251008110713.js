import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import localStorage from "redux-persist/lib/storage";

const persistConfig={
    key:"root",
}


export default configureStore({
    reducer:{
        user: userReducer
    }
})