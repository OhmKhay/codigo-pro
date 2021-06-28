import React from 'react'
import './app-footer.scss'
const SocialInfo = ({ social }) => {
    return (
        <>
              <div className="social-info">
                    {
                        social.map( (item, index)=> (
                            <div key={index}>
                            <a href={item.link} className="social__item">
                                <img src={item.url} alt='socail logo'/>                                      
                            </a>
                            </div>
                        ))
                    }                                        
                </div>
        </>
    )
}

export default SocialInfo
