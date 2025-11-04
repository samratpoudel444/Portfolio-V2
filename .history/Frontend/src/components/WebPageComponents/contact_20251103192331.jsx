import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

const navigations = [
  {
    name: "Home",
    link: "/#home",
  },
  {
    name: "Services",
    link: "/#services",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Projects",
    link: "/#projects",
  },
  {
    name: "Blogs",
    link: "/#blogs",
  },
];

const personalData= 
  {
    phone:"9840265057",
    website:"www.samratpoudel.com.np",
    email:"poudelsamrat444@gmail.com",
    location:"kalanki, kathmandu"
  }


const Contact = () => {
  return (
    <div className="sm:px-16 px-4 py-16 bg-gray-100" id="contact">
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
                <a
                  href="https://www.facebook.com/samrat.poudel.351"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
              </div>
              <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
                <a
                  href="https://www.instagram.com/poudel.samrat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
              </div>
              <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
                <a
                  href="https://www.linkedin.com/in/samrat-poudel-bab846175/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </div>
              <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
                <a
                  href="https://github.com/samratpoudel444"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
              </div>
              <div className="bg-yellow-500 rounded-full w-12 h-12 ml-3 text-center py-1.5 font-bold text-3xl">
                <a
                  href="https://x.com/analyze_we"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold text-yellow-500">Navigation</h1>
          <div className="flex flex-col gap-4 mt-4">
            {navigations.map((data, item) => (
              <a key={item} href={data.link}>
                {data.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold text-yellow-500">Contact</h1>
          <div className="flex flex-col gap-4 mt-4">
            <a>{personalData.phone}</a>
            <a>{personalData.website}</a>
            <a>{personalData.email}</a>
            <a>{personalData.location}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
