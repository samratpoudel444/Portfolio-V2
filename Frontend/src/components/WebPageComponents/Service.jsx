import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using modern technologies.",
    icon: "🌐",
    link: "https://www.geeksforgeeks.org/web-tech/web-technology/",
  },
  {
    title: "Mobile App Development",
    description: "Creating mobile applications for Android platforms.",
    icon: "📱",
    link: "https://www.geeksforgeeks.org/mobile-computing/what-is-mobile-app-development-process/",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and enhancing user experience.",
    icon: "🎨",
    link: "https://www.geeksforgeeks.org/websites-apps/importance-of-ui-ux-design/",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Developing robust e-commerce platforms to boost online sales.",
    icon: "🛒",
    link: "https://www.geeksforgeeks.org/computer-networks/e-commerce/",
  },
  {
    title: "SEO Optimization",
    description: "Improving website visibility and search engine rankings.",
    icon: "🔍",
    link: "https://www.geeksforgeeks.org/techtips/search-engine-optimization-seo-basics/",
  },
  {
    title: "Cloud Services",
    description: "Offering cloud integration and management solutions.",
    icon: "☁️",
    link: "https://www.geeksforgeeks.org/cloud-computing/cloud-based-services/",
  },
];

const Service = () => {
  return (
    <div className="mt-16 sm:mx-40 mx-4" id="services">
      <div className="flex justify-between items-center mb-12">
        <div>
          <p className="text-2xl">- Services</p>
          <h1 className="font-bold text-4xl">
            <span className="text-yellow-500">Services</span> I provide
          </h1>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-3 gap-8 flex flex-col">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-2 p-6 rounded-2xl bg-gray-100 hover:shadow-lg"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>

            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 flex items-center gap-1 hover:underline"
              aria-label={`Learn about ${service.title}`}
            >
              Learn {service.title} <ArrowForwardIcon fontSize="small" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
