

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

   const colorScheme = {
     0: "#fef9c3", // no contributions - lightest yellow
     1: "#fef08a", // 1-9 contributions
     2: "#fde047", // 10-19 contributions
     3: "#facc15", // 20-29 contributions
     4: "#eab308", // 30+ contributions
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
     colorScheme={{
          0: "#fef9c3", // no contributions - lightest yellow
          1: "#fef08a", // low
          2: "#fde047", // medium
          3: "#facc15", // high
          4: "#eab308", }}
      />
    </div>
  );
}


export default MyContribution;