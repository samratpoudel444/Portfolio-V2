import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userSlice.js";
persistRe

export default configureStore({
    reducer:{
        user: userReducer
    }
})