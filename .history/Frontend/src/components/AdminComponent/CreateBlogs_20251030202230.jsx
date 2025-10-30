import { useState } from "react";

const CreateBlogs = () => {

  const [formData, setFormData] = useState({
    BlogTitle: "",
    Description: "",
    Content:"",
    AddImage:null
  });

  const handleSubmit= (e)=>
  {

  }




  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="h-16 w-full bg-gray-300 flex justify-center items-center shadow-md text-white text-3xl font-semibold">
        <h1>Create Blog</h1>
      </div>

      <div className="flex justify-center items-center flex-col mt-10 px-4">
        <form className="bg-white flex flex-col gap-8 p-10 shadow-2xl rounded-2xl w-full max-w-3xl border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <label className="text-lg font-medium w-40 text-gray-700">
              Blog Title:
            </label>
            <input
              type="text"
              name="BlogTitle"
              placeholder="Enter your blog title"
              className="border border-gray-300 rounded-xl w-full sm:w-2/3 h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <label className="text-lg font-medium w-40 text-gray-700">
              Description:
            </label>
            <input
              type="text"
              name="Description"
              placeholder="Enter a short description"
              className="border border-gray-300 rounded-xl w-full sm:w-2/3 h-12 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
            <label className="text-lg font-medium w-40 text-gray-700 mt-2">
              Content:
            </label>
            <textarea
              name="Content"
              placeholder="Write your full blog content here..."
              className="border border-gray-300 rounded-xl w-full sm:w-2/3 h-40 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <label className="text-lg font-medium w-40 text-gray-700">
              Add Image:
            </label>
            <input
            name="AddImage"
              type="file"
              className="border border-gray-300 rounded-xl w-full sm:w-2/3 h-12 px-4 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white text-lg px-10 py-3 rounded-full shadow-md hover:bg-blue-700 active:scale-95 transition-transform"
            >
              Submit Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogs;
