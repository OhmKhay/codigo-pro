import React, { useState } from 'react';
import  Link  from './Link';
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router';
import { socialMobile } from '../../constants/socialData';

import './header.scss';
import SocialInfo from '../Footer/SocialInfo';
const logo = "https://www.codigo.co/img/ui/logo-codigo-red.svg";
const Header = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isClickIcon, setIsClickIcon] = useState(false);

    
    const router = useRouter()
    const detectRoute = () => {
       
       return router.pathname === '/work' ||   router.pathname === '/'
  
    }
    const handleNavIcon = () => {
        setIsClickIcon(!isClickIcon);
    }
    return (
        <header >                
            <div className="app-nav">
                <a href="/work?tags=all">
                    <div className="logo">
                        {
                            detectRoute() ?
                                <img src={logo} className="App-logo" alt="logo" />    
                                :                            
                                  <div className="back-icon">
                                    <div className="icon"/>
                                      <p className="back-txt">back to work</p>
                                  </div>
                        }                        
                    </div>
                </a>
                <nav className="nav-list">       
                
                           <div className={isOpenMenu ?"ci_show": "ci_none"}>

                           </div>             
                          <selection className={'hbg_menu'} onClick={()=> setIsOpenMenu(!isOpenMenu)}>
                               <div className={'circle'} onClick={()=> setIsOpenMenu(!isOpenMenu)} >
                              
                               <div id="nav-icon" onClick={handleNavIcon} onClick={()=> setIsOpenMenu(!isOpenMenu)} className={`${isOpenMenu?"op":""}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                     <span></span>
                                </div>  
                                </div>  
                           </selection>     
                                                                
                              
                                                                          
                    <ul className={isOpenMenu ? "open" : ""}>                            
                        <Fade bottom>
                        <li className={detectRoute() ? '':'detail'}>
                            <Link href="/work" activeClassName="active">
                            <a> Work </a>
                            </Link>
                        </li>
                        <li className={detectRoute() ? '':'detail'}>
                           <Link href="/solutions" activeClassName="active">
                             <a >Solutions</a>
                           </Link>
                        </li>
                        <li className={detectRoute() ? '':'detail'}>
                           <Link href="/services" activeClassName="active">
                           <a >Services</a>
                           </Link>
                        </li>
                        <li className={detectRoute() ? '':'detail'}>
                            <a href="/about">About us</a>
                        </li>
                        <li className={detectRoute() ? '':'detail'}>
                            <a href="/blog">Blog</a>
                        </li>
                        <li className={detectRoute() ? 'mobile':'detail mobile'}>
                            <a href="/">Request a quote</a>
                        </li>
                        <li className={detectRoute() ? 'mobile':'detail mobile'}>
                            <a href="/">Let's chat</a>
                        </li>
                        <li className={detectRoute() ? 'mobile':'detail mobile'}>
                          <div className={'socialIcon'}>
                             {socialMobile.map((data) => {
                                 return <a href={data.link}>
                                    <img src={data.url} />
                                 </a>
                             })}
                          </div>
                        </li>
                        <li className="quote">
                            <a href="/blog">
                                <button>
                                    Request a quote
                                </button>
                            </a>
                        </li>
                     
                        </Fade>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
 

 
export default Header;