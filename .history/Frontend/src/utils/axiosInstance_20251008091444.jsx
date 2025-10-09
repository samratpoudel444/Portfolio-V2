import axios, {AxiosError} from "axios";
import store from "../redux/store";
import { useSelector } from "react-redux";

const baseURL = import.meta.env.VITE_API_URL;
const axiosInstance= axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        "Content-Type":"application/json",
    },
    withCredentials:true
})

const getTokenFromStore= ()=>
{
    const token= useSelector((state))
}

axiosInstance.interceptors.request.use((config)=>
{
    const token= 
})