import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";

export default configureStore({
    reducer:{
        user: userReducer
    }
})