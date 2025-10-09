const AddSkills= ()=>
{
    return(
        <div>
        <div>Add Skills</div>
        <div>  
            <form onSubmit={handleSubmit}>
            <input type="text" name="SkillsName" placeholder="Skill Name" />
            </form>
        </div>
        </div>
    )
}