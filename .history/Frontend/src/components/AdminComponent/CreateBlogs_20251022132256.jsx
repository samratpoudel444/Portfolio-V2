const CreateBlogs= ()=>
{
    return (
      <div>
        <div className="h-16 w-full bg-gray-300 sm:text-3xl flex justify-center items-center shadow-lg text-2xl">
          <h1>Create Blogs</h1>
        </div>
        <div className=" justify-center items-center flex gap-8">
          <form>
            <div>
              <a>Enter Title:</a>
              <input type="text" className="border rounded-2xl" />
            </div>
            <div>
              <a>Enter Title:</a>
              <input type="text" className="border rounded-2xl" />
            </div>
            <div>
              <a>Enter Title:</a>
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