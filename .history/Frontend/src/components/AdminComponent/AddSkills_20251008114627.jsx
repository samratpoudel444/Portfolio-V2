const AddSkills= ()=>
{
    return (
      <div className="border">
        <div className="text-4xl text-center Italic">Add Skills</div>
        <div>
          <form>
            <div className="flex flex-col gap-4">
              <div className="p-4 sm:flex sm:flex-row items-center sm:gap-8 flex flex-col gap-4">
                <label>Enter Skill Name: </label>
                <input
                  type="text"
                  name="SkillsName"
                  placeholder="Skill Name"
                  className="border p-2 rounded-xl"
                />
              </div>
              <div className="p-4">
                <label>Enter Skill Image: </label>
                <input
                  type="file"
                  name="SkillsName"
                  placeholder="Skill Name"
                  className="border w-64"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Add Task
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddSkills;