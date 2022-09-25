import Banner from "./Component/Banner";
import Card from "./Component/Card";
import Contact_Banner from "./Component/Contact_Banner";
import Info from "./Component/Info";
import Navbar from "./Component/Navbar";
import Quote from "./Component/Quote";
import Line from "./features/Line.js";
import Title from "./features/Title";
import './Styles/App.css'

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
    </div>
  );
}

export default App;
