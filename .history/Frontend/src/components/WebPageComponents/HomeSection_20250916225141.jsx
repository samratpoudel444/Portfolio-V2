const HomeSection= ()=>
{
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
        <div className="flex flex-row">
          <button className="bg-yellow-600"><a className=""></a></button>
          <button></button>
        </div>
      </div>
    );
}

export default HomeSection;