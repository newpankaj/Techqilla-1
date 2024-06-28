import './Portfolio.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useEffect,useRef } from 'react';

const Portfolio = () => {

    const ref = useRef();

    return (
        <>  
            <Navbar/> 
            <section className='portfolios'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 '>
                            <div className='title'>
                                <h3>
                                    Discover Some of our <span>Designs</span>
                                </h3>
                            </div>
                            <div className='portfolio-category'>
                                <ul>
                                    <li>
                                        <a href="/portfolio/graphic-designing">
                                            Graphic Design
                                        <img className="arrow-anchor" src={require('../../img/portfolio/arrow.png')}/>  
                                        </a>  
                                        <img className='portfolio-preview' src={require('../../img/portfolio/portfolios-category-1.png')}/>    

                                    </li>
                                    <li>
                                        <a href="/portfolio/digital-marketing">
                                            Digital Marketing                                                     
                                        <img className="arrow-anchor" src={require('../../img/portfolio/arrow.png')}/>  
                                        </a>  
                                        <img className='portfolio-preview' src={require('../../img/portfolio/portfolios-category-3.png')}/>   
                                    </li>
                                    <li>
                                        <a href="/portfolio/web-design">
                                            Website UI Design                                          
                                        <img className="arrow-anchor" src={require('../../img/portfolio/arrow.png')}/>  
                                        </a>  
                                        <img className='portfolio-preview' src={require('../../img/portfolio/portfolios-category-2.png')}/>   
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-6 col-4'>
                            <div className='portfolio-category-images'>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

 
export default Portfolio;