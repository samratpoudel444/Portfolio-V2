const AddProjects= ()=>
{
    return (
      <div className="flex flex-col justify-center items-center bg-gray-50 p-16">
        <div className="text-4xl text-center Italic w-full h-16 bg-gray-300 p-2">
          <h1>Add Projects</h1>
        </div>
        <div className="mt-16 border">
          <form className="border flex flex-col gap-8">
            <div className="sm:flex sm:flex-row flex flex-col">
              <label>Project name:</label>
              <input type="text" />
            </div>

            <div>
              <label>Project Image:</label>
              <input type="file" />
            </div>

            <div>
              <label>Project link:</label>
              <input type="text" />
            </div>

            <div className="flex justify-center">
              <button onClick="submit" className="border rounded-2xl p-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}


export default AddProjects;