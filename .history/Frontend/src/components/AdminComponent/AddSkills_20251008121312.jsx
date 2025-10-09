import { useState } from "react";



const AddSkills= ()=>
{
    const [formData, setFormData]= useState({
        skillName:"",
        skillImage:null
    })

    const handleChange=(e)=>
    {
        const{name, value, files}= e.target;

        if(name === "skillImage")
            
    }

    return (
      <div className="flex flex-col justify-center items-center bg-gray-50">
        <div className="text-4xl text-center Italic w-full h-16 bg-gray-300 p-2">
          Add Skills
        </div>
        <div>
          <form className="mt-4 p-4 rounded-2xl shadow-2xl">
            <div className="flex flex-col gap-4">
              <div className="p-4 sm:flex sm:flex-row items-center sm:gap-8 flex flex-col gap-4">
                <label>Enter Skill Name: </label>
                <input
                  type="text"
                  name="SkillsName"
                  placeholder="Skill Name"
                  className="border p-2 rounded-xl w-64"
                />
              </div>
              <div className="p-4 sm:flex sm:flex-row items-center sm:gap-8 flex flex-col gap-4">
                <label>Enter Skill Image: </label>
                <input
                  type="file"
                  name="SkillsImage"
                  accept="image/*"
                  placeholder="Skill Image"
                  className="border w-64 rounded-xl p-2"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Add Task
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddSkills;