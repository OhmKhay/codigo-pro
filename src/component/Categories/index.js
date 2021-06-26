import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import Router, { useRouter } from 'next/router';
import { getData } from '../../actions/getData';
import { services } from '../../constants'
import './categories.scss' 
import Legend from './Legend';
const Categories = ({ getData }) => {
    
    const router = useRouter();
    const { tags } = router.query;

     const [activeItem, setActiveItem] = useState( tags || 'all');
      
     useEffect(() => {
         setActiveItem(tags)
     }, [tags]);
    const handleSelect = (item) => {

        setActiveItem(item.keyword);
        getData(item.keyword);
    }
  
        return (
            <div className="section categories">
                <Fade bottom>
                <ul>
                    {
                    services.map((item, index)=> 
                        <li 
                            key={index} 
                            onClick={()=> handleSelect(item)}                 
                            className={ item.keyword === activeItem ? 'active' : ''}            
                        >
                            <div
                            onClick={() => {
                                Router.push({
                                    pathname: '/work',
                                    query: { tags: `${item.keyword}` }
                                  }, 
                                  undefined, { shallow: true }
                                  )
                            }}
                           
                            >
                            {/* <a > */}
                             {item.name}
                            {/* </a>     */}
                             </div>                            
                        </li>
                    )}
                </ul>
                </Fade>
                <Legend />
            </div>
        );
}

export default connect(null, { getData })(Categories);