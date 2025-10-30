const CreateBlogs= ()=>
{
    return (
      <div>
        <div className="h-16 w-full bg-gray-300 sm:text-3xl flex justify-center items-center shadow-lg text-2xl">
          <h1>Create Blogs</h1>
        </div>
        <div className=" justify-center items-center flex flex-col p-16 sm:text-2xl text-xl">
          <form className="flex flex-col gap-8 p-16 shadow-lg rounded-2xl">
            <div className="sm:flex sm:flex-row items-center sm:gap-4 flex flex-col">
              <a>Enter Title:</a>
              <input
                type="text"
                className="border rounded-2xl sm:w-2/3 sm:h-16"
              />
            </div>
            <div>
              <div className="sm:flex sm:flex-row items-center sm:gap-4 flex flex-col">
                <a>Enter Description:</a>
                <input
                  type="text"
                  className="border rounded-2xl sm:w-2/3 sm:h-16"
                />
              </div>

            <div>
              <a>Enter Content:</a>
              <input type="text" className="border rounded-2xl" />
            </div>
            <div>
              <a>Enter Title:</a>
              <input type="text" className="border rounded-2xl" />
            </div>
          </form>
        </div>
      </div>
    );
}

export default CreateBlogs;