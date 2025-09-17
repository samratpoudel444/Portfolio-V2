import {createSlice} from '@reduxjs/toolkit'

export const userSlice= createSlice({
    name:"user",
    initialState:{
        data:null,
        token:null,
    },
    reducers:{
        login:(state, action)=>
        {
            state.user= action.payload.user;
        },
        logout:(state)=>
        {
            state.user= null
        }
    }
})

export const {login, logout}= userSlice.actions;

export const selectUser= (state)=> state.user.user;

export default userSlice.reducer;