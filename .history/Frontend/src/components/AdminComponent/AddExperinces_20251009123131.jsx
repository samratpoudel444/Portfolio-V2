const AddExperince= ()=>
{
    return (
      <div>
        <div>
          <h1>Add Experince</h1>
        </div>
        <div>
          <form>
            <div className="sm:flex flex flex-col sm:text-2xl text-xl w-1/2  items-center justify-center">
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
