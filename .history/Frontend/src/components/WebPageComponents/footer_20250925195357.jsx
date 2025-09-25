const Footer= ()=>
{
    return (
      <div>
        <div>
          <div>
            <h1>Let's <a className="text-yellow-500">Connect</a>there</h1>
            <button><div>
            <a className="">View</a></div></button>
          </div>

          <div>
            <div className="flex gap-3 items-center">
              <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
                S
              </div>
              <div className="text-2xl">Samrat <a className="text-yellow-500">.</a></div>
            </div>
            <div>Navigation</div>

            <div>Contact</div>
          </div>
        </div>
        <div className="w-screen bg-green-900 text-white sm:flex justify-between sm:px-16 sm:text-xl items-center flex flex-col">
          <span>
            Copyright &copy; 2025 <a className="text-yellow-500">Samrat</a>. All
            Rights Reserved.
          </span>
          <span>User Terms & Conditions | Privacy Policy</span>
        </div>
      </div>
    );
}

export default Footer;