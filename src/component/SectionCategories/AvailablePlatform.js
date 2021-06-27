import React, { Component } from 'react';
 
import './available-platform.scss';

const AvailablePlatform = (props) => (            
            <div className="available-layout">
                {props.mobile && <div className="platform-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-app.svg'})`}}/>}
                {props.web && <div className="platform-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-web.svg'})`}}/>}
                {props.cms && <div className="platform-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-cms.svg'})`}}/>}
                {props.ui_ux && <div className="platform-icon" style={{backgroundImage: `url(${'https://www.codigo.co/img/ui/ico-uiux.svg'})`}}/>}
        </div>
        );    
 
export default AvailablePlatform;   