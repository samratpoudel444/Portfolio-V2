import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";

const AddEducation= ()=>
{

    const[loading, setLoading]= useState("false");
     const [formData, setFormData] = useState({
       EducationInstitute: "",
       EducationYear: "",
       EducationFaculty:"",
     });

     const handleChange= (e)=>
     {
        const {name, value}= e.target;
        setFormData({...formData, [name]:value})
     }
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        setLoading(true)
        try{
             const res= await axiosInstance.post('/createEducation', formData);
             toast.success(res.data.message);
             setFormData({
               EducationInstitute: "",
               EducationYear: "",
               EducationFaculty: "",
             });
        }
        catch(err)
        {
          toast.error(err.response.data.message);
        }
        finally{
           setLoading(false);
        }

    }
    return (
      <div className="">
        <div className="h-16 w-full bg-gray-300 sm:text-3xl flex justify-center items-center shadow-lg text-2xl">
          <h1>Add Education</h1>
        </div>
        <div className="flex flex-col justify-center items-center sm:mt-16">
          <form className="sm:w-1/2 shadow-2xl p-4" onSubmit={handleSubmit}>
            <div className="sm:flex sm:flex-row flex flex-col gap-4 justify-center items-center p-8 mt-16  text-xl">
              <label>Education Institute:</label>
              <input
                type="text"
                name="EducationInstitute"
                id="EducationInstitute"
                placeholder="Enter education Institute"
                className="border rounded-xl p-2"
                onChange={handleChange}
                value={formData.EducationInstitute}
              />
            </div>

            <div className="sm:flex sm:flex-row flex flex-col gap-4 justify-center items-center p-8 text-xl">
              <label>Education year:</label>
              <input
                type="text"
                name="EducationYear"
                id="EducationYear"
                placeholder="Enter education year"
                className="border rounded-xl p-2"
                onChange={handleChange}
                value={formData.EducationYear}
              />
            </div>

            <div className="sm:flex sm:flex-row flex flex-col gap-4 justify-center items-center p-8  text-xl">
              <label>Education Faculty:</label>
              <input
                type="text"
                name="EducationFaculty"
                id="EducationFaculty"
                placeholder="Enter Education Faculty"
                className="border rounded-xl p-2"
                onChange={handleChange}
                value={formData.EducationFaculty}
              />
            </div>
            <div className="sm:flex sm:flex-row flex flex-col gap-4 justify-center items-center p-8  text-xl">
              <button
                className=" text-white p-2 rounded-xl bg-blue-500"
                type="submit"
              >
                {loading? Submit : }
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddEducation;
