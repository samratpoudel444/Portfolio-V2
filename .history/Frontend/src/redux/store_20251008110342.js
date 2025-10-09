import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
PersistR

export default configureStore({
    reducer:{
        user: userReducer
    }
})