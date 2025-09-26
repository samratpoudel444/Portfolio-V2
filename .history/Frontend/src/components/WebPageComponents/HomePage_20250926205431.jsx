import AboutMe from "./AboutMe";
import Bars from "./Bars";
import BlogPage from "./Blog";
import Contact from "./contact";
import Footer from "./footer";
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
        <HomeSection id="home" />
        <Bars />
        <Service />
        <AboutMe />
        <ToolsUsed />
        <MyPortfolio />
        <BlogPage />
        <Contact />
        <Footer />
      </div>
    );
}

export default HomePage;