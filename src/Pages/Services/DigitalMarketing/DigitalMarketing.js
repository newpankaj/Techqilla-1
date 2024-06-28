import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import '../SubService.css'
import Services from '../../../Pages/Services/ServicesData';

const DigitalMarketing =()=>{

    return(
        <>
            <Navbar/>
            <section className='popup'>
                {Services.map((obj)=>{
                    if(obj.id===2){

                        var subServices=obj.child_services;
                        return(
                            <>
                                <div key={obj.id}>
                                    <div className='head'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-lg-8 col-sm-8 col-12'>
                                                    <div className='title'>
                                                        <h2><span>{obj.title}</span></h2>
                                                        <hr/>
                                                    </div>
                                                    <div className='subtitle'>
                                                        <h3>{obj.intro}</h3>
                                                    </div>
                                                    <h5 className='linkstyle'>
                                                        <a href="/portfolio/digital-marketing">View Portfolio <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <ellipse cx="32.1704" cy="32.181" rx="31.8149" ry="31.7879" fill="#FFD600"/>
                                                                <path d="M16.0332 33.1021H44.1594M44.1594 33.1021H49.2314C47.2333 32.4878 43.0528 30.6143 42.3151 28.0344C42.7762 29.7236 43.7905 33.1021 44.1594 33.1021Z" stroke="black"/>
                                                            </svg>
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div className='col-lg-4  col-12'>
                                                    <img src={obj.banner}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='sub-services-list'>
                                        <div className='container'>
                                            <div className='row'>
                                                
                                                {subServices ?  
                                                    <>
                                                        {obj.child_services.map((child_services,index)=>{
                                                            
                                                            return(
                                                                <>
                                                                    <div className='col-lg-6 col-sm-12 col-12' key={index}>
                                                                        <div className='sub-service'>
                                                                            <img src={child_services.icon}/>
                                                                            <h2>{child_services.sub_head}</h2>
                                                                            <hr/>
                                                                            <p>{child_services.para} </p>
                                                                        </div> 
                                                                    </div>
                                                                </>
                                                            );
                                                        })}
                                                    </>
                                                    : 
                                                    <h2>No Services Found</h2>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    else{return(<></>)}
                })}
            
            </section>
            <Footer/>
        </>
    )

}

export default DigitalMarketing;