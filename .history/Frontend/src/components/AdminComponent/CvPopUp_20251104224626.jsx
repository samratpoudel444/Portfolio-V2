import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";

const PopUpForm = ({ onClose }) => {

    const handleSubmit= async(e)=>
    {   
        e.preventDefault();
        try{
            const response= await axiosInstance.put('/updateCV', formData)
            toast.success(response.data.message)
        }
        catch(err){
            toast.error(err.response.data.message);
        }

    }

    const handleChange= (e)=>
    {
        const {name, value}= e.target;

       
            setFormData({ ...formData, [name]:value  });
        
    }

    const [formData, setFormData]= useState({
        CVPDF:null
    })


  return (
    <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-1/2 h-1/2 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
        <h2 className="text-xl font-bold">Update CV</h2>

        <div className="h-full mt-16">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-start flex-col ml-48 gap-4"
          >
            <label className="text-2xl ">Upload Cv:</label>
            <input
              type="text"
              name="CVPDF"
              onChange={handleChange}
              className="w-1/2 rounded-2xl border file:border file:rounded-2xl p-4 placeholder:ProvideC"
            />
            <button
              type="submit"
              className=" px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>

        <button
          onClick={onClose}
          className="self-end px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopUpForm;
