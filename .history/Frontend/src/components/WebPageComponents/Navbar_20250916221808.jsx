const Navbar= ()=>
{
    const items = [
      {
        name: "Home",
        link: "/home",
      },
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Projects",
        link: "/projects",
      },
      {
        name: "Blogs",
        link: "/blogs",
      },
      {
        name: "Testimonials",
        link: "/testimonials",
      },
    ];
    return (
      <div className="bg-green-900 h-16 rounded-4xl mt-4 mx-auto  py-2 flex flex-row items-center w-[95%]">
        <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1 font-bold text-3xl">
          S
        </div>
        <div className="ml-4 text-2xl text-white font-bold">
          Samrat <span className="text-yellow-700">.</span>
        </div>
        <div className="text-xl text-white flex items-center gap-8 ml-64  ">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:underline hover:text-yellow-500"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="ml-auto mr-4">
          <button className="bg-white rounded-3xl px-5 py-3 ">
            Contact me
          </button>
        </div>
      </div>
    );
}

export default Navbar;