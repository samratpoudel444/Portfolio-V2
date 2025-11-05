import ErrorIcon from "@mui/icons-material/Error";
import { useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";

const EducationPopUp = ({id, onClose}) => {

    const [loading,setLoading]= useState(false)
   const handleDelete= async(id)=>
   {
    try{
        setLoading(true)
        const response = await axiosInstance.delete(`/deleteEducation/${id}`);
        toast.success(response.data.message);
    }
    catch(err)
    {
           toast.error(err.response.data.message);
    }
    finally
    {
         setLoading(false);
    }
   }
  return (
    <div className=" fixed border flex inset-0 backdrop-blur-sm justify-center items-center">
      <div className="flex flex-col border w-1/2 p-16 gap-16 rounded-2xl bg-gray-300">
        <p className="flex  justify-center text-xl font-bold">
          <ErrorIcon />
          Are You Sure you want to delete Record?
        </p>
        <div className="flex gap-8 justify-center">
          <button className="p-2 bg-red-500 rounded-2xl text-white hover:bg-red-600 ">
            {loading? "Delete"}
          </button>
          <button className="p-2 bg-green-500 rounded-2xl text-white hover:bg-green-600 "
          onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationPopUp;