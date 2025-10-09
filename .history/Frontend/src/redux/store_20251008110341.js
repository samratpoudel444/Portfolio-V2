import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
Persist

export default configureStore({
    reducer:{
        user: userReducer
    }
})