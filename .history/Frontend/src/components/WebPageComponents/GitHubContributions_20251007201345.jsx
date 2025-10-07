

import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

function MyContribution() {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) setFontSize(16);
      else if (window.innerWidth > 768) setFontSize(18);
      else setFontSize(12);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // set initially
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col">
        <h1 className="">My <a className="italic text-ye"></a></h1>
      <GitHubCalendar
        username="samratpoudel444"
        blockSize={18}
        blockMargin={6}
        fontSize={fontSize}
        color="#16a34a"
      />
      
    </div>
  );
}


export default MyContribution;