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
          colorScheme={{
            0: "#ebedf0", // no contributions
            1: "#d4f0e1", // low
            2: "#97e2b5", // medium
            3: "#16a34a", // high
            4: "#064e3b", // very high
          }}
        />
        
      </div>
    );
}

export default MyContribution;