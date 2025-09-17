import Bars from "./Bars";
import HomeSection from "./HomeSection";
import Navbar from "./Navbar"

const HomePage= ()=>
{
    return (
      <div>
        <Navbar />
        <HomeSection />
        <Bars/>
      </div>
    );
}

export default HomePage;