import './contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import {useState,useEffect} from 'react';
import Popup from '../../Components/ThankYouPopup.js';
import emailjs from 'emailjs-com';

const Contact = () =>{

    const [formState, setformState] = useState({});

    //not in use for now
    const changeHandler = (event)=>{
        setformState({...formState,[event.target.name]:event.target.value})
    }

    const submitHandler= (event) =>{ 
        event.preventDefault();
        emailjs.sendForm('service_egqflki', 'template_9gnhtun', event.target, 'W9aOB0FzZg9rlBes-')
        .then((result) => {
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
                window.location.href="/" ;
            }
        })
   
    });


    return(
        <>
            <Navbar/>
            <section className='contact-section'>
                <div className='container pd100'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='title'>
                                <h2>Let’s start a <br/><span>project together</span></h2>
                            </div>
                        </div>
                        <div className='col-sm-8 col-12'>
                            <div className='contact-form'>
                                <form onSubmit={submitHandler}>
                                    <label>
                                        <h2>What's Your Name?</h2>
                                        <input type="text" name="from_name" placeholder="John Dua" required/>
                                    </label>
                                    <label>
                                        <h2>What's Your Email?</h2>
                                        <input type="email" name="from_email" placeholder= "John@dua.com" required/>
                                    </label>
                                    <label>
                                        <h2>What's the name of your organisation?</h2>
                                        <input type="text" name="organisation" placeholder="John PVT. LTD." required/>
                                    </label>
                                    <label>
                                        <h2>What service are looking for?</h2>
                                        <input type="text" name="service" placeholder="Web Design, Web Development" required/>
                                    </label>
                                    <label>
                                        <h2>Write to us?</h2>
                                        <input type="textarea" name="message" placeholder="Hello Dennis, Can you help me.." required/>
                                    </label>

                                    <input type="submit" value="Send"/>
                                </form>
                            </div>
                        </div>
                        <div className='col-sm-4 col-12'>
                            <div className='contact-info'>
                                <div className='contact-wrapper'>
                                    <h4>Contact us</h4>
                                    <h3><a href="mailto:hello@techqilla.com">hello@techqilla.com</a></h3>
                                    <h3><a href="tel:+1 (509)-331-5518">US: +1 (509)-331-5518</a></h3>
                                    <h3><a href="tel:+91 8279-328-685">IN: +91 8279-328-685</a></h3>
                                </div>
                                <div className='contact-wrapper'>
                                    <h4>Business Address</h4>
                                    <h3>A-28, Sector 04, Noida</h3>
                                    <h3>203101</h3>
                                </div>
                                {/* <div className='contact-wrapper'>
                                    <h4>Social</h4>
                                    <h3>Facebook</h3>
                                    <h3>Twitter</h3>
                                    <h3>Linkedin</h3>
                                    <h3>Instagram</h3>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Popup/>

            <Footer/>
        </>
    )

}

export  default Contact;