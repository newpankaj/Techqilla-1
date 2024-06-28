import './style.css';

const Popup = () =>{
    return(
        <>
            <section id="thanks-popup">
                <div className='container pd100'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6 thank-you-Popup align-self-center'>
                            <img src={require('../../img/thankyou.png')} id="center-img"/>
                            <img src={require('../../img/popup-right.png')} id="display-img-left"/>
                            <img src={require('../../img/popup-left.png')} id='display-img-right'/>
                            <h1>Thank You</h1>  
                            <p>for submitting your details. We will reach you out within 24 business hours.</p>
                        </div>                       
                        
                    </div>
                </div>
            </section>

        </>
    )

}

export  default Popup;