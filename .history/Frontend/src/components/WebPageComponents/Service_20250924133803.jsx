import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const services= [{
  title: "Web Development",
  description: "Building responsive and dynamic websites using modern technologies.",
  icon: "🌐",
},
{
  title: "Mobile App Development",
  description: "Creating user-friendly mobile applications for iOS and Android platforms.",
  icon: "📱",
},
{
  title: "UI/UX Design",
  description: "Designing intuitive user interfaces and enhancing user experience.",
  icon: "🎨",
},
{
  title: "E-commerce Solutions",
  description: "Developing robust e-commerce platforms to boost online sales.",
  icon: "🛒",
},
{
  title: "SEO Optimization",
  description: "Improving website visibility and search engine rankings.",
  icon: "🔍",
},
{
  title: "Cloud Services",
  description: "Offering cloud integration and management solutions.",
  icon: "☁️",
},
];


const Service = () => {
  return (
    <div className="mt-16 flex justify-between items-center mx-40">
      <div className="flex flex-col">
        <p className="text-2xl">-Services</p>
        <h1 className="font-bold text-4xl">Service I provide</h1>
      </div>
      <div>
        <button className="bg-yellow-500 text-white rounded-3xl px-5 py-3 flex items-center gap-2 hover:underline">
          <a>View all services</a>
        </button>
      </div>
      
    </div>
  );
};

export default Service;
