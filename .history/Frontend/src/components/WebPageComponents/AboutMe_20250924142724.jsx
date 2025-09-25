import Samrat from "../../assets/Samrat1.png";

const data = [
  {
    Description: `I am passionate about both football and web development.
Football provides me with a sense of camaraderie, competition, and physical activity, 
while web development allows me to express my creativity, problem-solving skills, 
and build digital solutions that impact people's lives positively.Both interests fuel my drive for continuous learning and improvement, whether on the field or in front of a computer screen.They complement each other, with football offering an outlet for physical energy 
and web development providing a platform for intellectual growth and innovation. 
Overall, these passions enrich my life by providing diverse avenues for personal fulfillment and professional growth.`,
  },
];

const AboutMe = () => {
  return (
    <div className="mt-16 w-full flex flex-col md:flex-row items-center px-8 md:px-16 gap-12 bg-green-900 py-16">
      {/* Image */}
      <div className="rounded-full w-64 h-64 bg-yellow-500 flex-shrink-0">
        <img
          src={Samrat}
          alt="Samrat"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="text-white text-lg md:text-xl whitespace-pre-line gap-8 flex flex-col">
      <h1 className="">About Me</h1>
        {data[0].Description}
      </div>
    </div>
  );
};

export default AboutMe;
