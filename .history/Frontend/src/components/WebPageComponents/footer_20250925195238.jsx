const Footer= ()=>
{
    return (
      <div>
        <div>
          <div>
            <h1></h1>
            <button></button>
          </div>

          <div>
            <div className="flex gap-3 items-center">
              <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
                S
              </div>
              <div className="text-xl">Samrat <a className="text-yellow"></a></div>
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