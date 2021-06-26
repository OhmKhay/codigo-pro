import React from 'react';
import Fade from 'react-reveal/Fade';
import './legend.scss';
const Legend = () => {
    return (
        <>
                 <div className="legend">
                    <Fade bottom>
                      <p className="legend-title">LEGEND</p>
                    </Fade>
                    <Fade bottom>
                      <div className="legend-category">
                        <div className="category-item">
                            <div className="category-img" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-app.svg'})`}}/>
                            <div>App</div>
                        </div>
                        <div className="category-item">
                            <div className="category-img" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-web.svg'})`}}/>
                            <div>Web</div>
                        </div>
                        <div className="category-item">
                            <div className="category-img" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-cms.svg'})`}}/>
                            <div>CMS</div>
                        </div>
                        <div className="category-item">
                            <div className="category-img" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-uiux.svg'})`}}/>
                            <div>UI/UX</div>
                        </div>
                     </div>
                     </Fade>
                </div>
        </>
    )
}

export default Legend
