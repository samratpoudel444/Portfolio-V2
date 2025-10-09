import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
pers

export default configureStore({
    reducer:{
        user: userReducer
    }
})