import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/userSlice";
import { toast } from "react-toastify";
import axiosInstance from "./axiosInstance";
import { useNavigate } from "react-router";


const Logout= async()=>
{
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const user= useSelector((state)=> state.user)

    try{
        const response= await axiosInstance.delete('/logout');
        toast.success(response.data.message)
        dispatch(clearUser());
        navigate("/login")
    }
    catch(err)
    {
        toast.error(err.response.data.message

        )    }
}

export default Logout;