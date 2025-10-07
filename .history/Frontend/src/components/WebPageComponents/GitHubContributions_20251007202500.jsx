import { useState, useEffect, useRef } from "react";

function MyContribution() {
  const calendarRef = useRef(null);
  const [fontSize, setFontSize] = useState(14);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) setFontSize(14);
      else if (window.innerWidth > 768) setFontSize(14);
      else setFontSize(12);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Dynamically import the github-calendar library
    const loadCalendar = async () => {
      try {
        const GitHubCalendar = (await import("github-calendar")).default;

        if (calendarRef.current) {
          // Clear any existing content
          calendarRef.current.innerHTML = "";

          // Initialize the calendar
          GitHubCalendar(calendarRef.current, "samratpoudel444", {
            responsive: true,
            tooltips: true,
            global_stats: false,
          });
        }
      } catch (error) {
        console.error("Error loading GitHub calendar:", error);
      }
    };

    loadCalendar();
  }, []);

  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-center sm:text-2xl">
        My <a className="italic text-green-500">GitHub</a> Contributions
      </h1>
      <div
        ref={calendarRef}
        className="github-calendar"
        style={{ fontSize: `${fontSize}px` }}
      >
        {/* Loading state */}
        <div className="text-center text-gray-500">
          Loading the data just for you.
        </div>
      </div>
    </div>
  );
}

export default MyContribution;
