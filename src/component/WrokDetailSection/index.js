
import React from 'react';
import MySlider from './Slider';
 
import './work-detail-section.scss';

const WorkDetailSection = ({data}) => {

    return (
        <section className="detail-section">
            <div className="title">
                <h4>{data && data?.name}</h4>                                        
            </div>
            <div className="detail-layout">
                <div className="left">
                 
                    <div className="CTAgrid__mainWrapper">
                    <a  href="https://apps.apple.com/us/app/fwd-sg/id1538535682" target="_blank">
                      <div className="app-icon" 
                      style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-app_store@2x.png'})`}}/>
                        <p className="CTAgrid__labelItem">Available on</p>
                        <p className="CTAgrid__copyItem">App store</p>
                    </a>


                    <a className="CTAgrid__gridGroupWrapper is--loadedState" href="https://play.google.com/store/apps/details?id=com.fwd.codigo&amp;hl=en_US&amp;gl=US" target="_blank">
                    <div className="app-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-google_play-store@2x.png'})`}}/>                                    
                        <p className="CTAgrid__labelItem">Available on</p>
                        <p className="CTAgrid__copyItem">Google play</p>
                    </a>
                    </div>

                  
                    <div className='about-business'>
                        <p>
                        {data && data?.description}
                        </p>
                    </div>
                    <div className="feature">                            
                        <p>Key Features</p>
                        <div dangerouslySetInnerHTML={{ __html: data?.key_features }} />                        
                      
                    </div>
                </div>
                <div className="right">
                    <section className="back-layout" style={{backgroundColor: (data && data?.colour_scheme) ? data.colour_scheme: 'rgb(27, 164, 85)'}}>
                   

                        <MySlider gallery={data?.gallery} />

                        
                        
                    </section>
                </div>
            </div>
        </section>
    );
}
 
export default WorkDetailSection;