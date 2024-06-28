import { useRef,useEffect,useState } from 'react';
import gsap from 'gsap';
import partnerData from './partners-data';
import './Partners.css'; 
import arrowLeft from '../../img/arrow-left.svg';
import arrowRight from '../../img/arrow-right.svg';

const Partners = () => {  

    // document.querySelector('horizontal-scroll-container').mousewheel=(event, delta) =>{
    //     this.scrollLeft -= (delta * 30);
    //     event.preventDefault();
    //  };

    // const scrollwheel = (e) =>{
    //     const elem = document.querySelector('.horizontal-scroll-container');
    //     console.log(elem.classList);
    //     elem.scrollLeft += 50;
    // }
    
    const [slideIndex, setSlideIndex] = useState(1);

    const [slideN1,setSlideN1]= useState(2);
    const [slideN2,setSlideN2]= useState(3);
    const [slideN3,setSlideN3]= useState(4);
    const [slideN4,setSlideN4]= useState(partnerData.length);

    const [IsNext,SetIsNext]= useState(1);

    useEffect(()=>{
        if(IsNext===1){

            //center main slide
            gsap.timeline()
            .fromTo('.sld-1',{rotate:'-5deg'},{rotate:'0deg'})
            .fromTo('.sld-1',{scale:1.1},{scale:1.2,delay:0.3})
            .fromTo('.sld-1',{rotate:'0deg'},{rotate:'-5deg',delay:0.6})
            .fromTo('.sld-1',{y:0,x:-250,background:'#0033B4'},{y:0,x:-250,background:'#002687'})
            
            //right slide 
            gsap.timeline()
            .fromTo('.sld-2',{scale:1.1,rotate:'5deg',x:-150},{scale:1.1,rotate:'0deg',x:-250})
            .fromTo('.sld-2',{rotate:'0deg',x:-250},{rotate:'5deg',x:-150,delay:1.5})

            //last list
            gsap.timeline()
            .fromTo('.sld-3',{scale:1,rotate:'10deg',x:-50},{scale:1,rotate:'0deg',x:-250})
            .fromTo('.sld-3',{rotate:'0deg',x:-250},{rotate:'10deg',x:-50,delay:1.5})

            gsap.timeline()
            .fromTo('.sld-prev',{rotate:'15deg',scale:0.9,x:0},{rotate:'0deg',scale:0.9,x:-250})
            .fromTo('.sld-prev',{x:-250,rotate:'0deg'},{x:0,rotate:'15deg',delay:1.5})

            gsap.timeline()
            .fromTo('.sld-fade',{scale:1.2,x:-250,rotate:'-5deg'},{scale:1.2,x:-250,rotate:'0deg'})
            .fromTo('.sld-fade',{x:-250,scale:1.2},{x:-480,scale:0.8})
            .fromTo('.sld-fade',{x:-480,zIndex:9},{x:-250,zIndex:1,duartion:0.8})
            .fromTo('.sld-fade',{opacity:1},{opacity:0})
        }
        else{
            
            gsap.timeline()
            .fromTo('.sld-fade',{rotate:'5deg',zIndex:1,x:-200},{rotate:'0deg',x:-250})
            .fromTo('.sld-fade',{opacity:1},{opacity:0,duration:0.1})

            gsap.timeline()
            .fromTo('.sld-2',{scale:1.2,rotate:'5deg',x:-150},{scale:1.1,rotate:'0deg',x:-250})
            .fromTo('.sld-2',{rotate:'0deg',x:-250},{rotate:'5deg',x:-150,delay:1.3})

            gsap.timeline()
            .fromTo('.sld-1',{opacity:0},{opacity:1,scale:0.8,delay:0.5})
            .fromTo('.sld-1',{x:-250,zIndex:1},{x:-480,zIndex:9,duartion:1})
            .fromTo('.sld-1',{x:-480,scale:0.8},{x:-250,scale:1.2})
            .fromTo('.sld-1',{scale:1.2,x:-250,rotate:'0deg'},{scale:1.2,x:-250,rotate:'-5deg'})

            gsap.timeline()
            .fromTo('.sld-3',{scale:1,rotate:'10deg',x:-50},{scale:1,rotate:'0deg',x:-250})
            .fromTo('.sld-3',{rotate:'0deg',x:-250},{rotate:'10deg',x:-50,delay:1.5})

            
            gsap.timeline()
            .fromTo('.sld-prev',{rotate:'20deg',scale:0.9,x:0},{rotate:'0deg',scale:0.9,x:-250})
            .fromTo('.sld-prev',{rotate:'0deg',scale:0.9,x:-250},{rotate:'20deg',scale:0.9,x:0,delay:1.6})
            

        }
    })
 

    return ( 
        <>
            <div className="partners" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 " style={{position:'relative'}}>
                            <div>
                                <div className="partner-content-wrapper">
                                    <h1 data-aos="fade-up">The<span> Disruptors</span></h1>
                                    <p data-aos="fade-up">Our clients come from various industries, and we help them to create a noise in their market. We help them get heard. </p>
                                    <h1 className="opaque-text">Clients</h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7' data-aos="slide-left">
                            <div className='partner-images'>
                                <div className='row '>
                                    {partnerData ? 
                                        partnerData.map((obj)=>{
                                            return(
                                                <>
                                                <div className='col-sm-4  col-6'>
                                                    <div className='partner-logos' key={obj.id}>
                                                        <img src={obj.img}/>
                                                    </div>
                                                </div>
                                                </>
                                            );
                                        })
                                    :
                                    <>No Data</>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Partners;

