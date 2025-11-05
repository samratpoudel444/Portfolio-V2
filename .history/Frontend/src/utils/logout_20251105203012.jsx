import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/userSlice";


const Logout= ()=>
{
    const dispatch= useDispatch();
    const user= useSelector((state)=> state.user)
}