import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig={
    key
}


export default configureStore({
    reducer:{
        user: userReducer
    }
})