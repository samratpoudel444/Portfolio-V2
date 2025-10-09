import axios, {AxiosError} from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const axiosInstance= axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        "Content-Type":"application/json",
    },
    withCredentials:true
})

axios