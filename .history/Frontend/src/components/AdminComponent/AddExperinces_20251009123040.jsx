const AddExperince= ()=>
{
    return (
      <div>
        <div>
          <h1>Add Experince</h1>
        </div>
        <div>
          <form>
            <div className="sm:flex flex flex-col text-3xl ">
              <label>Comapny Name:</label>
              <input type="text" name="CompanyName" id="CompanyName"
              placeholder="Enter company name"
              className="" />
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddExperince;
