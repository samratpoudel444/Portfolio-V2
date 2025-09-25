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
    name: "React js",
    img: js,
  },

  {
    name: "Redis",
    img: js,
  },

  {
    name: "Rabbit MQ",
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

      <div className="md:grid md:grid-cols-6 md:mt-16 md:mx-48 md:gap-4 justify-center items-center">
        {Tools.map((data, index) => (
          <div
            key={index}
            className="border-2 rounded-full md:h-48 p-6 flex flex-col justify-center items-center gap-4 bg-gray-100 hover:shadow-lg md:w-full  w-1/2"
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
