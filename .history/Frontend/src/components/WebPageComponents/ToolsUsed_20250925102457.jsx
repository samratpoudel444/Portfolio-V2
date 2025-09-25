import js from "../../assets/js.png";

const Tools = [
  {
    name: "Java Script",
    img: js,
  },
  {
    name: "Express js",
    img: js,
  },

  {
    name: "Node js ",
    img: js,
  },

  {
    name: "React js ",
    img: js,
  },

  {
    name: "Java Script",
    img: js,
  },

  {
    name: "Java Script",
    img: js,
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
            className="border-2 rounded-full h-48 p-6 flex flex-col justify-center items-center gap-4 bg-gray-100 hover:shadow-lg"
          >
            <img
              src={data.img}
              alt={data.name}
              className="border-2 h-16  rounded-full"
            />
            <h1 className="text-xl font-semibold">{data.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsUsed;
