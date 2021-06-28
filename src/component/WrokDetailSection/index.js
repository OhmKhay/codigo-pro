
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Router from 'next/router';
import MySlider from './Slider';
 
import './work-detail-section.scss';

const WorkDetailSection = ({data}) => {
    let listener = null;
    const [timmer, setTimer] = useState(false);
    const [topState, setTopState] = useState(false);


    useEffect(() => {
        let scrollNum = true;
    
        listener = document.addEventListener('scroll', e => {
          let scrolled = document.scrollingElement.scrollTop;
          
     
          if (scrolled <= 120 || scrolled === 0) {
         
            scrollNum && setTopState(true)
      
          } 
          if(scrolled >= 800) {
              scrollNum && setTopState(false);
          }
         
          
        });
    
    
        return () => {
          document.removeEventListener('scroll', listener);
          scrollNum = false;
        }
     }, [topState]);


    useEffect(() => {
        setInterval(function(){ 
              setTimer(true);
        }, 2000);
    }, []);

    return (
        <section className="detail-section">
            <Fade bottom>
              <div className="title">
                <h4>{data && data?.name}</h4>                                        
              </div>
            </Fade>
            {
                topState&&<>
                
                <Fade left>
            <div onClick={() => {
                return Router.push(`/work/${data.prev_post_slug}`)
            }} className={'prev btn_wrapper'}>

            </div>
            </Fade>
            <Fade right>
              <div 
               onClick={() => {
                return Router.push(`/work/${data.next_post_slug}`)
            }} className={'next btn_wrapper'}>

               </div>
                </Fade>
                </>
            }
            <div className="detail-layout">
                <div className="left">
                 
                    <div className="CTAgrid__mainWrapper">
                         <Fade bottom>
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
                         </Fade>

                    </div>

                  
                      <Fade bottom>
                      <div className='about-business'>
                        <p>
                        {data && data?.description}
                        </p>
                      </div>
                        </Fade>
                    <Fade bottom>
                      <div className="feature">                            
                        <p>Key Features</p>
                        <div dangerouslySetInnerHTML={{ __html: data?.key_features }} />                        
                      </div>
                    </Fade>
                </div>
                <div className="right">
                      <Fade top>
                      <section className="back-layout" style={{backgroundColor: (data && data?.colour_scheme) ? data.colour_scheme: 'rgb(27, 164, 85)'}}>
                   

                        {timmer&&(<Fade>

                            <MySlider gallery={data?.gallery} />
                        </Fade>)}

                   
                   
                      </section>
                      </Fade>
                </div>
            </div>

           <div className={'mob_btn'}>
                <div 
                onClick={() => {
                  return Router.push(`/work/${data.prev_post_slug}`)
              }}
                className="mob_prev">

                </div>
                <div 
                onClick={() => {
                  return Router.push(`/work/${data.next_post_slug}`)
                }}
                className={'mob_next'}>

                </div>
           </div>
        
        </section>
    );
}
 
export default WorkDetailSection;