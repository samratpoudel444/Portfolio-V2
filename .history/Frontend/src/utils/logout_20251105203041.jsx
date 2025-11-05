import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/userSlice";
import { toast } from "react-toastify";


const Logout= ()=>
{
    const dispatch= useDispatch();
    const user= useSelector((state)=> state.user)

    try{

    }
    catch(err)
    {
        toast.error()    }
}