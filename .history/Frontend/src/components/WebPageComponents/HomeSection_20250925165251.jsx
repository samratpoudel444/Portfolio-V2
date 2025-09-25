import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Samrat from "../../assets/Samrat2.png";
const HomeSection = () => {
  return (
    <div className="sm:flex sm:mt-16 sm:mx-auto sm:w-[80%] gap-16 py-10 sm:justify-between flex flex-col-reverse">
      <div className="">
        <div className="border-4 border-yellow-400 h-16 w-48 text-center sm:text-3xl py-2 text-xl">
          Hello There!
        </div>
        <div className="font-bold sm:text-4xl mt-4 text-2xl">
          I am{" "}
          <i className="text-yellow-400 font-light underline">Samrat Poudel,</i>
          <br />
          Software Developer <br />
          Based in Nepal <br />
          <br />
        </div>
        <div>
          I'm an experienced Software Developer based on Nepal having worked
          <br /> on serveral projects based on React.js and Node.js
          collaborating with
          <br />
          various technology.
        </div>
        <div className="flex flex-row mt-16 gap-8">
          <button className="bg-yellow-500 rounded-3xl px-1  flex gap-4 items-center hover:underline">
            <a className="rounded-3xl bg-green-800 py-3 text-white px-3">
              View My Portfolio
            </a>
            <a>
              <PlayCircleFilledIcon fontSize="large" />
            </a>
          </button>
          <button className="border-2 px-5 rounded-3xl py-3 hover:bg-green-50">
            Hire me{" "}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center w-1/2">
        <div className="rounded-full bg-yellow-500 sm:w-[420px] sm:h-[420px] w-[200px] h-[200px]"></div>
        <img
          src={Samrat}
          alt="samrat poudel"
          className="absolute z-10 sm:w-[500px] sm:h-[500px] ml-8"
        />
        <button></button>
      </div>
    </div>
  );
};

export default HomeSection;
