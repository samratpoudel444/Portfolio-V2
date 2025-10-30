const Dashboard =()=>
{
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="h-16 w-full bg-gray-300 flex justify-center items-center shadow-md text-white text-3xl font-semibold">
          <h1>Dashboard</h1>
        </div>
        <div className="mt-24 sm:flex sm:flex-row flex flex-col gap-8 border">
          <div className="border w-1/3 "></div>
          <div className="border w-1/3"></div>
          <div className="border w-1/3"></div>
        </div>
      </div>
    );
}


export default Dashboard;