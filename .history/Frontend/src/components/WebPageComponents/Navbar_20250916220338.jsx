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
      <div className="bg-green-900 h-16 rounded-4xl mt-8 ml-10 mr-10 py-2 flex flex-row items-center">
        <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-2 font-bold text-3xl">
          S
        </div>
        <div className="ml-4 text-2xl text-white">Samrat.</div>
        <div className="text-xl text-white flex items-center gap-3 ml-5">
          {items.map((item, index) => (
            <a key={index} href={item.link}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    );
}

export default Navbar;