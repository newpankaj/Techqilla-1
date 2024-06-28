import './Testimonial.css';
import TesimonialData from './Testimonial-Data.js'; 
import { useState,useEffect } from 'react';    
import {gsap,Power3} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
gsap.registerPlugin(ScrollTrigger);

const Testimonial =()=>{ 
    
    useEffect(() => {

        gsap.from('.parlleximg',{rotation:15}) 
        gsap.to('.parlleximg',{scrollTrigger:{
            trigger:".Testimonial",
            start:"top center",
            end:"bottom center",
        },rotation:0,duration:1})

        // gsap.fromTo('.Review li',{y:300,opacity:0,duration:1},{scrollTrigger:{
        //     trigger:".Testimonial",
        //     start:"top center",
        //     end:"bottom center",},y:0,opacity:1,duration:1,stagger:0.5})

    },[]);

    const [slideIndex, setSlideIndex] = useState(1);

    const [slideN1,setSlideN1]= useState(2);
    const [slideN2,setSlideN2]= useState(3);
    const [slideN3,setSlideN3]= useState(4);


    const nextslidebtn = (src) =>{

        //next slide
        if(slideIndex !== TesimonialData.length){
            setSlideIndex(slideIndex + 1);  
        }
        else if(slideIndex === TesimonialData.length){
            setSlideIndex(1);
        }

        //upcoming profile  
        if(slideN1 >= TesimonialData.length){
            setSlideN1(1);
        }else{
            setSlideN1(slideN1+1);
        }

        if(slideN2 >= TesimonialData.length){
            setSlideN2(1);
        }else{
            setSlideN2(slideN2+1);
        }

        if(slideN3 >= TesimonialData.length){
            setSlideN3(1);
        }else{
            setSlideN3(slideN3+1);
        }
    
    }

    const prevslidebtn = ()=>{

        //prev slide
        if(slideIndex === 1){  
            setSlideIndex(TesimonialData.length);
        }else{
            setSlideIndex(slideIndex - 1);
        }
        
        //upcoming profile  
        if(slideN1 <= 1){
            setSlideN1(TesimonialData.length);
        }else{
            setSlideN1(slideN1-1);
        }

        if(slideN2 <= 1){
            setSlideN2(TesimonialData.length);
        }else{
            setSlideN2(slideN2-1);
        }

        if(slideN3 <= 1){
            setSlideN3(TesimonialData.length);
        }else{
            setSlideN3(slideN3-1);
        }
    }

       
    
    const option={ 
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:3
            }
        }
    }

    return(
        <>
            <div className="Testimonial pd100 bgblue">
                <div className="container">
                    
                    <img src={require('../../img/techop.png')} className="parlleximg"/>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="title">
                                <h2 data-aos="slide-right" data-aos-delay="100">Let’s skip to the<br/> good part. </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="navigation">
                                {/* <ul className='arrows'>
                                    
                                    <li className='arrow-left'>
                                        <img src={arrowLeft} alt="Left-arrow"  onClick={()=>prevslidebtn()} />
                                    </li>
                                    <li className='arrow-right'>
                                        <img src={arrowRight} alt="Right-arrow"  onClick={()=>nextslidebtn()} />
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <ul className='Review'>

                                {/* <li className='opaquetext'>
                                    <h1>What People Says</h1>
                                </li> */}
                                <OwlCarousel className='owl-theme '  {...option} items={3} loop margin={40} autoplay={true} dots={false} autoplaySpeed={1000} >
    
                                    {TesimonialData.map((obj, index)=>{
                                        
                                        return(
                                            <>
                                                <li key={obj.id} >
                                                    <img src={obj.img}/>
                                                    <h3 className='ClientName'>{obj.name}</h3>
                                                    <div className="ClientTitle">{obj.title}</div>
                                                    <p className='ClientReview'>
                                                        {obj.tesimony}
                                                    </p>
                                                </li>
                                            </>
                                        )
                                        
                                    })}

                                </OwlCarousel>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial;

