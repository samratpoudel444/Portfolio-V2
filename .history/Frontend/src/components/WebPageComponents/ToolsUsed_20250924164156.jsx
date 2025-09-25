const Tools = [
  {
    name: "Java Scripts",
    img: "",
  },
  {
    name: "Java Scripts",
    img: "",
  },

  {
    name: "Java Scripts",
    img: "",
  },

  {
    name: "Java Scripts",
    img: "",
  },

  {
    name: "Java Scripts",
    img: "",
  },

  {
    name: "Java Scripts",
    img: "",
  },
];


const ToolsUsed= ()=>
{
    return(
        <div className="mt-16">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl"><a className="text-yellow-500">-</a>Tools I Use</h1>
                <p className="text-4xl text-yellow-500 italic">Exploring The tools</p>
            </div>

            <div>
               { Tools.map((data, index))}
            </div>

        </div>
    )
}

export default ToolsUsed;