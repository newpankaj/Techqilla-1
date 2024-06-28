import './style.css';
import gsap from 'gsap';
import { useEffect } from 'react';

const ClassicPreloader = () => {

    useEffect(()=>{

        let svgIndex = document.querySelectorAll('.preloaderContainer path');
        for(let x=0; x<svgIndex.length; x++ ){
            let path= svgIndex[x];
            let pathLength=svgIndex[x].getTotalLength();
            
            path.style.strokeDasharray = pathLength + ' ' + pathLength;
            path.style.strokeDashoffset = pathLength;
    
            gsap.to('.preloaderContainer path',{stroke:'#fff',strokeDashoffset:0,duration:3})  
        }  
 
    })
    
    return ( 
        <>
            <div className="preloaderContainer">
                <div className="preloaderInner">
                    <svg className="Tstroke1"  width="260" height="184" viewBox="0 0 260 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 90L59.5 182" stroke="black" strokeWidth="1.5"/>
                        <path d="M259 1L3 90L64.5 116L60 181.5L259 1Z" stroke="black" strokeWidth="1.5"/>
                        <path d="M65 116L258 1.5" stroke="black" strokeWidth="1.5"/>
                    </svg>

                    <svg className="Tstroke2" width="86" height="227" viewBox="0 0 86 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.5 226L84.5 3L1 90.5L38.5 226Z" stroke="black" strokeWidth="1.5"/>
                        <path d="M84 5L33 99.2933L38.5 223.5" stroke="black" strokeWidth="1.5"/>
                    </svg>
                    <svg className="Qstroke" width="85" height="227" viewBox="0 0 85 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43.9939 0.607851L1.61461 224.324L83.6853 135.482L43.9939 0.607851Z" stroke="black" strokeWidth="1.5"/>
                        <path d="M2.49995 222.5L51.5843 129.502L43.4941 0.615982" stroke="black" strokeWidth="1.5"/>
                    </svg>
                    <svg className="tail" width="55" height="58" viewBox="0 0 55 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 2L1 21" stroke="black" strokeWidth="1.5"/>
                        <path d="M53.6709 56.3835L19.6033 3.03784L17.2056 18.5353L2.32761 21.2167L53.6709 56.3835Z" stroke="black" strokeWidth="1.5"/>
                        <path d="M17.2333 18.6493L53.56 55.9274" stroke="black" strokeWidth="1.5"/>
                    </svg>
                </div>
                <svg className="stars starpos1" width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0225 11.1803L14.7303 1L16.2135 11.1803L24 14.7213L16.2135 16.3811L12.7528 28L11.0225 16.3811L2 12.9508L11.0225 11.1803Z" stroke="black"/>
                </svg>
                <svg className="stars starpos2" width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0225 11.1803L14.7303 1L16.2135 11.1803L24 14.7213L16.2135 16.3811L12.7528 28L11.0225 16.3811L2 12.9508L11.0225 11.1803Z" stroke="black"/>
                </svg>
                <svg className="stars starpos3" width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0225 11.1803L14.7303 1L16.2135 11.1803L24 14.7213L16.2135 16.3811L12.7528 28L11.0225 16.3811L2 12.9508L11.0225 11.1803Z" stroke="black"/>
                </svg>
                <svg className="stars starpos4" width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0225 11.1803L14.7303 1L16.2135 11.1803L24 14.7213L16.2135 16.3811L12.7528 28L11.0225 16.3811L2 12.9508L11.0225 11.1803Z" stroke="black"/>
                </svg>
                <svg className="stars starpos5" width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0225 11.1803L14.7303 1L16.2135 11.1803L24 14.7213L16.2135 16.3811L12.7528 28L11.0225 16.3811L2 12.9508L11.0225 11.1803Z" stroke="black"/>
                </svg>
                <svg className="stars starpos6" width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0225 11.1803L14.7303 1L16.2135 11.1803L24 14.7213L16.2135 16.3811L12.7528 28L11.0225 16.3811L2 12.9508L11.0225 11.1803Z" stroke="black"/>
                </svg>

                <svg className="shadow" width="559" height="2" viewBox="0 0 559 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1L559 1" stroke="black"/>
                </svg>

            </div>
        </> 
    );
}
 
export default ClassicPreloader;