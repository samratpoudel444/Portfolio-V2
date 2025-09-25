import AboutMe from "./AboutMe";
import Bars from "./Bars";
import Footer from "./contact";
import HomeSection from "./HomeSection";
import MyPortfolio from "./MyPortfolio";
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
        <ToolsUsed />
        <MyPortfolio />
        <Footer/>
      </div>
    );
}

export default HomePage;