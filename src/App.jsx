import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Service from './components/Service'
import Join from './components/Join'
import Gallery from './components/Gallery'
import Aws from './components/Aws';
import Team from './components/Team'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial';
import Blog from './components/Blog'
import GetInt from './components/GetInt'
import Bottom from './components/Bottom'

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Service/>
      <Join/>
      <Gallery/>
      <Aws/>
      <Team/>
      <Pricing/>
      <Testimonial/>
      <Blog/>
      <GetInt/>
      <Bottom/>

    </> 
  );
}

export default App;
