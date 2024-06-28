import './services.css';
import gsap from 'gsap';
import { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ServicesList from "./ServicesList";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

    useEffect(() => {
    
        //svg arrow animation 
        let svgIndex = document.querySelectorAll('.services path');

        for(let x=0; x<svgIndex.length; x++ ){
            let path= svgIndex[x];
            let pathLength=svgIndex[x].getTotalLength();
            
            path.style.strokeDasharray = pathLength + ' ' + pathLength;
            path.style.strokeDashoffset = pathLength;

            gsap.to('.parallax-img path',{
                scrollTrigger:{
                    trigger:".services",
                    start:"top center",
                    end:"bottom center"
                },stroke:'#fff',strokeDashoffset:0,duration:2
            })
        } 

        VanillaTilt.init(document.querySelectorAll(".element"), {
            max:1,
            speed: 500
        });

    }, []);

    const option={
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:4
            }
        }
    }

    return ( 
        <>
        <div className="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="service-title ">
                            <h1 data-aos="slide-up" data-aos-delay="50">Your vision,<br/> our services. </h1>
                            <span data-aos="slide-up">Services</span>
                        </div>
                        <div className="service-content" data-aos="slide-up">
                            <svg width="220" height="2" viewBox="0 0 220 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.665649" width="220" height="1" fill="white"/>
                            </svg>
                            <p >Let’s perfect your elevator pitch to the top. We’ll decode what your company needs, and cater to what needs to be done.  </p>
                        </div>
                        <div className="parallax-img">
                            <svg width="151" height="120" viewBox="0 0 151 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M150 2.16928C124.804 -3.64252 68.2565 11.9956 83.0416 53.912C90.4814 75.0043 114.586 67.1303 108.932 53.912C105.475 45.8304 80.6757 38.7306 60.7221 46.882C30.9628 59.0391 14 80.3481 14 111" stroke="white" strokeWidth="2"/>
                                <path d="M1 108.5L12.5 118.5L26 108.5" stroke="white" strokeWidth="2"/>
                            </svg>

                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className='img-container'data-aos="slide-left" data-aos-delay="50" >
                            <img src={require('../../img/services.png')} className="imgside" alt="Service Image"/>
                        </div>
                     </div>
                </div>
                <div className="row ">
                    <OwlCarousel className='owl-theme' {...option} items={4} loop margin={15} autoplay={false} dots={false} autoplaySpeed={1000} autoplayTimeout={3000}>
                        {ServicesList ? 
                            <>
                            {ServicesList.map((obj,index)=>{
                                    return(
                                        <>
                                     <div key={index}>
                                        <div className="item">
                                            <div className="services-list" data-aos="fade-up">
                                               <h3>0{obj.id}.</h3>
                                             <h2>{obj.Service}</h2>
                                             <button>
                                                 <a href={obj.path}>Explore 
                                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.7783 1.8875C17.7783 1.33521 17.3306 0.887499 16.7783 0.887499L7.77827 0.887499C7.22599 0.887499 6.77827 1.33521 6.77827 1.8875C6.77827 2.43978 7.22599 2.8875 7.77827 2.8875H15.7783V10.8875C15.7783 11.4398 16.226 11.8875 16.7783 11.8875C17.3306 11.8875 17.7783 11.4398 17.7783 10.8875L17.7783 1.8875ZM1.92903 18.151L17.4854 2.59461L16.0712 1.18039L0.514817 16.7367L1.92903 18.151Z" fill="white"/>
                                                    </svg>
                                                 </a> 
                                             </button>
                                         </div>
                                     </div>
                                 </div>
                                    </>
                                    )
                                    
                                })
                            }
                            
                            </>
                            :
                            <>No Service Found</>}                   
                        
                    </OwlCarousel>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Services;