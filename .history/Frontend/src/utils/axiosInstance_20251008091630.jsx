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
    const token= useSelector((state)=>state.user.token);
    return token;
}

axiosInstance.interceptors.request.use((config)=>
{
    const token= getTokenFromStore();

    if(token)
    {
        config.headers["Authorization"]= `Bearer ${token}`

    }
    return config;
})