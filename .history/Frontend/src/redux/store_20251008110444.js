import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
import persistRe

export default configureStore({
    reducer:{
        user: userReducer
    }
})