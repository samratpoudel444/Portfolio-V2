import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
persist

export default configureStore({
    reducer:{
        user: userReducer
    }
})