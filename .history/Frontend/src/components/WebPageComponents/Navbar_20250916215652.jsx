const Navbar= ()=>
{
    const items= [
        {
            "name":"Home"
            "link"
        }
    ]
    return(
        <div className="bg-green-900 h-16 rounded-4xl mt-8 ml-10 mr-10 py-2 flex flex-row items-center">
           <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-2 font-bold text-3xl">S</div>
           <div className="ml-4 text-2xl text-white">Samrat.</div>
        </div>
    )
}

export default Navbar;