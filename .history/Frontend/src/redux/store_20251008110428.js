import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
persistReducer

export default configureStore({
    reducer:{
        user: userReducer
    }
})