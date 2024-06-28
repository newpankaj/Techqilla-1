import { useState,useEffect } from 'react';
import Preloader from './Preloader';
import './style.css';
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection';
import Services from './Services/Services';
import AboutOne from './AboutOne/AboutOne';
import AboutTwo from './AboutTwo/AboutTwo';
import OurTeam from './OurTeam/OurTeam';
import Testimonial from './Testimonial/Testimonial';
import Partners from './Partners/Partners';
import Footer from './Footer/Footer';   

const Home = () => {  

    const [completed, setcompleted] = useState(undefined);

    useEffect(()=>{
      const onPageLoad = ()=>{
        setTimeout(() => {
          setcompleted(true);
        },3200);
      }
      if(document.readyState==='complete'){
        onPageLoad();
      }
      else{
        window.addEventListener("load", onPageLoad);
        return () => window.removeEventListener("load", onPageLoad);
      }
    })

    return ( 
        <>
          {/* {!completed ? (
              <>
                <Preloader/>
              </>
              ):(    */}
              <>
                <Navbar/> 
                <HeroSection/>  
                <Services/>
                <AboutOne/>
                <AboutTwo/>
                <OurTeam/>
                <Testimonial/>
                <Partners/>
                <Footer/>
              </>
              {/* )
          } */}
        </> 
    );
}



export default Home;