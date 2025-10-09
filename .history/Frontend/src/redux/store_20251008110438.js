import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
import persisit

export default configureStore({
    reducer:{
        user: userReducer
    }
})