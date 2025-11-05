import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/userSlice";
import { toast } from "react-toastify";
import axiosInstance from "./axiosInstance";
import { useNavigate } from "react-router";


const useLogout= async()=>
{
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const user= useSelector((state)=> state.user)

    const logout= async()=>
    {}

}

export default useLogout;