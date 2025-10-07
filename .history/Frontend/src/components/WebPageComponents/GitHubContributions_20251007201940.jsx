

import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

function MyContribution() {
  const [fontSize, setFontSize] = useState(14);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) setFontSize(14);
      else if (window.innerWidth > 768) setFontSize(14);
      else setFontSize(12);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // set initially
    return () => window.removeEventListener("resize", handleResize);
  }, []);

   const theme = {
     background: "transparent",
     text: "#000000",
     grade4: "#eab308", // darkest - most contributions
     grade3: "#facc15",
     grade2: "#fde047",
     grade1: "#fef08a",
     grade0: "#fef9c3", // lightest - no contributions
   };

  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-center sm:text-2xl">
        My <a className="italic text-yellow-500">GitHub</a> Contributions
      </h1>
      <GitHubCalendar
        username="samratpoudel444"
        blockSize={18}
        blockMargin={6}
        fontSize={fontSize}
        theme={theme}
        style={{ margin: "0 auto" }}
      />
    </div>
  );
}


export default MyContribution;