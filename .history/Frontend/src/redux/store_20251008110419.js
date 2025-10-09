import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
persis

export default configureStore({
    reducer:{
        user: userReducer
    }
})