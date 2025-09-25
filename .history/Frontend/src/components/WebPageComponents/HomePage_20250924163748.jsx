import AboutMe from "./AboutMe";
import Bars from "./Bars";
import HomeSection from "./HomeSection";
import Navbar from "./Navbar"
import Service from "./Service";
import ToolsUsed from "./ToolsUsed";


const HomePage= ()=>
{
    return (
      <div>
        <Navbar />
        <HomeSection />
        <Bars />
        <Service />
        <AboutMe />
        
      </div>
    );
}

export default HomePage;