import GitHubCalendar from "react-github-calendar";

const MyContribution= ()=>
{
    return (
      <div className="border flex">
        <h2>My GitHub Contributions</h2>
        <GitHubCalendar username="samratpoudel444"blockSize={18}
        blockMargin={6}
         fontSize={24}
        color="#16a34a" />
      </div>
    );
}

export default MyContribution;