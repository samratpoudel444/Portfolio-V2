import {createSlice} from '@reduxjs/toolkit'

export const userSlice= createSlice({
    name:"user",
    initialState:{
        data:{},
        token:null,
    },
    reducers:{
        login:(state, action)=>
        {
            state.data= action.payload.data;
            state.token= action.payload.token;
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