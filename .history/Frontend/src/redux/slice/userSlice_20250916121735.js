import {createSlice} from '@reduxjs/toolkit'

export const userSlice= createSlice({
    name:"user",
    initialState:{
        data:{null},
        token:null,
    },
    reducers:{
        login:(state, action)=>
        {
            state.data= action.payload.user;
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