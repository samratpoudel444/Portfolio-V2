import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/userSlice";
import { toast } from "react-toastify";
import axiosInstance from "./axiosInstance";


const Logout= async()=>
{
    const dispatch= useDispatch();
    const user= useSelector((state)=> state.user)

    try{
        const response= await axiosInstance.delete('/logout')
    }
    catch(err)
    {
        toast.error(err.response.data.message

        )    }
}