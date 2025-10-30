import { useState } from "react";

const AddProjects= ()=>
{
    const [formData, setFormData]= useState({
        ProjectName:"",
        ProjectImage:"",
        ProjectLink:""
    })


    return (
      <div className="flex flex-col justify-center items-center bg-gray-50">
        <div className="text-4xl text-center Italic w-full h-16 bg-gray-300 p-2">
          <h1>Add Projects</h1>
        </div>
        <div className="mt-16 sm:text-xl">
          <form className=" flex flex-col gap-8 p-16 bg-gray-100 rounded-2xl shadow-2xl" onSubmit={handlesubmit}>
            <div className="sm:flex sm:flex-row flex flex-col gap-4 justify-start items-center">
              <label>Project name:</label>
              <input
                type="text"
                className="border rounded-2xl p-2"
                placeholder="Enter project name"
              />
            </div>

            <div className="sm:flex sm:flex-row flex flex-col gap-4 justify-start items-center">
              <label>Project Image:</label>
              <input
                type="file"
                className="border rounded-2xl p-2 w-1/2"
                placeholder="Enter project name"
              />
            </div>

            <div className="sm:flex sm:flex-row flex flex-col gap-4 justify-start items-center">
              <label>Project link:</label>
              <input
                type="text"
                className="border rounded-2xl p-2 "
                placeholder="Enter project name"
              />
            </div>

            <div className="flex justify-center">
              <button
                onClick="submit"
                className="bg-blue-500 text-white hover:bg-blue-600 rounded-2xl p-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}


export default AddProjects;