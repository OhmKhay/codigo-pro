import React from 'react';
import Fade from 'react-reveal/Fade';
import AvailablePlatform from './AvailablePlatform';

import './category-item.scss';

const CategoryItem = (props) => {

    return (
      
        <>
          <Fade>

<a href={`/work/${props.item.url}`} className={`cat-item ${props.item.name == '7Rewards' ? 'reward': props.item.name}`}> 

<div className="title">
    <p>{props.item.txt}</p>
    <h5>{props.item.name}</h5>
    
</div>           


 <img src={props.item.bg_url} alt={props.item.name}/>            


<AvailablePlatform 
    mobile={props.item.mobile}
    web={props.item.web}
    setting={props.item.setting}
/>        

</a>
</Fade> 
        </>
    
    );    
}
 
export default CategoryItem;