import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

const navigations = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Services",
    link: "",
  },
  {
    name: "About",
    link: "",
  },
  {
    name: "Projects",
    link: "",
  },
  {
    name: "Blogs",
    link: "",
  },
];

const personalData= [
  {
    phone:"9840265057",
    website:"www.samratpoudel.com.np",
    email:"poudelsamrat444@gmail.com",
    location:"kalanki, kathmandu"
  }
]

const Contact = () => {
  return (
      <div className="sm:px-16 px-4 mb-4 mt-16">
        <div>
          <h1 className="sm:text-4xl text-2xl">
            Let's <a className="text-yellow-500 italic">Connect </a>there
          </h1>
        </div>

        <div className="mt-4 sm:flex-row sm:justify-between sm:mr-16 flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
                S
              </div>
              <div className="sm:text-2xl text-xl">
                Samrat <a className="text-yellow-500">.</a>
              </div>
            </div>
            <div>
              <p className="mt-4">
                I’m Samrat Poudel, a Software Developer passionate about <br />
                building modern web solutions.
              </p>
              <div className="mt-4 flex gap-2">
                <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
                  <a href="">
                    <FacebookIcon />
                  </a>
                </div>
                <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
                  <a href="">
                    <InstagramIcon />
                  </a>
                </div>
                <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
                  <a href="">
                    <LinkedInIcon />
                  </a>
                </div>
                <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
                  <a href="">
                    <GitHubIcon />
                  </a>
                </div>
                <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
                  <a href="">
                    <XIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-xl font-bold text-yellow-500">Navigation</h1>
            {
              
            }
          </div>

          <div>
            <h1 className="text-xl font-bold text-yellow-500">Contact</h1>
          </div>
        </div>
      </div>

  );
};

export default Contact;
