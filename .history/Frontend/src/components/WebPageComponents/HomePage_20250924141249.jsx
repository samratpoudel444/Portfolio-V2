import AboutMe from "./AboutMe";
import Bars from "./Bars";
import HomeSection from "./HomeSection";
import Navbar from "./Navbar"
import Service from "./Service";
AboutMe

const HomePage= ()=>
{
    return (
      <div>
        <Navbar />
        <HomeSection />
        <Bars />
        <Service />
      </div>
    );
}

export default HomePage;