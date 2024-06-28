import './recruitment.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import {useState} from 'react';

import emailjs from 'emailjs-com';

const Recruitment = () =>{

    const [formState, setformState] = useState({});

    const changeHandler = (event)=>{
        setformState({...formState,[event.target.name]:event.target.value})
    }
    const submitHandler= (event) =>{ 
        event.preventDefault();
        emailjs.sendForm('service_iat12wr', 'template_yz2602a', event.target, 'pmeWI_54_bDioW291')
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    }
    return(
        <>
            <Navbar/>
            <section className='contact-section'>
                <div className='container pd100'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='title'>
                                <h2>Let’s work<br/><span> together </span></h2>
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
                                        <h2>How many years of experience do you have? </h2>
                                        <input type="text" name="organisation" placeholder="1-3 Years" required/>
                                    </label>
                                    <label>
                                        <h2>Which role are you applying for? </h2>
                                        <input type="text" name="service" placeholder="Designer,Developer" required/>
                                    </label>
                                    <label>
                                        <h2>Your Message?</h2>
                                        <input type="textarea" name="message" placeholder="Hello Techqilla, I am.." required/>
                                    </label>

                                    <input type="submit" value="Send"/>
                                </form>
                            </div>
                        </div>
                        <div className='col-sm-4 col-12'>
                            <div className='contact-info'>
                                <div className='contact-wrapper'>
                                    <h4>Contact us</h4>
                                    <h3><a href="mailto:info@techqilla.com">info@techqilla.com</a></h3>
                                    <h3><a href="tel:01123456789">+01123456789</a></h3>
                                </div>
                                <div className='contact-wrapper'>
                                    <h4>Business Details</h4>
                                    <h3>C-8, Sector 02, Noida</h3>
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

            <Footer/>
        </>
    )

}

export  default Recruitment;