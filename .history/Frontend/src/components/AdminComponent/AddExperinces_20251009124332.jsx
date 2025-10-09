const AddExperince= ()=>
{
    return (
      <div className="">
        <div className="h-16 bg-gray-300 flex justify-center items-center text-3xl shadow-lg">
          <h1>Add Experince</h1>
        </div>
        <div className="flex justify-center items-center mt-16 ">
          <form className=" p-4 shadow-lg flex flex-col gap-8">
            <div className="sm:flex sm:flex-row flex flex-col sm:text-xl text-lg gap-8 items-center">
              <label>Company Name:</label>
              <input
                type="text"
                name="CompanyName"
                id="CompanyName"
                placeholder="Enter company name"
                className="border rounded-lg p-2"
              />
            </div>

            <div className="sm:flex sm:flex-row flex flex-col sm:text-xl text-lg gap-8 items-center">
              <label>Worked Year:</label>
              <input
                type="text"
                name="CompanyName"
                id="CompanyName"
                placeholder="Enter Worked Year"
                className="border rounded-lg p-2"
              />
            </div>

            <div className="sm:flex sm:flex-row flex flex-col sm:text-xl text-lg gap-8 items-center">
              <label>Comapny Name:</label>
              <input
                type="text"
                name="CompanyName"
                id="CompanyName"
                placeholder="Enter company name"
                className="border rounded-lg p-2 ml-0"
              />
            </div>

            <div className="sm:flex sm:flex-row flex flex-col sm:text-2xl text-xl gap-8 items-center justify-center">
              <button className="border p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-800">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddExperince;
