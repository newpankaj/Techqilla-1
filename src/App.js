import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import OurServices from './Pages/Services/Services';
import Design from './Pages/Services/Designing/Design';
import DigitalMarketing from './Pages/Services/DigitalMarketing/DigitalMarketing';
import WebDevelopment from './Pages/Services/WebDevelopment/WebDevelopment'; 
import SoftwareDevelopment from './Pages/Services/SoftwareDevelopment/SoftwareDevelopment';
import BusinessConsultation from './Pages/Services/BusinessConsultation/BusinessConsultation';
import GraphicDesigning from './Pages/Portfolio/FeaturePortfolios/GraphicDesigning';
import DigitalMarketingPortfolio from './Pages/Portfolio/FeaturePortfolios/DigitalMarketingPortfolio';
import WebDesigningPortfolio from './Pages/Portfolio/FeaturePortfolios/WebDesignPortfolio';
import Recruitment from './Pages/Recruitment/recruitment'; 
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Howl } from 'howler';
import MenuSound from '../src/assets/audio/menubtn.wav';
// ../assets/audio/menubtn.wav';


function App() {
  useEffect(()=>{

      document.querySelector('body').onload=()=>{
        
        const playsound = new Howl ({
          src:MenuSound,
          html5:true,
          volume:0.1
        })
        playsound.play();
        
      }

  });
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/service' element={<OurServices/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/join' element={<Recruitment/>}/>
          <Route path='/service/design' element={<Design/>}/>
          <Route path='/service/digital-marketing' element={<DigitalMarketing/>}/>
          <Route path='/service/web-development' element={<WebDevelopment/>}/>
          <Route path='/service/software-development' element={<SoftwareDevelopment/>}/>
          <Route path='/service/business-consultation' element={<BusinessConsultation/>}/>
          <Route path='/portfolio/graphic-designing' element={<GraphicDesigning/>}/>
          <Route path='/portfolio/web-design' element={<WebDesigningPortfolio/>}/>
          <Route path='/portfolio/digital-marketing' element={<DigitalMarketingPortfolio/>}/> 
        </Routes>
      </Router>
    </>

  );
}

AOS.init({
  duration:1400
});

export default App;
