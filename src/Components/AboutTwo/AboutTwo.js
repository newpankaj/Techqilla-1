import './AboutTwo.css';
import song from '../../assets/audio/nightvision.wav';
import { Howl } from 'howler';

const AboutTwo = () => {

    const soundfx = (e) =>{
        e.preventDefault();

        const playsound = new Howl ({
            src:song,
            html5:true,
            volume:0.06
        })
        playsound.play();
    }
    return ( 
        <> 
        
        <div className="whyus">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="text-align-center">
                            <h1 data-aos="fade-down" data-aos-delay="50">People like creativity. <br/>
                            Here’s how we do it. 
                            </h1>
                        </div>
                    </div>
                    <div className="feature-wrapper">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="features" data-aos="fade-down" onMouseEnter={soundfx}>
                                    <h1>01</h1>
                                    <h2>Building personalized experiences</h2>
                                    <p>Your prospect is a human, not a robot. We build strategies to personalize the process. </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features" data-aos="fade-down" data-aos-delay="200" onMouseEnter={soundfx}>
                                    <h1>02</h1>
                                    <h2>A mix of modern & rooted </h2>
                                    <p>We’re fun and trendy. We will figure out the fads forecasting in your space, but also be strategically smart. </p>
                                </div> 
                            </div>
                            <div className="col-lg-4">
                                <div className="features" data-aos="fade-down" data-aos-delay="400" onMouseEnter={soundfx}>
                                    <h1>03</h1>
                                    <h2>A creative riot </h2>
                                    <p>Creativity makes us happy. Our process blends business, branding, and marketing so you can make a real difference.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
     );
}
 
export default AboutTwo;