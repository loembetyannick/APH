import Banner from "./Component/Banner";
import Contact_Banner from "./Component/Contact_Banner";
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
    </div>
  );
}

export default App;
