const SideBar= ()=>
{
    return (
      <div className="w-64 h-screen bg-[#202123]">
        <div className="py-4  text-[#F7F7F8]">
          <h1 className="text-4xl font-bold">Dashboard</h1>
        </div>
        <div className="text-[#F7F7F8] flex flex-col gap-10 mt-20  ">
          <button>Dashboard</button>
          <button>Create Remainders</button>
          <button>Create Blogs</button>
          <button>Add Skills</button>
          <button>Add Experince</button>
          <button>Add Task</button>
        </div>
      </div>
    );
}

export default SideBar;