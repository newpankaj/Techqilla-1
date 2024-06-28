import React from 'react';
import'./style.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import gsap ,{Bounce} from 'gsap';
import { useEffect } from 'react';
import Projects from './ProjectsPortfolio';

const GraphicDesigning = () => {

    useEffect(() => {
        
        gsap.fromTo('.title-text h2',{y:'-100%'},{y:'0%',duration:0.7,easeOut:Bounce})
        gsap.timeline()
        .fromTo('.title-text svg',{x:'500%',rotate:0},{x:'-89%',rotate:'-360deg',duration:1.7,})
        .fromTo('.title-text svg',{x:'-89%',rotate:'-360deg'},{x:'-10%',rotate:'-300deg',duration:2})
        .fromTo('.title-text svg',{x:'-10%',rotate:'-300deg'},{x:'-40%',rotate:'-320deg',duration:4})

    },[]);

    useEffect(()=>{
        gsap.fromTo('.feature-category ul',{x:'200%',duration:20,ease:'ease'},{x:'-100%',duration:15,repeat:-1,delay:4,stagger:0.1,ease:'ease'})
        
        gsap.fromTo('.business-card-parallex-1 img',{x:'-100%',y:'0%'},{x:0,y:0,duration:2})
        gsap.fromTo('.business-card-parallex-2 img',{x:'-90%',y:'120%'},{x:0,y:0,duration:2})
        gsap.fromTo('.business-card-parallex-3 img',{x:'100%',y:'-100%'},{x:0,y:0,duration:2})
        gsap.fromTo('.business-card-parallex-4 img',{x:'100%',y:'-100%'},{x:0,y:0,duration:2})

        gsap.timeline({repeat:-1})
        .fromTo('.marquee__inner', {x:'150%'},{x:'-120%',duration:30})


    })

    return (
        <>
        <Navbar/>
        <div className='portfolio-featuring-wrapper pdbtm100'>
            <div className='container'>
                <div className='row'>
                        <div className='col-1'>
                        </div>

                        <div className='col-11'>
                            <div className='title-text'>
                                <h2>Graphic Design </h2>
                                <p>Designs that communicate your message clearly and more. </p>
                                
                                <div className='backnav'>
                                    <h6><a href="/portfolio">Portfolio</a>  - <b>Graphic Desiging</b></h6>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>

        <div className='feature-category '>
            
            {/* <div class="marquee">
                <div class="marquee__inner" aria-hidden="true">
                    <span>Logo Design</span>
                    <span>Social Media</span>
                    <span>Brochures</span>
                    <span>Business Card</span>
                </div>
            </div> */}

            <marquee>
                <ul>
                    <li>Logo Design</li>
                    <li>Social Media</li>
                    <li>Brochures</li>
                    <li>Business Card</li>
                </ul>
            </marquee>

        </div>

        <div className='DesktopDisplay'>
        
        {Projects ?

        <>
        {Projects.map((obj,index)=>{
            return(
                <>
                <div className='portfolio-preview pd50' >
                    <div className='row'>
                        <div className='portfolio-element'>
                            <div className='portfolio-emt-intro'>
                                <h1 data-aos="fade-down">{obj.ProjectName}</h1>
                                <div className='title-sub-head' data-aos="fade-up">
                                    <h3>Software</h3>
                                </div>
                                <div className="software-used" >
                                    <img src={require('../../../img/portfolio/photoshop.png')}/>
                                    <img src={require('../../../img/portfolio/illustrator.png')}/>
                                </div>
                                <img id="portfolio-1"src={obj.ProjectLogo} data-aos="slide-right"/>
                            </div>
                        </div>
                        <div className='portfolio-element' >
                            <div className='element'>
                                <img src={obj.bannerRight} />
                            </div>
                        </div>
                        <div className='col-lg-4 padding-0' data-aos="fade-up">
                            <div className='element'>
                                <img src={obj.bannerBottom1}/>
                            </div>
                        </div>
                        <div className='col-lg-4 padding-0' data-aos="fade-up">
                            <div className='element'>
                                <img src={obj.bannerBottom2}/>
                            </div>
                        </div>
                        <div className='col-lg-4 padding-0' data-aos="fade-up">
                            <div className='element'>
                                <img src={obj.bannerBottom3} />
                            </div>
                        </div>
                    </div>
                </div>
                
                </>
            );
        })}
        </>
        :
        <h2>Project not Loading</h2>
        }

        <div className='start-project-btn'>
            <div className='start-project-btn-inner'>
                <a href='/contact'>
                Start Your Project With Us
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="32.1704" cy="32.181" rx="31.8149" ry="31.7879" fill="#FFD600"/>
                    <path d="M16.0332 33.1021H44.1594M44.1594 33.1021H49.2314C47.2333 32.4878 43.0528 30.6143 42.3151 28.0344C42.7762 29.7236 43.7905 33.1021 44.1594 33.1021Z" stroke="black"/>
                </svg>
                </a>
            </div>
        </div>         

        <div className='packaging-portfolio'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title mid-title align-center pd50'>
                            <h2>Packaging & Printing <span>design</span></h2>
                        </div>
                    </div>
                    <div className='row container-packaging-showcase'>
                        <div className='col-lg-6'>
                            <div className='portfolio-image' data-aos="flip-right">
                                <img src={require('../../../img/portfolio/packing-1.png')}/>
                            </div>
                        </div>
                        <div className='col-lg-6 align-self-center'>
                            
                            <div className='portfolio-emt-intro' data-aos="fade-up">
                                <h1>The Bloody Story</h1>
                                <p>Book Cover</p>
                                <div className='title-sub-head'>
                                    <h3>Software</h3>
                                </div>
                                <div className="software-used" >
                                    <img src={require('../../../img/portfolio/photoshop.png')}/>
                                    <img src={require('../../../img/portfolio/illustrator.png')}/>
                                </div>
 
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* Desktop */}
                <div className='row container-packaging-showcase '>
                    <div className='col-lg-6 align-self-center'>
                        
                        <div className='portfolio-emt-intro' data-aos="fade-up">
                            <h1>Box Packaging</h1>
                            <p>Box Design</p>
                            <div className='title-sub-head'>
                                <h3>Software</h3>
                            </div>
                            <div className="software-used" >
                                <img src={require('../../../img/portfolio/photoshop.png')}/>
                                <img src={require('../../../img/portfolio/illustrator.png')}/>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='portfolio-image d-flex justify-content-end' data-aos="flip-left">
                            <img src={require('../../../img/portfolio/packing-2.png')}/>
                        </div>
                    </div>
                </div>


                <div className='row container-packaging-showcase'>
                    <div className='col-lg-6'>
                        <div className='portfolio-image' data-aos="flip-right">
                            <img src={require('../../../img/portfolio/packing-3.png')}/>
                        </div>
                    </div>
                    <div className='col-lg-6 align-self-center'>
                        
                        <div className='portfolio-emt-intro' data-aos="fade-up">
                            <h1>Box Packaging</h1>
                            <p>Box Design</p>
                            <div className='title-sub-head'>
                                <h3>Software</h3>
                            </div>
                                <div className="software-used" >
                                    <img src={require('../../../img/portfolio/photoshop.png')}/>
                                    <img src={require('../../../img/portfolio/illustrator.png')}/>
                                </div>

                        </div>
                    </div>
                    
                </div>
                <div className='row' >
                    <div className='col-lg-6 align-self-center'>
                        
                        <div className='portfolio-emt-intro' data-aos="fade-up" >
                            <h1>Facewash Packaging</h1>
                            <p>Label Design</p>
                            <div className='title-sub-head'>
                                <h3>Software</h3>
                            </div>
                                <div className="software-used" >
                                    <img src={require('../../../img/portfolio/photoshop.png')}/>
                                    <img src={require('../../../img/portfolio/illustrator.png')}/>
                                </div>

                        </div>
                    </div>
                    
                    <div className='col-lg-6'>
                        <div className='portfolio-image' data-aos="flip-right">
                            <img src={require('../../../img/portfolio/packing-4.png')}/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12' style={{padding:'0'}}>
                        <img src={require('../../../img/portfolio/packing-5.png')}/>
                    </div>
                </div>
            </div>
        </div>

        {/* Packaging Portfolio Start */}

        <div className='packaging-portfolio'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title mid-title align-center pd50 '>
                            <h2>Brochures & Flyers <span>design</span></h2>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <div className='portfolio-image' data-aos="slide-right">
                            <img src={require('../../../img/portfolio/brochure-1.jpg')}/>
                        </div>
                    </div>
                    <div className='col-12 col-lg-2'>
                        <div className='brochure-portfolio-image-mid' data-aos="slide-right">
                            <img src={require('../../../img/portfolio/brochure-2.png')}/>
                        </div>
                    </div>
                    <div className='col-lg-4 DesktopDisplay'>
                        <div className='brochure-portfolio-image-right' data-aos="slide-right">  
                            <img id="float-irght" src={require('../../../img/portfolio/brochure-4.png')}/>
                            <img src={require('../../../img/portfolio/brochure-3.png')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='business-card-portfolio' >
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title  pd50'>
                            <h2>Business card <span> design</span></h2>
                        </div>
                    </div>
                    <div className='container-card'>
                        <div className='business-card-parallex-1'>
                            <img src={require('../../../img/portfolio/business-card-1.png')}/>
                        </div> 
                        <div className='business-card-parallex-2'>
                            <img src={require('../../../img/portfolio/business-card-2.png')}/>
                        </div> 
                        <div className='business-card-parallex-3'>
                            <img src={require('../../../img/portfolio/business-card-3.png')}/>
                        </div> 
                        <div className='business-card-parallex-4'>
                            <img src={require('../../../img/portfolio/business-card-4.png')}/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </div> 

        {/* Mobile  */}
        <div className='MobileDisplay'>
             
        {Projects ?

            <>
            {Projects.map((obj,index)=>{
                return(
                    <>
                    <div className='portfolio-preview pd50' >
                        <div className='row'>
                            <div className='portfolio-element'>
                                <div className='portfolio-emt-intro'>
                                    <h1 data-aos="fade-down">{obj.ProjectName}</h1>

                                    <center><img id="portfolio-1"src={obj.ProjectLogo} data-aos="slide-right"/></center>
                                    <div className='title-sub-head' data-aos="fade-up">
                                        <h3>Software</h3>
                                    </div>
                                    <p data-aos="fade-up">
                                        Adobe Illustrator, Photoshop
                                    </p>

                                    
                                </div>
                            </div>
                            <div className='col-6 padding-0' >
                                <div className='element'>
                                    <img src={obj.bannerRight} />
                                </div>
                            </div>
                            <div className='col-6 padding-0'>
                                <div className='element'>
                                    <img src={obj.bannerBottom1}/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    </>
                );
            })}
            </>
            :
            <h2>Project not Loading</h2>
            }

            <div className='start-project-btn'>
                <div className='start-project-btn-inner'>
                    <a href="/contact">Start Your Project With Us
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="32.1704" cy="32.181" rx="31.8149" ry="31.7879" fill="#FFD600"/>
                            <path d="M16.0332 33.1021H44.1594M44.1594 33.1021H49.2314C47.2333 32.4878 43.0528 30.6143 42.3151 28.0344C42.7762 29.7236 43.7905 33.1021 44.1594 33.1021Z" stroke="black"/>
                        </svg>
                    </a>
                </div>
            </div>         

            <div className='packaging-portfolio'>
                <div className='container-fluid'>
                    <div className='row pd50'>
                        <div className='col-12 padding-0'>
                            <div className='title mid-title align-center pd100'>
                                <h2>Packaging & Printing <span>design</span></h2>
                            </div>
                        </div>
                        
                    </div>

                    {/* Desktop */}
                    <div className='row'> 
                        <div className='col-12 padding-0'>
                            <div className='mobile-portfolio' >
                                <img src={require('../../../img/portfolio/packing-2.png')}/>
                            </div>
                        </div>
                        <div className='col-12 align-self-center'>
                            
                            <div className='portfolio-emt-intro'>
                                <h1>Box Packaging</h1>
                                <p>Box Design</p>
                                
                            </div>
                        </div>
                       
                    </div>


                    <div className='row'>
                        <div className='col-12 padding-0'>
                            <div className='mobile-portfolio'>
                                <img src={require('../../../img/portfolio/packing-3.png')}/>
                            </div>
                        </div>
                        <div className='col-12 align-self-center'>
                            
                            <div className='portfolio-emt-intro'>
                                <h1>Box Packaging</h1>
                                <p>Box Design</p>
                               
                            </div>
                        </div>
                        
                    </div>
                    <div className='row' >
                        <div className='col-12 padding-0'>
                            <div className='mobile-portfolio'>
                                <img src={require('../../../img/portfolio/packing-4.png')}/>
                            </div>
                        </div>
                        <div className='col-12 align-self-center'>
                            
                            <div className='portfolio-emt-intro'>
                                <h1>Facewash Packaging</h1>
                                <p>Label Design</p>

                            </div>
                        </div>
                        
                    </div>
                    <div className='row'>
                        <div className='col-12' style={{padding:'0'}}>
                            <img src={require('../../../img/portfolio/packing-5.png')}/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Packaging Portfolio Start */}

            <div className='packaging-portfolio'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 pd50'>
                            <div className='title mid-title align-center pd100 '>
                                <h2>Brochures & Flyers <span>design</span></h2>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 padding-0'>
                            <div className='portfolio-image' data-aos="slide-right">
                                <img src={require('../../../img/portfolio/brochure-1.jpg')}/>
                            </div>
                        </div>
                        <div className='col-6 col-lg-2'>
                            <div className='brochure-portfolio-image-mid' data-aos="slide-right">
                                <img src={require('../../../img/portfolio/brochure-2.png')}/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='portfolio-image' data-aos="slide-right">  
                                <img src={require('../../../img/portfolio/brochure-4.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='business-card-portfolio' style={{display:'none'}}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='title  pd100'>
                                <h2>Business card <span> design</span></h2>
                            </div>
                        </div>
                        <div className='container-card'>
                            <div className='business-card-parallex-1'>
                                <img src={require('../../../img/portfolio/business-card-1.png')}/>
                            </div> 
                            <div className='business-card-parallex-2'>
                                <img src={require('../../../img/portfolio/business-card-2.png')}/>
                            </div> 
                            <div className='business-card-parallex-3'>
                                <img src={require('../../../img/portfolio/business-card-3.png')}/>
                            </div> 
                            <div className='business-card-parallex-4'>
                                <img src={require('../../../img/portfolio/business-card-4.png')}/>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='business-card-portfolio' >
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='title align-center'>
                                <h2>Business card <span> design</span></h2>
                            </div>
                        </div>
                        <div className='col-12' STYLE="PADDING:0;">
                            <img src={require('../../../img/portfolio/business-card.png')}/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
          
        <Footer/>
        </>
    );
}

export default GraphicDesigning;
