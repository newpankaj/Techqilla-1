import './HeroSection.css';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import { useEffect,useState } from 'react';
import sliderData from'./Home-data.js';
 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
const HeroSection = () => {
   
    const [slideIndex, setSlideIndex] = useState(1);

    const nextslidebtn = () =>{

        //next slide
        if(slideIndex !== sliderData.length){
            setSlideIndex(slideIndex + 1);  
        }
        else if(slideIndex === sliderData.length){
            setSlideIndex(1);
        }
 
    }

    const prevslidebtn = ()=>{

        //prev slide
        if(slideIndex === 1){  
            setSlideIndex(sliderData.length);
        }else{
            setSlideIndex(slideIndex - 1);
        }

    }
    
    return ( 
        <>
        
        <section>
            <div className="Hero-section">
                <div className="container-fluid">
                        <OwlCarousel className='owl-theme hide-on-mobile' items={1} loop margin={40} autoplay={false} dots={true} autoplaySpeed={5000} autoplayTimeout={3000}>
                            {sliderData ? 
                        
                                sliderData.map((speckey)=>{
                                    return(
                                        <div className="row align-items-center" key={speckey.id.toString()} style={{padding:"20px"}}>
                                            <div className="col-lg-6 col-12 pd50">
                                                <div className="bannerText" data-splitting data-aos="fade-up">
                                                    <h1> {speckey.heading}</h1>
                                                </div>
                                                <div className="content align-items-center" data-aos="fade-up" data-aos-delay="500">
                                                    <a href={speckey.link}>  
                                                        <svg width="145" height="89" viewBox="0 0 145 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="44" cy="44.7142" r="43.5" stroke="black"/>
                                                            <path d="M144.354 48.0678C144.549 47.8725 144.549 47.5559 144.354 47.3607L141.172 44.1787C140.976 43.9834 140.66 43.9834 140.464 44.1787C140.269 44.374 140.269 44.6905 140.464 44.8858L143.293 47.7142L140.464 50.5427C140.269 50.7379 140.269 51.0545 140.464 51.2498C140.66 51.445 140.976 51.445 141.172 51.2498L144.354 48.0678ZM44 48.2142H144V47.2142H44V48.2142Z" fill="black"/>
                                                            <rect x="40" y="43.7142" width="8" height="8" fill="#0156FF"/>
                                                        </svg>
                                                    </a>

                                                    <p>{speckey.content}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 "  data-aos="fade-left" data-aos-delay="600">
                                                {speckey.banner}
                                            </div>  
                                        </div>
                                    )
                                })
                                :
                                <>Null</>
                            }

                        </OwlCarousel>  


                        <OwlCarousel className='owl-theme hide-on-desktop' items={1} loop margin={40} autoplay={false} dots={true} autoplaySpeed={5000} autoplayTimeout={3000}>
                            {sliderData ? 
                        
                                sliderData.map((speckey)=>{
                                    return(
                                        <div className="row align-items-center" key={speckey.id.toString()}>
                                            <div className="col-6">
                                                <div className="bannerText" >
                                                    <h1> {speckey.heading}</h1>
                                                </div> 
                                            </div>
                                            <div className="col-6" >
                                                {speckey.banner}
                                            </div>  
                                            <div className="col-12 " ></div>
                                                <div className="content align-items-center">
                                                    <a href={speckey.link}>  
                                                        <svg width="145" height="89" viewBox="0 0 145 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="44" cy="44.7142" r="43.5" stroke="black"/>
                                                            <path d="M144.354 48.0678C144.549 47.8725 144.549 47.5559 144.354 47.3607L141.172 44.1787C140.976 43.9834 140.66 43.9834 140.464 44.1787C140.269 44.374 140.269 44.6905 140.464 44.8858L143.293 47.7142L140.464 50.5427C140.269 50.7379 140.269 51.0545 140.464 51.2498C140.66 51.445 140.976 51.445 141.172 51.2498L144.354 48.0678ZM44 48.2142H144V47.2142H44V48.2142Z" fill="black"/>
                                                            <rect x="40" y="43.7142" width="8" height="8" fill="#0156FF"/>
                                                        </svg>
                                                    </a>

                                                    <p>{speckey.content}</p>
                                                </div>
                                            
                                        </div>
                                    )
                                })
                                :
                                <>Null</>
                            }

                        </OwlCarousel>  
                </div>
            </div>
        </section>

        </>

     );

}
 
export default HeroSection;