import React, { useState } from 'react';
import  Link  from 'next/link';
import { useRouter } from 'next/router'
import './header.scss';
// import logo from '../../../static/img/logo-codigo-red.svg';
import menu from '../../../static/menu.png';
import close from '../../../static/close.png';
const logo = "https://www.codigo.co/img/ui/logo-codigo-red.svg";
const Header = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    
    const router = useRouter()
    const detectRoute = () => {
        // Router.push("/work")
       return router.pathname === '/work' ||   router.pathname === '/'
  
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
                    {
                        isOpenMenu ?
                        <div className="mobile-btn" onClick={()=> setIsOpenMenu(!isOpenMenu)}>                            
                            <img src={close} alt="menu"/>                            
                        </div>                        
                        :
                        <div className="mobile-btn" onClick={()=> setIsOpenMenu(!isOpenMenu)}>                                
                            <img src={menu} className="close" alt="menu" />                                
                        </div>                                                        
                    }                                                                                             
                    <ul className={isOpenMenu ? "open" : ""}>                            
                        <li className={detectRoute() ? '':'detail'}>
                            <a href="/work?tags=all">Work</a>
                        </li>
                        <li className={detectRoute() ? '':'detail'}>
                            <a href="/solutions">Solutions</a>
                        </li>
                        <li className={detectRoute() ? '':'detail'}>
                            <a href="/services">Services</a>
                        </li>
                        <li className={detectRoute() ? '':'detail'}>
                            <a href="/about">about us</a>
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
                        <li className="quote">
                            <a href="/blog">
                                <button>
                                    Request a quote
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
 

 
export default Header;