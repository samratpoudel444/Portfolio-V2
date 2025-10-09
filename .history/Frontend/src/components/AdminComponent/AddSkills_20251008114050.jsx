const AddSkills= ()=>
{
    return (
      <div className="border">
        <div className="text-4xl text-center Italic">Add Skills</div>
        <div>
          <form>
            <div className="flex flex-col gap-4">
              <div className="p-4">
                <label>Enter Skill Name: </label>
                <input type="text" name="SkillsName" placeholder="Skill Name" className=""/>
              </div>
              <div className="p-4">
                <label>Enter Skill Image: </label>
                <input type="file" name="SkillsName" placeholder="Skill Name" className="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddSkills;