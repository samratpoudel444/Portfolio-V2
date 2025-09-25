import js from "../../assets/js.png";

const Tools = [
  {
    name: "Java Scripts",
    img: "js",
  },
  {
    name: "Java Scripts",
    img: js",
  },

  {
    name: "Java Scripts",
    img: js,
  },

  {
    name: "Java Scripts",
    img: js,
  },

  {
    name: "Java Scripts",
    img: "js.png",
  },

  {
    name: "Java Scripts",
    img: "js.png",
  },
];

const ToolsUsed = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl">
          <a className="text-yellow-500">-</a>Tools I Use
        </h1>
        <p className="text-4xl text-yellow-500 italic">Exploring The tools</p>
      </div>

      <div className="grid grid-cols-6 mt-16 mx-48 gap-4">
        {Tools.map((data, index) => (
          <div
            key={index}
            className="border-2 rounded-2xl p-6 flex flex-col justify-center items-center gap-4"
          >
            <img
              src={data.img}
              alt={data.name}
              className="border-2 h-16 w-16 rounded-full"
            />
            <h1>{data.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsUsed;
