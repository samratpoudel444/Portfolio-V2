import GitHubCalendar from "react-github-calendar";

const MyContribution= ()=>
{
    return (
      <div className="border flex flex-col ">
        <h2 className="text-center mb-16 sm:text-4xl text-xl">
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

export default MyContribution;