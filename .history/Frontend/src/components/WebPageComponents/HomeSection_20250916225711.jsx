import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const HomeSection = () => {
  return (
    <div className="mt-16 mx-auto w-[80%]">
      <div className="border-4 border-yellow-400 h-16 w-48 text-center text-3xl py-2">
        Hello There!
      </div>
      <div className="font-bold text-4xl mt-4">
        I am{" "}
        <i className="text-yellow-400 font-light underline">Samrat Poudel,</i>
        <br />
        Software Developer <br />
        Based in Nepal <br />
        <br />
      </div>
      <div>
        I'm an experienced Software Developer based on Nepal <br />
        Having worked on serveral projects based on React.js and <br />
        Node.js collaborating with various technology.
      </div>
      <div className="flex flex-row mt-16">
        <button className="bg-yellow-500 rounded-3xl px-1 py-3 gap-5">
          <a className="rounded-3xl bg-green-800 py-3 text-white px-3">
            View My Portfolio
          </a>
        </button>
        <button></button>
      </div>
    </div>
  );
};

export default HomeSection;
