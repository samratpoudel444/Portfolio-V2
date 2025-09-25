import Samrat from "../../assets/Samrat1.png";

const data = [
  {
    Description: `I am passionate about both football and web development.
       Football provides me with a sense of camaraderie,
        competition, and physical activity, while web development 
        allows me to express my creativity, problem-solving skills, and build digital 
        solutions that impact people's lives positively. Both interests fuel my drive for continuous 
        earning and improvement, whether on the field or in front of a computer screen. They complement each other, 
        with football offering an outlet for physical energy and web development providing a platform for 
        intellectual growth and innovation. Overall, these passions enrich my life by providing diverse avenues for
        ¸ personal fulfillment and professional growth.`,
  },
];
const AboutMe = () => {
    return (
      <div className="mt-16 w-full h-128  bg-green-900 flex items-center px-16">
        <div className="rounded-full w-64 h-64 bg-yellow-500">
          <img
            src={Samrat}
            alt=""
            className="object-cover"
          />
        </div>
      </div>
    );

};

export default AboutMe;
