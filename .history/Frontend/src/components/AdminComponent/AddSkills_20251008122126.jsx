import { useState } from "react";



const AddSkills= ()=>
{
    const [formData, setFormData]= useState({
        skillName:"",
        skillImage:null
    })

    const handleSubmit= (e)=>
    {
        e.preventDefault();
        alert(formData.skillName)
    }
    
 const [preview, setPreview] = useState(null);
    const handleChange=(e)=>
    {
        const{name, value, files}= e.target;

        if(name === "skillImage")
        {
            const file= files[0];
            setFormData({...formData, skillImage:file})

        if(file)
        {
            const reader= new FileReader();
            reader.onloadend=()=>
            {
                setPreview(reader.result)
            }
             reader.readAsDataURL(file);
        }
    }
    else{
         setFormData({ ...formData, [name]: value });
    }
    }

    return (
      <div className="flex flex-col justify-center items-center bg-gray-50">
        <div className="text-4xl text-center Italic w-full h-16 bg-gray-300 p-2">
          Add Skills
        </div>
        <div>
          <form
            className="mt-4 p-4 rounded-2xl shadow-2xl"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4">
              <div className="p-4 sm:flex sm:flex-row items-center sm:gap-8 flex flex-col gap-4">
                <label>Enter Skill Name: </label>
                <input
                  type="text"
                  name="skillName"
                  placeholder="Skill Name"
                  className="border p-2 rounded-xl w-64"
                     onChange={handleChange}
                />
              </div>
              <div className="p-4 sm:flex sm:flex-row items-center sm:gap-8 flex flex-col gap-4">
                <label>Enter Skill Image: </label>
                <input
                  type="file"
                  name="skillImage"
                  accept="image/*"
                  placeholder="Skill Image"
                  className="border w-64 rounded-xl p-2"
                  onChange={handleChange}
                />
              </div>
              {preview && (
                <div className="flex justify-center mt-2">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-40 h-40 object-cover rounded-xl border"
                  />
                </div>
              )}
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