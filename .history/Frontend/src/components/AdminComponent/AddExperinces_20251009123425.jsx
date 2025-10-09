const AddExperince= ()=>
{
    return (
      <div className="">
        <div className="h-16 bg-gray-300 flex justify-center items-center text-3xl shadow-lg">
          <h1>Add Experince</h1>
        </div>
        <div className="">
          <form>
            <div className="sm:flex flex flex-col sm:text-2xl text-xl w-1/2 border">
              <label>Comapny Name:</label>
              <input type="text" name="CompanyName" id="CompanyName"
              placeholder="Enter company name"
              className="border rounded-lg" />
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddExperince;
