const AddEducation= ()=>
{
    return (
      <div className="">
        <div className="h-16 w-full bg-gray-300 sm:text-3xl flex justify-center items-center shadow-lg text-2xl">
          <h1>Add Education</h1>
        </div>
        <div className="flex flex-col justify-center items-center sm:mt-16">
          <form className="sm:w-1/2 shadow-2xl p-4">
            <div className="sm:flex sm:flex-row flex flex-col gap-4 justify-center items-center p-8 mt-16  text-2xl">
              <label>Education Institute:</label>
              <input
                type="text"
                name="Education Institute"
                id="EducationYear"
                placeholder="Enter education year"
                className="border rounded-xl p-2"
              />
            </div>

            <div className="sm:flex sm:flex-row flex flex-col gap-4 justify-center items-center p-8 text-2xl">
              <label>Education year:</label>
              <input
                type="text"
                name="EducationYear"
                id="EducationYear"
                placeholder="Enter education year"
                className="border rounded-xl p-2"
              />
            </div>

            <div className="sm:flex sm:flex-row flex flex-col gap-4 justify-center items-center p-8  text-2xl">
              <label>Education year:</label>
              <input
                type="text"
                name="EducationYear"
                id="EducationYear"
                placeholder="Enter education year"
                className="border rounded-xl p-2"
              />
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddEducation;
