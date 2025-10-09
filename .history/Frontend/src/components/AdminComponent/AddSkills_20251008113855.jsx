const AddSkills= ()=>
{
    return(
        <div className="border">
        <div className="text-4xl text-center Italic">Add Skills</div>
        <div>  
            <form >
            <label>Enter Skill Name: </label>
            <input type="text" name="SkillsName" placeholder="Skill Name" />
            </form>
        </div>
        </div>
    )
}

export default AddSkills;