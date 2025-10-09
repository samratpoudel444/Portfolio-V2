import axios, {AxiosError} from "axios";


const baseURL = import.meta.env.VITE_API_URL;
const axiosInstance= axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        "Content-Type":"application/json",
    },
    withCredentials:true
})

const getToken

axiosInstance.interceptors.request.use((config)=>
{
    const token= 
})