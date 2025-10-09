import axios, {AxiosError} from "axios";
import store from "../redux/store";

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
    const
}

axiosInstance.interceptors.request.use((config)=>
{
    const token= 
})