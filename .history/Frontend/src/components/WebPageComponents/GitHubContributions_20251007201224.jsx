import GitHubCalendar from "react-github-calendar";

const MyContribution= ()=>
{
    return (
      <div className=" flex flex-col p-8 sm:gap-16 gap-4">
        <h2 className="text-center sm:text-4xl text-xl">
          My <a className="italic text-yellow-500">GitHub</a> Contributions
        </h2>
        <GitHubCalendar
          username="samratpoudel444"
          blockSize={18}
          blockMargin={6}
          fontSize={24}
          color="#16a34a"
        />
      </div>
    );
}


import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

function MyContribution() {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) setFontSize(24);
      else if (window.innerWidth > 768) setFontSize(18);
      else setFontSize(12);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // set initially
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <GitHubCalendar
      username="samratpoudel444"
      blockSize={18}
      blockMargin={6}
      fontSize={fontSize}
      color="#16a34a"
    />
  );
}


