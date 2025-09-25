import AboutMe from "./AboutMe";
import Bars from "./Bars";
import Contact from "./contact";
import Contact from "./contact";
import HomeSection from "./HomeSection";
import MyPortfolio from "./MyPortfolio";
import Navbar from "./Navbar"
import Service from "./Service";
import ToolsUsed from "./ToolsUsed";
Foote

const HomePage= ()=>
{
    return (
      <div>
        <Navbar />
        <HomeSection />
        <Bars />
        <Service />
        <AboutMe />
        <ToolsUsed />
        <MyPortfolio />
        <Contact/>
      </div>
    );
}

export default HomePage;