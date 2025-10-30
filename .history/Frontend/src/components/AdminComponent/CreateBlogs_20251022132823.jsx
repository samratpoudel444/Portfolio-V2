const CreateBlogs= ()=>
{
    return (
      <div>
        <div className="h-16 w-full bg-gray-300 sm:text-3xl flex justify-center items-center shadow-lg text-2xl">
          <h1>Create Blogs</h1>
        </div>
        <div className=" justify-center items-center flex flex-col p-16">
          <form className="flex flex-col gap-8 p-16 shadow-lm">
            <div className="flex items-center gap-4">
              <a>Enter Title:</a>
              <input type="text" className="border rounded-2xl w-2/3 h-16" />
            </div>
            <div>
              <a>Enter Description:</a>
              <input type="text" className="border rounded-2xl" />
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