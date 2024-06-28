import './style.css';
import gsap from 'gsap';
import { useEffect } from 'react';


const Construction = () =>{

    useEffect(()=>{
        gsap.timeline({delay:0.4})
        .fromTo('#tape1',{x:-180,y:-250},{x:0,y:0,duration:0.6})
        .fromTo('#tape2',{x:180,y:-100},{x:0,y:0,duration:0.4})
        .fromTo('#tape3',{x:-200,y:300},{x:0,y:0,duration:0.4})    
        .fromTo('#city-img',{y:300},{y:0,duration:1}) 
    },[])

    const CloseConstructionPopup = ()=>{
        document.querySelector('.construction-bg').style.display="none";
        // window.location.href="/techqilla"
    }


    return(
        <>
        {/* //Under Construction//  */}
        <section className='construction-bg'>

            <img id="tape1" src={require('../../img/tape1.png')} alt=""/>
            <img id="tape2" src={require('../../img/tape2.png')} alt=""/>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='construction-container'>
                            <div className='close-construction'>
                                <button className='btn-style-close' onClick={CloseConstructionPopup}>
                                    X
                                </button>
                            </div>
                            <div className='construction-container-inner'>
                                <div className="heading">
                                    <svg width="37" height="49" viewBox="0 0 37 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 30L36.5 4.5L0 17L8 30Z" fill="#fff"/>
                                        <path d="M18 49L24.5 17.5L13 30L18 49Z" fill="#fff"/>
                                        <path d="M22 44.5L29 13.5L34.5 29.5L22 44.5Z" fill="#fff"/>
                                        <path d="M26 43.5L29 40.5L34.5 48L26 43.5Z" fill="#fff"/>
                                    </svg>
                                    <br/>
                                    <br/>

                                    <h1>Crafting <span>Pillars</span> for <br/>your business  <span>foundation</span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetadipiscing elit. Nisi, ipsum aenean imperdiet euismod. . </p>
                                </div>
                                <button className='btn-style-yellow'>Contact Us</button>
                                <img id="city-img" src={require('../../img/pillars.png')} alt="city"/>
                                <img id="hidden-logo-img" src={require('../../img/hidden-logo.png')} alt="city"/>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <img id="tape3"src={require('../../img/tape3.png')} alt=""/>

        </section>

        </>
    );
}

export default Construction;