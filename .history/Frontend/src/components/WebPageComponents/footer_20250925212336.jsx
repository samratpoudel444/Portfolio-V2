const navigations= [{
    name:"Home",
    link:""
}]


const Footer= ()=>
{
    return (
      <div className="mt-16">
        <div className="px-16 mb-4">
          <div>
            <h1 className="text-3xl">
              Let's <a className="text-yellow-500 italic">Connect </a>there
            </h1>
          </div>

          <div className="mt-4 flex justify-between mr-16">
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
                  S
                </div>
                <div className="text-2xl">
                  Samrat <a className="text-yellow-500">.</a>
                </div>
              </div>
              <div>
                <p className="">
                  I’m Samrat Poudel, a Software Developer passionate about{" "}
                  <br />
                  building modern web solutions.
                </p>
              </div>
            </div>

            <div>
              <h1>Navigation</h1>
            </div>

            <div>Contact</div>
          </div>
        </div>
        <div className="w-full bg-green-900 text-white sm:flex-row justify-between sm:px-16 sm:text-xl flex flex-col py-4">
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