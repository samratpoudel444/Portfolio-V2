const AddEducation= ()=>
{
    return (
      <div className="">
        <div className="h-16 w-full bg-gray-300 text-3xl flex justify-center items-center shadow-lg">
          <h1>Add Education</h1>
        </div>
        <div>
          <form>
            <div className="sm:flex sm:flex-row flex flex-col gap-4">
              <label>Education year:</label>
              <input type="text" name="EducationYear" id="EducationYear" placeholder="Enter education year"className="border rounded-xl"/>
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddEducation;
