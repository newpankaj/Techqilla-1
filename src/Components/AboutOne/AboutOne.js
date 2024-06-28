import './AboutOne.css'; 
import gsap from 'gsap';
import { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';
gsap.registerPlugin(ScrollTrigger);


const AboutOne = () => {

    useEffect(()=>{

        VanillaTilt.init(document.querySelectorAll(".element"), {
            max:1,
            speed: 500
        });
        
    },[])

    return ( 
        <>
            <div className="about-section">
                <div className="container-fluid">
            
                    <div className="row">
                        <div className="col-lg-7 col-sm-6">
                            <div className="about-wrapper" data-aos="slide-up" data-aos-delay="100">   
                                <img src={require('../../img/about-1.png')} className="element " data-tilt alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <span className='opaque-text object' data-value="3" >
                                About us
                            </span>
                            <h2 data-aos="fade-up" data-aos-delay="100">Who <span>we are</span></h2>
                            <p data-aos="slide-left" data-aos-delay="100">
                                We’re just like you. We know what it’s like to build a product, and dream of taking it to the next stage. We know what it’s like to take a huge leap of faith. 

                                Most of all, we know business isn’t something that you should have to figure out on your own. So, we’re here to help you.
                                We’ll help you thrive in an increasingly complex landscape.

                            </p>
                            <button className='hovereff'>
                                <a href="/about">View more</a>
                            </button>
                            <div className="content-img-wrapper" data-aos="fade-up" data-aos-delay="600">
                                <img src={require('../../img/about-2.jpg')} />      
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </> 
    );
}
 
export default AboutOne;