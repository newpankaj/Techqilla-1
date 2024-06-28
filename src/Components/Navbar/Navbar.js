
import { useState } from 'react';
import Calendar from 'react-calendar'; 
import './Navbar.css';
import gsap from 'gsap';
import {Link} from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import sound from '../../assets/audio/slider.wav'; 
import { Howl } from 'howler'; 
import { useEffect } from 'react'; 
import Popup from '../../Components/ThankYouPopup.js';
import emailjs from 'emailjs-com';
import Timezones from './TimeZones';

const Navbar = () => {


    const [date, setDate] = useState(new Date())
    useEffect(()=>{
        if(date===Date()){
            //Do Nothing 
        }
        else{
            var time = document.querySelectorAll('.time input')
            // console.log(time)
            for(var x=0; x<=time; x++){
                // console.log(time[x])
                time[x].enable=true;
            }
        }
    })

    const openmenu = () =>{        
        const playsound = new Howl ({
            src:sound,
            html5:true,
            volume:0.06
        })
        playsound.play();
        gsap.fromTo('.menusection .menubgimg',{x:'100%',y:'0%'},{x:'0%',y:'0%',opacity:1,duration:0.7,delay:0.5})
        gsap.fromTo('.menusection',{x:'0%',y:'-100%'},{x:'-100%',y:'-100%',opacity:1,duration:0.8});
        document.querySelector('.closebtn ').style.display='block'; 
        document.querySelector('.menusection ').classList.remove('close');
    }

     const closemenu= ()=>{
        const playsound = new Howl ({
            src:sound,
            html5:true,
            volume:0.06
        })
        playsound.play();
        document.querySelector('.menusection ').classList.add('close');
     }
     
    const openSchedular = () =>{
        
        if(document.querySelector('.schedular').style.display==="block"){   
            document.querySelector('.schedular').style.display="none";
            document.querySelector('.menubtn').style.background="transparent";
            document.querySelector('.menubtn').style.color="#0049DC";
            document.querySelector('.menubtn').style.scale="1";
            document.querySelector('html').style.overflowY="auto";
        }
        else{
            document.querySelector('.schedular').style.display="block";
            document.querySelector('.menubtn').style.background="#0049DC";
            document.querySelector('.menubtn').style.color="#fff";
            document.querySelector('.menubtn').style.scale="1.1";
            document.querySelector('html').style.overflowY="hidden";
        }  
    }
    
    const tileDisabled = ({ activeStartDate, date, view }) => {
        return date < new Date()
    }

    const timing = ["10:00 Am","11:00 Am","12:00 Am","01:00 Pm","03:00 Am","04:00 Pm","05:00 Pm","06:00 Pm"]


    const nextTab=()=>{
        document.querySelector('.tab1').style.display="none";
        document.querySelector('.tab2').style.display="block";
    }

    const backTab =()=>{
        
        document.querySelector('.tab2').style.display="none";
        document.querySelector('.tab1').style.display="block";
    }

    const submit=()=>{
        console.log('submited');
    }
 

    // const config = {
    //     "clientId": "<CLIENT_ID>",
    //     "apiKey": "AIzaSyCdKmOdjh_EVTDtxbYDDudm2WAU1mhpxM4",
    //     "scope": "https://www.googleapis.com/auth/calendar",
    //     "discoveryDocs": [
    //       "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    //     ]
    //   }

    // const apiCalendar = new ApiCalendar(config)

    // const eventFromNow: object = {
    //     summary: 'Poc Dev From Now',
    //     time: 480,
    //   };
      
    //   apiCalendar.createEventFromNow(eventFromNow)
    //     .then((result: object) => {
    //       console.log(result);
    //     })
    //     .catch((error: any) => {
    //       console.log(error);
    //     });

    const submitSchedule= (event)=>{
        console.log('enter')
        event.preventDefault();
        emailjs.sendForm('service_egqflki', 'template_v9k1trj', event.target, 'W9aOB0FzZg9rlBes-')
        .then((result) => {
            document.querySelector('.schedular').style.display='none';
            document.querySelector('#thanks-popup').style.display='block';
            //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    }


    
    useEffect(() => {
        
        document.addEventListener('click',()=>{
            if(document.querySelector('#thanks-popup').style.display==='block'){
                document.querySelector('#thanks-popup').style.display='none';
            }
        })
   
    });

    
    return ( 
        <>
            {/* Header Starts */}
            <header> 
                <div className="Navbar" data-aos="fade-down">
                    <div className="container-fluid">
                        <div className="row justify-content-between align-self-center">
                            <div className="col-lg-2 col-6">
                                <div className="logo">
                                    <Link to="/"><img src={require('../../img/logo.png')} alt="" /></Link>
                                </div>
                            </div>
                            <div className='col-lg-3 col-6'>
                                <div className='menu-container align-middle'>
                                    <button className="menubtn"  onClick={openSchedular}>Schedule a Call</button>
                                    <div className="quickLink" onClick={openmenu}>
                                        <svg width="34" height="6" viewBox="0 0 34 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.0877686 5.42139H28.1901M28.1901 5.42139H33.2578C31.2614 4.80713 27.0845 2.93364 26.3473 0.35375C26.808 2.04296 27.8216 5.42139 28.1901 5.42139Z" stroke="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Header Ends */}

            {/* Schedule Calendar Starts*/}

            <div className="schedular" >
                <div className="schedule-inner">

                    <div className='s-head'>
                        <svg width="51" height="62" viewBox="0 0 51 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.800781 18.1809L50.8007 0.938354L11.4448 36.0694L0.800781 18.1809Z" fill="#0055FF"/>
                            <path d="M18.8635 36.0693L34.6691 18.5038L25.8008 61.9384L18.8635 36.0693Z" fill="#0055FF"/>
                            <path d="M25.8009 61.9384L24.8069 38.3041L34.6692 18.5038L25.8009 61.9384Z" fill="#024266"/>
                            <path d="M48.3263 35.0955L41.0732 12.6914L31.387 55.9567L48.3263 35.0955Z" fill="#024266"/>
                            <path d="M31.387 55.9567L41.9792 34.752L41.0732 12.6914L31.387 55.9567Z" fill="#0055FF"/>
                            <path d="M11.4448 36.0694L12.6563 23.8499L50.8008 0.938354L11.4448 36.0694Z" fill="#024266"/>
                            <path d="M40.1929 49.9803L48.5797 60.5852L36.6829 54.0295L40.1929 49.9803Z" fill="#0055FF"/>
                            <path d="M36.6829 54.0295L39.7839 53.3068L48.5797 60.5852L36.6829 54.0295Z" fill="#024266"/>
                        </svg>
                        <br/>
                        <span>Book a meeting with Techqilla</span>
                    </div>
                    <div className='s-form'>
                        <form onSubmit={submitSchedule}>
                            <div className='container'>
                                <div className="tab tab1 active">
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-6'> 
                                            <div className='calendar'>
                                                <div className="app">
                                                    <div className="calendar-container">
                                                        <Calendar onChange={setDate} defaultValue={date} tileDisabled={tileDisabled}/>
                                                    </div>

                                                    <input type='text' name="date" defaultValue={date.toDateString()} style={{display:'none'}}/>

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-6'> 
                                            <label>What Time works best for you?</label>
                                            <select name="timeZone">
                                            {
                                                Timezones.map((obj,i)=>{
                                                    return(
                                                        <option key={i} id={obj.id}>{obj.Zone}</option>
                                                    )
                                                })
                                            }
                                            </select> 

                                            <div className='row time'>
                                                {
                                                    timing ? 
                                                    <>
                                                        {timing.map((obj,index)=>{ 
                                                            if(index % 2 === 0 ){
                                                                return(
                                                                    <div className="col-6" key={index}>
                                                                        <input type="radio" name="time" defaultValue={obj}/>
                                                                        <label>{obj}</label>
                                                                    </div>
                                                                )
                                                            }
                                                            else{
                                                                return(
                                                                    <div className="col-6" key={index}>
                                                                        <input type="radio" name="time" defaultValue={obj}/>
                                                                        <label>{obj}</label>
                                                                    </div>
                                                                )
                                                            }
                                                        })}

                                                    </>
                                                    :
                                                    <>No timing </>
                                                }
                                                                                    
                                            </div>

                                            <div  className='navigationbtn' onClick={nextTab}>Next &nbsp;<i className='fa fa-angle-right'></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='tab tab2'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-6'> 
                                            <div className='shadowBox'>
                                                <img src={require('../../img/calendar.png')}/>: {date.toDateString()}<br/>
                                                <img src={require('../../img/timer.png')}/>: 05:00 PM EST/New York<br/>
                                                <img src={require('../../img/hourglass.png')}/> : 60 Minutes
                                            </div>
                                        </div>
                                        
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-6'> 
                                            <label>Name*</label>
                                            <input type="text" name='from_name' placeholder="Enter Your Name" required/>
                                            <label>Email*</label>
                                            <input type="email" name='email' placeholder="Enter Your Email Address" required/>
                                            <label>Message*</label>
                                            <input type="textarea" name='message' placeholder="Message" required/>
                                            <div style={{display:'flex'}}>
                                                
                                                <div className='navigationbtn' onClick={backTab}><i className='fa fa-angle-left'></i>&nbsp; Go Back</div>
                                                <div>
                                                    <input type="submit" className='navigationbtn submit' value="submit"/>
                                                   
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div> 
                        </form>
                    </div>
                </div>
            </div> 

            <Popup/>

            {/* Schedule Calendar ends */}

            {/* Menu  Starts*/}

            <div className='menusection'>
                <div className="container-fluid" style={{height:'100vh'}}>
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 menubgimg" />
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 menubg">      
                            <div className="closebtn" onClick={closemenu}>
                                
                                <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="34.5437" cy="34.5055" r="33.8107" stroke="white"/>
                                    <path d="M35.527 34.746L47.586 22.7858C47.6939 22.6788 47.7794 22.5518 47.8378 22.412C47.8962 22.2722 47.9263 22.1223 47.9263 21.971C47.9263 21.8197 47.8962 21.6699 47.8378 21.5301C47.7794 21.3903 47.6939 21.2632 47.586 21.1562C47.4781 21.0492 47.35 20.9644 47.2091 20.9065C47.0681 20.8486 46.917 20.8188 46.7645 20.8188C46.6119 20.8188 46.4608 20.8486 46.3199 20.9065C46.1789 20.9644 46.0509 21.0492 45.943 21.1562L33.884 32.9934L21.825 21.0333C21.7171 20.9263 21.589 20.8414 21.4481 20.7835C21.3071 20.7256 21.1561 20.6958 21.0035 20.6958C20.8509 20.6958 20.6998 20.7256 20.5589 20.7835C20.4179 20.8414 20.2899 20.9263 20.182 21.0333C20.0741 21.1403 19.9885 21.2673 19.9301 21.4071C19.8718 21.5469 19.8417 21.6967 19.8417 21.848C19.8417 21.9993 19.8718 22.1492 19.9301 22.289C19.9885 22.4288 20.0741 22.5558 20.182 22.6628L32.241 34.746L20.182 46.5832C20.0723 46.6891 19.9851 46.8158 19.9256 46.9558C19.8661 47.0957 19.8354 47.2461 19.8354 47.3979C19.8354 47.5498 19.8661 47.7001 19.9256 47.8401C19.9851 47.98 20.0723 48.1067 20.182 48.2127C20.2841 48.323 20.4089 48.4103 20.5479 48.4687C20.687 48.527 20.8371 48.5551 20.988 48.5509C21.1436 48.5555 21.2984 48.5278 21.4425 48.4696C21.5867 48.4113 21.717 48.3238 21.825 48.2127L33.884 36.2525L45.943 48.2127C46.0451 48.323 46.1699 48.4103 46.3089 48.4687C46.448 48.527 46.5981 48.5551 46.749 48.5509C46.9048 48.5575 47.0602 48.5307 47.2047 48.4723C47.3491 48.414 47.4792 48.3254 47.586 48.2127C47.6957 48.1067 47.7828 47.98 47.8423 47.8401C47.9019 47.7001 47.9325 47.5498 47.9325 47.3979C47.9325 47.2461 47.9019 47.0957 47.8423 46.9558C47.7828 46.8158 47.6957 46.6891 47.586 46.5832L35.527 34.746Z" fill="white"/>
                                </svg>   
                                
                            </div>
                            <div className="menu-items">
                                <nav id="nav">
                                    <Link to='/'>                                        
                                        <span className="render">Home</span>                                         
                                    </Link>
                                    
                                    <Link to="/about">                                        
                                        <span className="render">About</span>                                        
                                    </Link>
                                    
                                    <Link to="/service">                                       
                                        <span className="render">Services</span>                                       
                                    </Link>
                                    
                                    <Link to="/portfolio">                                        
                                        <span className="render">Portfolio</span>                                        
                                    </Link>
                                    
                                    <Link to ="/contact">                                        
                                        <span className="render">Contact</span>                                       
                                    </Link>
                                    
                                </nav>
                            </div>
                            <div className="social-icon">
                                <ul>
                                    <li>
                                        <a href="https://wwww.facebook.com/hellotechqilla">
                                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.15701 10.0485L9.65289 6.81553H6.55095V4.71751C6.55095 3.83302 6.98425 2.97088 8.37362 2.97088H9.78395V0.218461C9.78395 0.218461 8.50402 0 7.28037 0C4.72557 0 3.05582 1.54835 3.05582 4.35146V6.81553H0.216003V10.0485H3.05582V17.8641C3.62525 17.9535 4.20887 18 4.8034 18C5.39793 18 5.98152 17.9535 6.55095 17.8641V10.0485H9.15701V10.0485Z" fill="black"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/techqilla/">
                                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.80443 5.26634H3.96888V14.7892H0.80443V5.26634ZM2.40784 0.675919C1.32478 0.675919 0.617188 1.38695 0.617188 2.32021C0.617188 3.23427 1.30407 3.96598 2.36642 3.96598H2.3866C3.49037 3.96598 4.17774 3.23424 4.17774 2.32021C4.15704 1.38695 3.4904 0.675919 2.40784 0.675919ZM11.7385 5.04264C10.0587 5.04264 9.30623 5.96655 8.88643 6.61448V5.26634H5.72103C5.76294 6.1597 5.72103 14.7892 5.72103 14.7892H8.88643V9.47096C8.88643 9.18612 8.90714 8.90234 8.99042 8.69829C9.21961 8.12968 9.74041 7.54084 10.614 7.54084C11.7602 7.54084 12.2179 8.41451 12.2179 9.6941V14.7891H15.3828V9.32858C15.3828 6.40361 13.8218 5.04264 11.7385 5.04264Z" fill="black"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/techqilla">
                                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.2396 4.65262C18.2518 4.82893 18.2518 5.00525 18.2518 5.18319C18.2518 10.6051 14.1242 16.8582 6.57677 16.8582V16.8549C4.34724 16.8582 2.16401 16.2195 0.287109 15.0154C0.611302 15.0544 0.93712 15.0739 1.26375 15.0747C3.1114 15.0763 4.90624 14.4564 6.35983 13.3148C4.60399 13.2815 3.06428 12.1367 2.52639 10.4653C3.14147 10.584 3.77523 10.5596 4.37892 10.3946C2.46464 10.0079 1.08743 8.32599 1.08743 6.37271C1.08743 6.35483 1.08743 6.33777 1.08743 6.3207C1.65782 6.6384 2.29645 6.81471 2.94971 6.83421C1.14675 5.62926 0.590989 3.23072 1.67976 1.35544C3.76304 3.91892 6.83677 5.47732 10.1364 5.64226C9.8057 4.21711 10.2575 2.72371 11.3235 1.72188C12.9761 0.168359 15.5753 0.247986 17.1289 1.89982C18.0478 1.71863 18.9286 1.38144 19.7346 0.903683C19.4283 1.85351 18.7872 2.66034 17.9308 3.17303C18.7441 3.07715 19.5388 2.8594 20.2871 2.52708C19.7362 3.3526 19.0423 4.07167 18.2396 4.65262Z" fill="black"/>
                                            </svg> 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/techqilla_/">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.2871 13.1075C11.944 13.1075 13.2871 11.7644 13.2871 10.1075C13.2871 8.45069 11.944 7.10754 10.2871 7.10754C8.63025 7.10754 7.28711 8.45069 7.28711 10.1075C7.28711 11.7644 8.63025 13.1075 10.2871 13.1075Z" fill="black"/>
                                                <path d="M14.4121 0.732544H6.16211C4.76972 0.732544 3.43436 1.28567 2.4498 2.27023C1.46523 3.2548 0.912109 4.59016 0.912109 5.98254V14.2325C0.912109 15.6249 1.46523 16.9603 2.4498 17.9449C3.43436 18.9294 4.76972 19.4825 6.16211 19.4825H14.4121C15.8045 19.4825 17.1399 18.9294 18.1244 17.9449C19.109 16.9603 19.6621 15.6249 19.6621 14.2325V5.98254C19.6621 4.59016 19.109 3.2548 18.1244 2.27023C17.1399 1.28567 15.8045 0.732544 14.4121 0.732544ZM10.2871 14.6075C9.39709 14.6075 8.52706 14.3436 7.78704 13.8492C7.04702 13.3547 6.47025 12.6519 6.12965 11.8296C5.78906 11.0074 5.69994 10.1026 5.87358 9.22964C6.04721 8.35672 6.47579 7.5549 7.10513 6.92556C7.73447 6.29623 8.53629 5.86764 9.4092 5.69401C10.2821 5.52038 11.1869 5.60949 12.0092 5.95009C12.8315 6.29068 13.5343 6.86746 14.0287 7.60748C14.5232 8.3475 14.7871 9.21753 14.7871 10.1075C14.7871 11.301 14.313 12.4456 13.4691 13.2895C12.6252 14.1334 11.4806 14.6075 10.2871 14.6075ZM15.1621 6.35754C14.9396 6.35754 14.7221 6.29156 14.5371 6.16795C14.3521 6.04433 14.2079 5.86863 14.1227 5.66306C14.0376 5.4575 14.0153 5.2313 14.0587 5.01307C14.1021 4.79484 14.2093 4.59438 14.3666 4.43705C14.5239 4.27971 14.7244 4.17257 14.9426 4.12916C15.1609 4.08575 15.3871 4.10803 15.5926 4.19318C15.7982 4.27833 15.9739 4.42252 16.0975 4.60753C16.2211 4.79253 16.2871 5.01004 16.2871 5.23254C16.2871 5.53091 16.1686 5.81706 15.9576 6.02804C15.7466 6.23902 15.4605 6.35754 15.1621 6.35754Z" fill="black"/>
                                            </svg>  
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            {/* Menu Ends */}
            
            {/* Social Media Icons Starts */}

            <div className='iconbar'>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/hellotechqilla">
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.15701 10.0485L9.65289 6.81553H6.55095V4.71751C6.55095 3.83302 6.98425 2.97088 8.37362 2.97088H9.78395V0.218461C9.78395 0.218461 8.50402 0 7.28037 0C4.72557 0 3.05582 1.54835 3.05582 4.35146V6.81553H0.216003V10.0485H3.05582V17.8641C3.62525 17.9535 4.20887 18 4.8034 18C5.39793 18 5.98152 17.9535 6.55095 17.8641V10.0485H9.15701V10.0485Z" fill="black"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/techqilla/">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.80443 5.26634H3.96888V14.7892H0.80443V5.26634ZM2.40784 0.675919C1.32478 0.675919 0.617188 1.38695 0.617188 2.32021C0.617188 3.23427 1.30407 3.96598 2.36642 3.96598H2.3866C3.49037 3.96598 4.17774 3.23424 4.17774 2.32021C4.15704 1.38695 3.4904 0.675919 2.40784 0.675919ZM11.7385 5.04264C10.0587 5.04264 9.30623 5.96655 8.88643 6.61448V5.26634H5.72103C5.76294 6.1597 5.72103 14.7892 5.72103 14.7892H8.88643V9.47096C8.88643 9.18612 8.90714 8.90234 8.99042 8.69829C9.21961 8.12968 9.74041 7.54084 10.614 7.54084C11.7602 7.54084 12.2179 8.41451 12.2179 9.6941V14.7891H15.3828V9.32858C15.3828 6.40361 13.8218 5.04264 11.7385 5.04264Z" fill="black"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/techqilla">
                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2396 4.65262C18.2518 4.82893 18.2518 5.00525 18.2518 5.18319C18.2518 10.6051 14.1242 16.8582 6.57677 16.8582V16.8549C4.34724 16.8582 2.16401 16.2195 0.287109 15.0154C0.611302 15.0544 0.93712 15.0739 1.26375 15.0747C3.1114 15.0763 4.90624 14.4564 6.35983 13.3148C4.60399 13.2815 3.06428 12.1367 2.52639 10.4653C3.14147 10.584 3.77523 10.5596 4.37892 10.3946C2.46464 10.0079 1.08743 8.32599 1.08743 6.37271C1.08743 6.35483 1.08743 6.33777 1.08743 6.3207C1.65782 6.6384 2.29645 6.81471 2.94971 6.83421C1.14675 5.62926 0.590989 3.23072 1.67976 1.35544C3.76304 3.91892 6.83677 5.47732 10.1364 5.64226C9.8057 4.21711 10.2575 2.72371 11.3235 1.72188C12.9761 0.168359 15.5753 0.247986 17.1289 1.89982C18.0478 1.71863 18.9286 1.38144 19.7346 0.903683C19.4283 1.85351 18.7872 2.66034 17.9308 3.17303C18.7441 3.07715 19.5388 2.8594 20.2871 2.52708C19.7362 3.3526 19.0423 4.07167 18.2396 4.65262Z" fill="black"/>
                            </svg> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/techqilla_/">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2871 13.1075C11.944 13.1075 13.2871 11.7644 13.2871 10.1075C13.2871 8.45069 11.944 7.10754 10.2871 7.10754C8.63025 7.10754 7.28711 8.45069 7.28711 10.1075C7.28711 11.7644 8.63025 13.1075 10.2871 13.1075Z" fill="black"/>
                                <path d="M14.4121 0.732544H6.16211C4.76972 0.732544 3.43436 1.28567 2.4498 2.27023C1.46523 3.2548 0.912109 4.59016 0.912109 5.98254V14.2325C0.912109 15.6249 1.46523 16.9603 2.4498 17.9449C3.43436 18.9294 4.76972 19.4825 6.16211 19.4825H14.4121C15.8045 19.4825 17.1399 18.9294 18.1244 17.9449C19.109 16.9603 19.6621 15.6249 19.6621 14.2325V5.98254C19.6621 4.59016 19.109 3.2548 18.1244 2.27023C17.1399 1.28567 15.8045 0.732544 14.4121 0.732544ZM10.2871 14.6075C9.39709 14.6075 8.52706 14.3436 7.78704 13.8492C7.04702 13.3547 6.47025 12.6519 6.12965 11.8296C5.78906 11.0074 5.69994 10.1026 5.87358 9.22964C6.04721 8.35672 6.47579 7.5549 7.10513 6.92556C7.73447 6.29623 8.53629 5.86764 9.4092 5.69401C10.2821 5.52038 11.1869 5.60949 12.0092 5.95009C12.8315 6.29068 13.5343 6.86746 14.0287 7.60748C14.5232 8.3475 14.7871 9.21753 14.7871 10.1075C14.7871 11.301 14.313 12.4456 13.4691 13.2895C12.6252 14.1334 11.4806 14.6075 10.2871 14.6075ZM15.1621 6.35754C14.9396 6.35754 14.7221 6.29156 14.5371 6.16795C14.3521 6.04433 14.2079 5.86863 14.1227 5.66306C14.0376 5.4575 14.0153 5.2313 14.0587 5.01307C14.1021 4.79484 14.2093 4.59438 14.3666 4.43705C14.5239 4.27971 14.7244 4.17257 14.9426 4.12916C15.1609 4.08575 15.3871 4.10803 15.5926 4.19318C15.7982 4.27833 15.9739 4.42252 16.0975 4.60753C16.2211 4.79253 16.2871 5.01004 16.2871 5.23254C16.2871 5.53091 16.1686 5.81706 15.9576 6.02804C15.7466 6.23902 15.4605 6.35754 15.1621 6.35754Z" fill="black"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Social Media Icons Ends */}
            
        </>
    );
}
 

export default Navbar;