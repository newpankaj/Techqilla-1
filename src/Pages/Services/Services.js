import './Services.css';
import Services from './ServicesData'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useState } from 'react'; 

const OurServices = () => {

    const [serviceIndex,setserviceIndex]= useState(null);
    
    const openPanel = (e) =>{

        if(e.target.nextElementSibling.classList.contains("open")){
            e.target.nextElementSibling.classList.remove("open");
        }
        else {
            const accordionTitlesWithIsOpen = document.querySelectorAll(".panel");
            accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
              accordionTitleWithIsOpen.classList.remove("open");
            });
            e.target.nextElementSibling.classList.add("open");
          
        }
          
    }

    const openingA = (x)=>{ 
        setserviceIndex(x.target.id);
        console.log()
        window.location.href="/service/"+x.target.id.split(' ').join('-').toLowerCase()
    }
    

    return (
        <>  
            <Navbar/>

            <section className='Service-banner'>
                <div className='Service-banner-inner'>
                    <div className='head' data-aos="fade-down" data-aos-delay="200">
                        <h2 >Smooth<span> bussiness</span>  <br/>
                            grows with smart <br/>
                            <span>services</span>
                        </h2>
                    </div>
                    <div className='img-banner' data-aos="fade-up" data-aos-delay="200">
                        <img src={require('../../img/services/services.png')} alt=""/>
                    </div>
                    <div className='ellipse'>
                        <img src={require('../../img/services/ellipse.png')}  alt=""/>
                    </div>
                </div>
            </section>


            <section className='accordion-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-sm-12 col-12'>
                            {Services.map((obj,index)=>{
                                var subServices=obj.child_services;
                                return(
                                    <div key={index}>
                                        <div className='accordion'>
                                            <button className='acc-btn' onClick={openPanel}>
                                                {obj.title}
                                                <i className='fa fa-angle-down'></i>
                                            </button>
                                            <div className='panel'>
                                                <div className='panel-list'>
                                                    <ul>
                                                        {subServices ? 
                                                            <>
                                                                {obj.child_services.map((child_services,index)=>{
                                                                    
                                                                    if(index<5){
                                                                        return(
                                                                            <>                                                                                
                                                                                <li key={index} id={obj.title} onClick={(el)=>openingA(el)}>{child_services.sub_head}</li>
                                                                            </>
                                                                        );
                                                                    }
                                                                })}
                                                            </>
                                                            :
                                                            <li>No Service</li>
                                                        }
                                                    </ul>
                                                    <ul>
                                                        {subServices ? 
                                                            <>
                                                                {obj.child_services.map((child_services,index)=>{
                                                                    
                                                                    if(index>=5){
                                                                        return(
                                                                            <>
                                                                                <li key={index} id={obj.title} onClick={(el)=>openingA(el)}>{child_services.sub_head}</li>
                                                                            </>
                                                                        );
                                                                    }
                                                                })}
                                                            </>
                                                            :
                                                            null
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className='industries'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-21 col-sm-12 col-12'>
                            <div className='align-center title' data-aos="fade-down" data-aos-delay="200">
                                <h2>Industries <span>we serve</span> </h2>
                            </div>

                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame.png')}  alt=""/>
                                        <h3>Automotive</h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-2.png')}  alt=""/>
                                        <h3>E-Commerce</h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-3.png')}  alt=""/>
                                        <h3>Health & Fitness</h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-4.png')}  alt=""/>
                                        <h3>Media & Entertainment</h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-5.png')} alt=""/>
                                        <h3>Public Sector</h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-6.png')} alt=""/>
                                        <h3>Sports </h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-7.png')} alt=""/>
                                        <h3>Blockchain and Crypto</h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-8.png')} alt=""/>
                                        <h3>Finance</h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-9.png')} alt=""/>
                                        <h3>Information Technology</h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-10.png')} alt=""/>
                                        <h3>Management Consulting</h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-11.png')} alt=""/>
                                        <h3>Retail</h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-12.png')} alt=""/>
                                        <h3>Construction</h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-13.png')} alt=""/>
                                        <h3>Healthcare</h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-14.png')} alt=""/>
                                        <h3>Lifestyle (Fashion & Apparel) </h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-15.png')} alt=""/>
                                        <h3>Oil & Energy</h3>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-sm-3 col-6' data-aos="fade-up" data-aos-delay="200">
                                    <div className='industry-items align-center'>
                                        <img src={require('../../img/services/Frame-16.png')} alt=""/>
                                        <h3>Real Estate</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
      );
}

 
export default OurServices;