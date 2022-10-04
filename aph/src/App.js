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

function App() {
  return (
    <div className="Container">
      <Navbar/>
      <Banner/>
      <Contact_Banner/>
      <Quote/>
      <Line/>
      <Title title="What we Offer"/>
      <Card/>
      <Line/>
      <Title title="Why Us?"/>
      <Info/>
      <Line/>
      <Title title="Our Projects"/>
      <Projects/>
      <Line/>
      <Title title="Testimonals"/>
      <Testimonal/>
      <Line/>
      <Title title="About Us"/>
      <AboutUs/>
      <Line/>
      <Title title="Our Mission"/>
      <Mission/>
      <Line/>
      <Title title="Get a free Quote"/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
