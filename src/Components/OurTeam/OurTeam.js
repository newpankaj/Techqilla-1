
import './OurTeam.css';
import TeamData from './TeamData.js';
// import gsap,{Power3,Bounce} from 'gsap';
import { useEffect, useState} from 'react'; 
import { useInView  } from 'react-intersection-observer'; 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import gsap from 'gsap';

const OurTeam = () =>{
 
    const { ref: teamSection, inView: teamSectionVisible } = useInView();

    useEffect(()=>{
        if(teamSectionVisible === true){
            gsap.fromTo('.slide-inner',{x:-100},{x:0,duration:0.7});
            gsap.fromTo('.sub-slide',{x:200},{x:0,stagger:0.2,duration:0.7})
        }
    })


    const [slideIndex,setSlideIndex] = useState(1);
    const [PreviewSlide1,setPreviewSlide1] = useState(2);
    const [PreviewSlide2,setPreviewSlide2] = useState(3);
    const [PreviewSlide3,setPreviewSlide3] = useState(4);


    const NextBtn = () =>{
        
        
        if(slideIndex === TeamData.length){
            setSlideIndex(1);            
        }
        else{
            setSlideIndex(slideIndex+1);
            setPreviewSlide1(slideIndex+2);
            setPreviewSlide2(PreviewSlide1+2);
            setPreviewSlide3(PreviewSlide1+3);
        }


        //Setting the Preview slide1
        if(PreviewSlide1 >= TeamData.length){
            setPreviewSlide1(1);
        }
        else if(PreviewSlide1 === 1){
            setPreviewSlide1(2);
            setPreviewSlide2(3);
            setPreviewSlide3(4);
        }

        //Setting the Preview slide2
        if(PreviewSlide2 >= TeamData.length){
            setPreviewSlide2(1); 
            setPreviewSlide1(TeamData.length);
        } else if(PreviewSlide2===1){
            
            setPreviewSlide1(1);
            setPreviewSlide2(2);
            setPreviewSlide3(3);
        }
        
        // //Setting the Preview slide3
        if(PreviewSlide3 >= TeamData.length){
            setPreviewSlide3(1);  
            setPreviewSlide2(TeamData.length);
        } 
        else if(PreviewSlide3===1){
          
            setPreviewSlide3(2);
        }
    }

    const PrevBtn = () => { 

        if(slideIndex === 1){
            setSlideIndex(TeamData.length);
            setPreviewSlide1(1);
            setPreviewSlide2(2);
            setPreviewSlide3(3);
        } 
        else{
            setSlideIndex(slideIndex-1);
        }

        if(PreviewSlide1===1){
            setPreviewSlide1(TeamData.length);
            setPreviewSlide2(1);
            setPreviewSlide3(2);
        }
        else{
            setPreviewSlide1(PreviewSlide1-1);
        }

        if(PreviewSlide2===1){
            setPreviewSlide2(TeamData.length);
            setPreviewSlide3(1)
        }
        else{
            setPreviewSlide2(PreviewSlide2-1);
        }

        if(PreviewSlide3===1){
            setPreviewSlide3(TeamData.length);
        }
        else{
            setPreviewSlide3(PreviewSlide3-1);
        }

    }
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

    return(
        <>
            <div className="team-section pd100" ref={teamSection}>
                
                <div className="container">
                   <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-12">
                            
                            <div className='title'>
                                <h2 data-aos="slide-right">Working solo sucks. <br/> Here’s how we <span>change</span> that.   </h2>
                                 
                                <span className='opaque-text'>
                                    <marquee>Creatively creative </marquee>
                                </span>
                            </div>

                            <img src={require('../../img/team-bg.png')} id="teamBg" />
                            
                        </div>
                        <div className='col-lg-12 slider hide-on-mobile'>

                            <div className='main-slider'>
                                {TeamData ? 
                                    <>
                                        {TeamData.map((obj,index)=>{
                                            if(obj.id==slideIndex){
                                                return(
                                                    <>
                                                        <div className='teamslider' key={obj.id}>
                                                            <div className='slide-inner'>
                                                                <img src={obj.img}/>
                                                                <div className='info'>
                                                                    <h3>{obj.name}</h3>
                                                                    <h4>{obj.title}</h4>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className='about-team'>
                                                                <p>{obj.about}</p>
                                                                
                                                            </div>
                                                        </div>
                                                    </>
                                                ) 

                                            }
                                        })}                                    
                                    </>
                                    :
                                    <>Nothing Found</>
                                }
                            </div>
                            <div className='slider-list'>
                                <div className='navigation-team'>
                                    <div onClick={PrevBtn}>
                                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle r="31.2879" transform="matrix(-1 0 0 1 32.4367 32.0001)" stroke="black"/>
                                            <path d="M48.5605 32.9211H20.4582M20.4582 32.9211H15.3906C17.3869 32.3069 21.5639 30.4334 22.301 27.8535C21.8403 29.5427 20.8268 32.9211 20.4582 32.9211Z" stroke="black"/>
                                        </svg>
                                    </div>
                                    <div onClick={NextBtn}>
                                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="31.9949" cy="32.0001" r="31.2879" stroke="black"/>
                                            <path d="M15.8711 32.9211H43.9734M43.9734 32.9211H49.0411C47.0447 32.3069 42.8678 30.4334 42.1307 27.8535C42.5914 29.5427 43.6049 32.9211 43.9734 32.9211Z" stroke="black"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className='slider-list-slide'>
                                    {TeamData ? 
                                        <>
                                            {TeamData.map((obj,index)=>{
                                                if(obj.id===PreviewSlide1){
                                                    return(
                                                        <>
                                                            <div className='sub-slide' key={index}>
                                                                <img src={obj.img}/>
                                                            </div>
                                                    </>
                                                    ) 
                                                }
                                            })}
                                            
                                        </>
                                        :
                                        <>Nothing Found</>
                                    }  
                                </div>
                                <div className='slider-list-slide'>
                                    {TeamData ? 
                                        <>
                                            {TeamData.map((obj,index)=>{
                                                if(obj.id===PreviewSlide2){
                                                    return(
                                                        <>
                                                            <div className='sub-slide' key={index}>
                                                                <img src={obj.img}/>
                                                            </div>
                                                    </>
                                                    ) 
                                                }
                                            })}
                                            
                                        </>
                                        :
                                        <>Nothing Found</>
                                    }  
                                </div>
                                <div className='slider-list-slide'>
                                    {TeamData ? 
                                        <>
                                            {TeamData.map((obj,index)=>{
                                                if(obj.id===PreviewSlide3){
                                                    return(
                                                        <>
                                                            <div className='sub-slide' key={index}>
                                                                <img src={obj.img}/>
                                                                
                                                            </div>
                                                    </>
                                                    ) 
                                                }
                                            })}
                                            
                                        </>
                                        :
                                        <>Nothing Found</>
                                    }  
                                </div>
                                
                            </div>
                            
                                         
                              
                        </div>


                        <div className='col-lg-12 slider hide-on-desktop'>
                            <div className='main-slider'>
                            <OwlCarousel className='owl-theme' {...option} items={4} loop margin={15} autoplay={true} dots={false} autoplaySpeed={1000} autoplayTimeout={3000}>
                                {TeamData ? 
                                    <>
                                        {TeamData.map((obj,index)=>{
                                            return(
                                                <>
                                                    <div className='teamslider' key={obj.id}>
                                                        <div className='slide-inner'>
                                                            <img src={obj.img}/>
                                                            <div className='info'>
                                                                <h3>{obj.name}</h3>
                                                                <h4>{obj.title}</h4>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className='about-team'>
                                                            <p>{obj.about}</p>
                                                            
                                                        </div>
                                                    </div>
                                                </>
                                            )                                             
                                        })}                                    
                                    </>
                                    :
                                    <>Nothing Found</>
                                }
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OurTeam;