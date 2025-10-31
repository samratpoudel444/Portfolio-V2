const MyProfile= ()=>
{
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="h-16 w-full bg-gray-300 flex flex-row justify-start items-center shadow-md text-white text-3xl font-semibold">
          <Link to={-1}>
            <button className="border rounded-2xl p-2 text-xl text-black">
              <ArrowBackIcon /> Back
            </button>
          </Link>
          <h1 className="mx-auto">View Blogs</h1>
        </div>
      </div>
    );
}

export default MyProfile;