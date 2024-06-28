import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import '../SubService.css'
import Services from '../../../Pages/Services/ServicesData';

const BusinessConsultation =()=>{

    return(
        <>
            <Navbar/>
            <section className='popup'>
                {Services.map((obj)=>{
                    if(obj.id===5){

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

export default BusinessConsultation;