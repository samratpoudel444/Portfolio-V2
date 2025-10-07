import GitHubCalendar from "react-github-calendar";

const MyContribution= ()=>
{
    return (
      <div className="border">
        <h2>My GitHub Contributions</h2>
        <GitHubCalendar username="samratpoudel444"blockSize={15}
        blockMargin={5}
         fontSize={16}
  color="#16a34a" />
      </div>
    );
}

export default MyContribution;