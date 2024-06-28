import React from 'react';
import'./style.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import gsap ,{Bounce} from 'gsap';
import { useEffect } from 'react'; 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { WebPortfolios } from './ProjectsPortfolio';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const WebDesigningPortfolio = () => {

    const handleAction=()=>{

        console.log('Hovering');
        var targetedSlide = document.querySelector('.owl-theme .active');
        var targetedSlideHeight = targetedSlide.clientHeight;
        //Using the Slide Height to set the height of the scroll Div to hide unwanted section

        console.log('targetedSlideHeight:',targetedSlideHeight*0.65);
        
        targetedSlide.style.maxHeight=targetedSlideHeight.toString()+"px";

    }

    const options = {
        nav: true,
        navText : ['<span class="fa-stack"><svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="31.2879" transform="matrix(-1 0 0 1 31.7883 32.5467)" stroke="black"/><path d="M47.9121 33.4678H19.8098M19.8098 33.4678H14.7421C16.7385 32.8535 20.9154 30.98 21.6525 28.4001C21.1918 30.0893 20.1783 33.4678 19.8098 33.4678Z" stroke="black"/></svg></span>','<span class="fa-stack"><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32.2166" cy="32.5467" r="31.2879" stroke="black"/><path d="M16.0928 33.4678H44.1951M44.1951 33.4678H49.2628C47.2664 32.8535 43.0895 30.98 42.3523 28.4001C42.813 30.0893 43.8266 33.4678 44.1951 33.4678Z" stroke="black"/></svg></span>'],
    }

    return (
        <>
        <Navbar/>
            <div className='portfolio-featuring-wrapper pd100'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-1'>
                        </div>

                        <div className='col-11'>
                            
                            <div className='title-text'>
                                <h2>UI/UX Design </h2>
                                <p>Responsive, clean websites to take your business to the next level. </p>
                                <div className='backnav'>
                                    <h6><a href="/portfolio">Portfolio</a>   - <b>Web Designs</b></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className='webdesigns container-fluid website-preview-laptop'>
                <div className='portfolio-preview scroller-container' >
                    <OwlCarousel className='owl-theme' {...options} items={1} loop margin={40} autoplay={false} dots={false} autoplaySpeed={5000} autoplayTimeout={3000}>
                        {
                            WebPortfolios ?
                                WebPortfolios.map((obj)=>{
                                    return(
                                        <div className='row'>
                                            <div className='col-lg-2'></div>
                                            <div className='col-12 col-lg-8' id="desktop-container">
                                                <img src={require('../../../img/portfolio/web-designing/desktop.png')}/>
                                            </div>
                                            <div className='col-lg-2'> </div>
                                            <div className='scroll' onMouseMove={handleAction}>
                                                <img src={obj.img}/>                
                                            </div>
                                        </div>
                                    )
                                })
                            :
                            <>Found Noting</>
                        }
                    </OwlCarousel>
                </div>
            </div>
            
        <Footer/>
        </>
    );
}

export default WebDesigningPortfolio;
