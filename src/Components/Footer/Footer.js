import './Footer.css';
import { useEffect } from 'react';
import gsap,{Power3} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    useEffect(()=>{

        gsap.fromTo('.iconbar',{x:0,y:0,rotate:0,},{scrollTrigger:{trigger:'.footer-logo',start:'top center',end:'bottom bottom',scrub:4},x:-100,y:220,rotate:'90deg',duration:0.7})
        // gsap.fromTo('.iconbar li',{border:'none',background:'#0049DC'},{scrollTrigger:{trigger:'footer',start:'top center',end:'bottom bottom',scrub:4},border:'1px solid #fff',background:'transparent',duration:0.2})
        gsap.fromTo('.iconbar svg',{rotate:0},{scrollTrigger:{trigger:'.footer-logo',start:'top center',end:'bottom bottom',scrub:2},rotate:'-90deg',duration:0.4})
        gsap.fromTo('.iconbar svg path',{fill:'#fff'},{scrollTrigger:{trigger:'footer',start:'top center',end:'bottom bottom',scrub:4},fill:'#fff',duration:0.4,ease:Power3.easeIn})
        
    },[])

    const toTop =()=>{  
        window.scrollTo(0, 0) 
    }
    
    return (  
        <>
        <div className='whatsapp-icon'>
            <a href='https://wa.me/+919990421542'>
                <img src={require('../../img/whatsapp.png')} alt=""/>
            </a>
        </div>
        
        <div className="above-footer">
            <div className="col50 join-info">
                <h1>Join Our Team</h1>
                <p>Resonate with us and feel like you’re a good fit? 
                We’re always on the lookout for amazing talent! </p>
                <button>
                    <a href="/join">
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.1581 1.45929C32.1581 0.907005 31.7104 0.45929 31.1581 0.459289L22.1581 0.459288C21.6059 0.459289 21.1581 0.907003 21.1581 1.45929C21.1581 2.01158 21.6059 2.45929 22.1581 2.45929L30.1581 2.45929L30.1581 10.4593C30.1581 11.0116 30.6059 11.4593 31.1581 11.4593C31.7104 11.4593 32.1581 11.0116 32.1581 10.4593L32.1581 1.45929ZM1.66878 32.3629L31.8652 2.1664L30.451 0.752182L0.254563 30.9487L1.66878 32.3629Z" fill="white"/>
                    </svg>
                    </a>
                </button>
            </div>
            <div className="col50 contact-info">
                <h1>Contact Us</h1>
                <p>Want to talk to us? Let’s schedule a call and discuss about your business over a cup of coffee! </p>
                <button>
                    <a href="/contact">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.1581 1.45929C32.1581 0.907005 31.7104 0.45929 31.1581 0.459289L22.1581 0.459288C21.6059 0.459289 21.1581 0.907003 21.1581 1.45929C21.1581 2.01158 21.6059 2.45929 22.1581 2.45929L30.1581 2.45929L30.1581 10.4593C30.1581 11.0116 30.6059 11.4593 31.1581 11.4593C31.7104 11.4593 32.1581 11.0116 32.1581 10.4593L32.1581 1.45929ZM1.66878 32.3629L31.8652 2.1664L30.451 0.752182L0.254563 30.9487L1.66878 32.3629Z" fill="black"/>
                        </svg>
                    </a>
                </button>
            </div>
        </div>
        <footer >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-12 hide-on-mobile">
                        <div className="footer-logo">
                            <svg width="50" height="63" viewBox="0 0 50 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_571_368)">
                                    <path d="M0 18.0755L50 0.550293L10.644 36.2572L0 18.0755Z" fill="white"/>
                                    <path d="M18.0628 36.2573L33.8683 18.4038L25.0001 62.5503L18.0628 36.2573Z" fill="white"/>
                                    <path d="M25 62.5503L24.006 38.5287L33.8683 18.4038L25 62.5503Z" fill="white"/>
                                    <path d="M47.5254 35.2675L40.2723 12.4961L30.5861 56.4707L47.5254 35.2675Z" fill="white"/>
                                    <path d="M30.5861 56.4707L41.1783 34.9184L40.2723 12.4961L30.5861 56.4707Z" fill="white"/>
                                    <path d="M10.644 36.2572L11.8555 23.8374L50 0.550293L10.644 36.2572Z" fill="white"/>
                                    <path d="M39.3922 50.3965L47.779 61.1752L35.8822 54.5121L39.3922 50.3965Z" fill="white"/>
                                    <path d="M35.8822 54.5119L38.9832 53.7773L47.779 61.175L35.8822 54.5119Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_571_368">
                                        <rect width="50" height="62" fill="white" transform="translate(0 0.550293)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <p id="footer-company-info">A business consultancy firm, an anchor that you can rely on. Led creatively, built strategically.</p>
                    </div>
                    <div className="col-4  hide-on-desktop">
                        <div className="footer-logo">
                            <svg width="50" height="63" viewBox="0 0 50 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_571_368)">
                                    <path d="M0 18.0755L50 0.550293L10.644 36.2572L0 18.0755Z" fill="white"/>
                                    <path d="M18.0628 36.2573L33.8683 18.4038L25.0001 62.5503L18.0628 36.2573Z" fill="white"/>
                                    <path d="M25 62.5503L24.006 38.5287L33.8683 18.4038L25 62.5503Z" fill="white"/>
                                    <path d="M47.5254 35.2675L40.2723 12.4961L30.5861 56.4707L47.5254 35.2675Z" fill="white"/>
                                    <path d="M30.5861 56.4707L41.1783 34.9184L40.2723 12.4961L30.5861 56.4707Z" fill="white"/>
                                    <path d="M10.644 36.2572L11.8555 23.8374L50 0.550293L10.644 36.2572Z" fill="white"/>
                                    <path d="M39.3922 50.3965L47.779 61.1752L35.8822 54.5121L39.3922 50.3965Z" fill="white"/>
                                    <path d="M35.8822 54.5119L38.9832 53.7773L47.779 61.175L35.8822 54.5119Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_571_368">
                                        <rect width="50" height="62" fill="white" transform="translate(0 0.550293)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        
                    </div>
                    <div className="col-8 hide-on-desktop">
                        <p id="footer-company-info">A business consultancy firm, an anchor that you can rely on. Led creatively, built strategically.</p>
                    </div>
                    <div className="col-lg-3 col-4">
                        <div className="quick-links">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/service">Services</a></li>
                                <li><a href="/portfolio">Portfolio</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-8">
                        <div className="footer-info">
                            <ul>
                                <li>US: <a href="tel:+1 (509)-331-5518">+1 (509)-331-5518</a><br/> India: <a href="tel:+918277328685">+91 8279-328-685</a></li>
                                <li><a href="mailto:hello@techqilla.com">hello@techqilla.com</a></li>
                                <li>
                                    {/* <a href="https://goo.gl/maps/BA3DV6hMdMEfcZ13A"> */}
                                        A-28, Sector 4, Noida (201301) Uttar-Pradesh, India
                                    {/* </a> */}
                                    </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-2">
                        <div className="scroll-top" onClick={toTop}>
                            <img src={require('../../img/arrow-right.png')} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="footer-icon social-icon">
                    <ul>
                        <li>
                            <a href="https://www/facebook.com/hellotechqilla">
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
                            <a href="#">
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
                <div className="copyright">
                    <div className="row">
                        <div className="col-3"/>
                        <div className="col-lg-9  col-sm-12">
                            <p>
                                ©2022<br/>
                                Copyright TechQilla All rights reserved-2022.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </> 
    );
}
 
export default Footer;