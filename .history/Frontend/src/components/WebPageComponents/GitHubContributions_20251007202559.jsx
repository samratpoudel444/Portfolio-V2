import { useState, useEffect, useRef } from "react";

function MyContribution() {
  const calendarRef = useRef(null);

  useEffect(() => {
    const loadCalendar = async () => {
      try {
        const GitHubCalendar = (await import("github-calendar")).default;

        if (calendarRef.current) {
          calendarRef.current.innerHTML = "";

          GitHubCalendar(calendarRef.current, "samratpoudel444", {
            responsive: true,
            tooltips: true,
            global_stats: true,
            summary_text: "Summary of my contributions:",
          }).then(() => {
            // Custom styling after calendar loads
            const rects =
              calendarRef.current.querySelectorAll("rect[data-level]");
            rects.forEach((rect) => {
              const level = rect.getAttribute("data-level");
              switch (level) {
                case "0":
                  rect.style.fill = "#ebedf0";
                  break;
                case "1":
                  rect.style.fill = "#9be9a8";
                  break;
                case "2":
                  rect.style.fill = "#40c463";
                  break;
                case "3":
                  rect.style.fill = "#30a14e";
                  break;
                case "4":
                  rect.style.fill = "#216e39";
                  break;
              }
            });
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
      <div ref={calendarRef} className="github-calendar-container">
        <div className="text-center text-gray-500 py-4">
          Loading GitHub contributions...
        </div>
      </div>
    </div>
  );
}

export default MyContribution;
