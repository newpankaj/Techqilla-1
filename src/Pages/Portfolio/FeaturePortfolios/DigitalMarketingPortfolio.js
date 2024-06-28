import React from 'react';
import'./style.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import gsap ,{Bounce} from 'gsap';
import { useEffect } from 'react';

const DigitalMarketingPortfolio = () => {
    useEffect(() => {
        
        gsap.fromTo('.title-text h2',{y:'-100%'},{y:'0%',duration:0.7,easeOut:Bounce})
        gsap.timeline()
        .fromTo('.title-text svg',{x:'500%',rotate:0},{x:'350%',rotate:'-360deg',duration:1.7,})
        .fromTo('.title-text svg',{x:'350%',rotate:'-360deg'},{x:'380%',rotate:'-300deg',duration:2})
        .fromTo('.title-text svg',{x:'380%',rotate:'-300deg'},{x:'370%',rotate:'-320deg',duration:4})

    },[]);

    useEffect(()=>{
        gsap.fromTo('.feature-category ul',{x:'200%',duration:20,ease:'ease'},{x:'-100%',duration:15,repeat:-1,delay:4,stagger:0.1,ease:'ease'})
        
        gsap.fromTo('.business-card-parallex-1 img',{x:'-100%',y:'0%'},{x:0,y:0,duration:2})
        gsap.fromTo('.business-card-parallex-2 img',{x:'-90%',y:'120%'},{x:0,y:0,duration:2})
        gsap.fromTo('.business-card-parallex-3 img',{x:'100%',y:'-100%'},{x:0,y:0,duration:2})
        gsap.fromTo('.business-card-parallex-4 img',{x:'100%',y:'-100%'},{x:0,y:0,duration:2})

        gsap.timeline({repeat:-1})
        .fromTo('.insta-post-inner .col-3:nth-child(odd)',{y:0},{y:'5%',duration:2})
        .fromTo('.insta-post-inner .col-3:nth-child(odd)',{y:'5%'},{y:'0%',duration:2})

        gsap.timeline({repeat:-1})
        .fromTo('.insta-post-inner .col-3:nth-child(even)',{y:'0'},{y:'-5%',duration:2})
        .fromTo('.insta-post-inner .col-3:nth-child(even)',{y:'-5%'},{y:'0%',duration:2})

        gsap.timeline({repeat:-1})
        .fromTo('#ellipse',{y:'0'},{y:'10%',duration:2})
        .fromTo('#ellipse',{y:'10%'},{y:'0%',duration:2})

        gsap
        .fromTo('.insta-post-mid .col-5',{rotate:'15%'},{rotate:'0',duration:2,stagger:0.2})
        // .fromTo('.insta-post-mid .col-5:nth-child(odd)',{y:'10%'},{y:'0%',duration:8})

    })
    return (
        <>
        <Navbar/>
            <div className='portfolio-featuring-wrapper pd100 '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-1'>
                        </div>

                        <div className='col-11'>
                            <div className='title-text'>
                                <h2>Digital Marketing </h2>
                                <p>Helping businesses attract brand awareness and leads to grow interest and revenue. </p>
                            
                                <div className='backnav'>
                                    <h6><a href="/portfolio">Portfolio</a> - <b>Digital Marketing</b></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bglightblue pd50'>
                <div className='row justify-content-md-center'>
                    <div className='col-12 col-lg-8 align-items-center'>
                        <div className='title align-center'>
                            <h3>Ore-System</h3>
                            <br/>
                        </div>
                        <img src={require('../../../img/portfolio/digital-marketing/ore-system.png')} data-aos="fade-up"/>
                    </div>
                </div>
            </div>
            <div className='container-fluid pd100'>
                <div className='row justify-content-md-center'>
                    <div className='col-12 col-lg-8 align-items-center'>
                        <div className='title align-center'>
                            <h3>TOE Overflow</h3>
                            <br/>
                        </div>
                        
                        <img src={require('../../../img/portfolio/digital-marketing/laptop-data.png')} data-aos="fade-up"/>
                    </div>
                </div>
            </div>
            <div className='insta-posts-section container'>

                <div className='insta-post-inner'>
                    <div className='row'>
                        <div className='col-12'>
                        <div className='title align-center'>
                            <h3>Social Media Marketing</h3>
                            <br/>
                            <br/>
                        </div>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <img src={require('../../../img/portfolio/Group 76.png')}/>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <img src={require('../../../img/portfolio/Group 87.png')}/>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <img src={require('../../../img/portfolio/Group 78.png')}/>
                        </div>
                        <div className='col-6   col-lg-3'>
                            <img src={require('../../../img/portfolio/Group 88.png')}/>
                            <img id="ellipse" src={require('../../../img/portfolio/ellipse.png')}/>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center insta-post-mid'>
                    <div className='col-12 col-lg-4'>
                        <img src={require('../../../img/portfolio/Group 80.png')}/>
                        <img id="ellipse-2" src={require('../../../img/portfolio/ellipse-2.png')}/>
                    </div>
                    <div className='col-12 col-lg-4 '>
                        <img src={require('../../../img/portfolio/Group 81.png')}/>
                    </div>
                    <div className='col-12 col-lg-4 '>
                        <img src={require('../../../img/portfolio/Group 83.png')}/>
                    </div>
                </div>
                <div className='insta-post-inner'>
                    <div className='row'>
                        <div className='col-6 col-lg-3'>
                            <img src={require('../../../img/portfolio/Group 82.png')}/>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <img src={require('../../../img/portfolio/Group 66.png')}/>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <img src={require('../../../img/portfolio/Group 95.png')}/>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <img src={require('../../../img/portfolio/Group 79.png')}/>
                        </div>
                    </div>
                </div>
                    
            </div>
        <Footer/>
        </>
    );
}

export default DigitalMarketingPortfolio;
