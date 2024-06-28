

const SliderData = [
    {
        id:1,
        heading:[
                <div>
                    <span className='blueclr'>Marketing </span> 
                    is no more a risk you have to take.
                </div>
                ],
        link:"/about",
        content:"We partner with startups and other companies that are mission-oriented and want to set new standards for sustainable growth. ",
        banner:[
            <div className='banner-1'>
                <img src={require('../../img/banner-img.png')} className='logomask'/>
            </div>
        ]
    },{
        id:2,
        heading:[
                <div>
                    Get in front of the right audience, through <span className='blueclr'>digital</span>  platforms. 
                </div>
                ],
        link:"/portfolio/digital-marketing",
        content:"Explore Digital Marketing",
        banner:[
            <div className='banner'>
                <img src={require('../../img/banner2.png')} id="bannerimg"/>
                <img src={require('../../img/home-banner-box.png')} id="bannerback"/>
            </div>
        ]

    },{
        id:3,
        heading:[
                <div>   
                    Merging imagination  and <span className='blueclr'>technology</span> to tell your story right. 
                </div>
                ],
        link:"/portfolio/web-design",
        content:" Explore  Website Designs",
        banner:[
            <div className='banner-3'>
                <div className='banner-inner'>
                    <div className='banner-img'>
                        <img src={require('../../img/banner3.png')} id="slider3"/>
                    </div>
                    <div className='banner-head'>
                        <h1>TechQilla</h1>
                    </div>
                </div>
            </div>
        ]
    }
]

export default SliderData;