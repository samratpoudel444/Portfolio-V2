const AddExperince= ()=>
{
    return (
      <div className="">
        <div className="h-16 bg-gray-300 flex justify-center items-center text-3xl shadow-lg">
          <h1>Add Experince</h1>
        </div>
        <div className="flex justify-center items-center mt-16">
          <form className="border p-4 shadow-lg">
            <div className="sm:flex sm:flex-row flex flex-col sm:text-2xl text-xl gap-8 items-center">
              <label>Comapny Name:</label>
              <input type="text" name="CompanyName" id="CompanyName"
              placeholder="Enter company name"
              className="border rounded-lg p-2" />
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddExperince;
