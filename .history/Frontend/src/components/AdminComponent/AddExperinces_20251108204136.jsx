 
 import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";

const AddExperince= ()=>
{
  const [loading, setLoading]= useState(false);
    const [formData, setFormData] = useState({
      CompanyName: "",
      WorkedYear: "",
      Position:""
    });

    const handleChange= (e)=>
    {   
        const{name, value}= e.target;
        setFormData({...formData, [name]:value})
    }
    const handleSubmit= async(e)=>
    {
        e.preventDefault();
        try{
          setLoading(true);
          const res= await axiosInstance.post('/createExperince', formData);
          toast.success(res.data.message);
          setFormData({
            CompanyName: "",
            WorkedYear: "",
            Position: "",
          });
        }
        catch(err)
        {
            toast.error(err.response.data.message)
        }
        finally{
          setLoading(false)
        }
    }

    return (
      <div className="">
        <div className="h-16 bg-gray-300 flex justify-center items-center text-3xl shadow-lg">
          <h1>Add Experince</h1>
        </div>
        <div className="flex justify-center items-center mt-16 ">
          <form
            className=" p-8 shadow-2xl rounded-2xl flex flex-col gap-8"
            onSubmit={handleSubmit}
          >
            <div className="sm:flex sm:flex-row flex flex-col sm:text-xl text-lg sm:gap-8 gap-4 justify-between  items-center">
              <label>Company Name:</label>
              <input
                type="text"
                name="CompanyName"
                id="CompanyName"
                placeholder="Enter company name"
                className="border rounded-lg p-2"
                value={formData.CompanyName}
                onChange={handleChange}
              />
            </div>

            <div className="sm:flex sm:flex-row flex flex-col sm:text-xl text-lg sm:gap-8 gap-4 justify-between  items-center">
              <label>Worked Year:</label>
              <input
                type="text"
                name="WorkedYear"
                id="WorkedYear"
                placeholder="Enter Worked Year"
                className="border rounded-lg p-2"
                value={formData.WorkedYear}
                onChange={handleChange}
              />
            </div>

            <div className="sm:flex sm:flex-row flex flex-col sm:text-xl text-lg sm:gap-8 gap-4  justify-between items-center">
              <label>Position:</label>
              <input
                type="text"
                name="Position"
                id="Position"
                placeholder="Enter Position"
                className="border rounded-lg p-2 "
                value={formData.Position}
                onChange={handleChange}
              />
            </div>

            <div className="sm:flex sm:flex-row flex flex-col sm:text-2xl text-xl gap-8 items-center justify-around">
              <button
                disabled={loading}
                className={`border p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-800  ${
                  loading && "opacity-50 cursor-not-allowed"
                }`}
                type="submit"
              >
                {loading ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddExperince;
