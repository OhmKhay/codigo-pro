import React from 'react';
import { social } from '../../constants/socialData';
 
import './app-footer.scss';
import SocialInfo from './SocialInfo';

const Footer = () => {

        return (
          <section style={{
              width: '100%',
              backgroundColor: "#fafafafa"
          }}>
                <footer className="footer_con footer">
                <div>
                    <h5 className="title">Let’s have a chat</h5>
                </div>                
                <div className="step-layout">
                {
                    steps.map((item, index)=> (
                        <div className="step-item" key={index}>
                            <h5 className="item-title">{item.title}</h5>
                            <p className="item-txt">{item.txt}</p>
                        </div>
                    ))
                }
                </div>
                <SocialInfo social={social} />
            
                <div className="address">
                    <p>Copyright © Codigo - Mobile App Developer Singapore</p>
                    <p>+65 6455 9790 • 26 Sin Ming Lane, Midview City #07-115 Singapore 573971</p>
                </div>
            </footer>
          </section>
        );
}
 
export default Footer;



const steps = [
    {
        title: "Build",
        txt: "Help you build something"
    },
    {
        title: "Co-incubate",
        txt: "Co-incubate an idea together"
    },
    {
        title: "Customise",
        txt: "Customise a solution for your business"
    },
    {
        title: "Organise",
        txt: "Organise learning sessions with us"
    }
]