import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, logout } from "../redux/slice/userSlice";
import axiosInstance from "./axiosInstance";


const fetchUserInfo= async()=>
{
    const data= await axiosInstance.get("/getMyInfo")
    console.log(data);
}

const FetchUserData= ()=>
{
    const 
}

export default FetchUserData;