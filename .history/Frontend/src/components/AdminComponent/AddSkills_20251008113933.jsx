const AddSkills= ()=>
{
    return (
      <div className="border">
        <div className="text-4xl text-center Italic">Add Skills</div>
        <div>
          <form>
            <div>
            <div className="p-4">
              <label>Enter Skill Name: </label>
              <input type="text" name="SkillsName" placeholder="Skill Name" />
            </div>
            <div className="p-4">
              <label>Enter Skill Name: </label>
              <input type="text" name="SkillsName" placeholder="Skill Name" />
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddSkills;