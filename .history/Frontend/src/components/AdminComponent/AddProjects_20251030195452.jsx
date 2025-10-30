const AddProjects= ()=>
{
    return (
      <div className="flex flex-col justify-center items-center bg-gray-50">
        <div className="text-4xl text-center Italic w-full h-16 bg-gray-300 p-2">
          <h1>Add Projects</h1>
        </div>
        <div className="mt-16 border">
          <form className="border">
            <label>Project name:</label>
            <input type="text" />

            <label>Project Image:</label>
            <input type="text" />

            <label>Enter project link:</label>
            <input type="text" />
          </form>
        </div>
      </div>
    );
}


export default AddProjects;