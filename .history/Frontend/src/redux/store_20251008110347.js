import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
PersistRedu

export default configureStore({
    reducer:{
        user: userReducer
    }
})