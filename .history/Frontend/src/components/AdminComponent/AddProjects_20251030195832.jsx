const AddProjects= ()=>
{
    return (
      <div className="flex flex-col justify-center items-center bg-gray-50">
        <div className="text-4xl text-center Italic w-full h-16 bg-gray-300 p-2">
          <h1>Add Projects</h1>
        </div>
        <div className="mt-16 border">
          <form className="border flex flex-col gap-">
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

            <button onClick="submit"></button>
          </form>
        </div>
      </div>
    );
}


export default AddProjects;