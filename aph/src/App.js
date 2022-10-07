import AboutUs from "./Component/AboutUs";
import Banner from "./Component/Banner";
import Card from "./Component/Card";
import ContactUs from "./Component/ContactUs";
import Contact_Banner from "./Component/Contact_Banner";
import Info from "./Component/Info";
import Navbar from "./Component/Navbar";
import Projects from "./Component/Projects";
import Quote from "./Component/Quote";
import Line from "./features/Line.js";
import Mission from "./Component/Mission.js";
import Title from "./features/Title";
import './Styles/App.css'
import Testimonal from "./Component/Testimonal";
import Footer from "./Component/Footer";
import './Styles/Animation.css'

function App() {
  return (
    <div className="Container">
      <div id="home">
        <Navbar/>
      </div>
        <Banner/>
        <Contact_Banner/>
        <Quote/>
        <div id='what-we-offer'>
          <Line/>
        </div>
        <Title title="What we Offer"/>
        <Card/>
        <div id="why-us">
          <Line/>
        </div>
        <Title title="Why Us?"/>
        <Info/>
        <div id="our-projects">
          <Line/>
        </div>
        <Title title="Our Projects"/>
        <Projects/>
        <div id="review">
          <Line/>
        </div>
        <Title title="Testimonals"/>
        <Testimonal/>
        <div id="about-us">
          <Line/>
        </div>
        <Title title="About Us"/>
        <AboutUs/>
        <div id="">
          <Line/>
        </div>
        <Title title="Our Mission"/>
        <Mission/>
        <div id="contact-us">
          <Line/>
        </div>
        <Title title="Get a free Quote"/>
        <ContactUs/>
        <Footer/>
    </div>
  );
}

export default App;
