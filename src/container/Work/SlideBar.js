import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { services } from '../../constants';
import { getData } from '../../actions/getData';
import Legend from '../../component/Categories/Legend';
import './slide.scss';
const SlideBar = ({ handleClickSliderBar, handleChidOpenMenu, getData }) => {
    const router = useRouter();
    const { tags } = router.query;

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [activeItem, setActiveItem] = useState(tags || "all");
    
    const handleSelect = (item) => {
        setActiveItem(item.keyword);
        getData(item.keyword)

    }
    const handleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
        handleClickSliderBar();
        handleChidOpenMenu(!isOpenMenu);
    }

    return (
       <section className="WorkFilterContainer__mainWrapper">
        
               { <section
            
                 className={`WorkFilterAndLegend__mainGridWrapper WorkFilterAndLegend--isVertical ${isOpenMenu?'open':'close'}`}>
                     <section className="cat_list">
                          <ul>
                              {
                                  services.map((item, index) =>(
                                      <li key={index} 
                                      className={ item.keyword == activeItem ? 'active' : ''}       
                                      onClick={() => handleSelect(item)}
                                      >
                                          <div 
                                            onClick={() => {
                                                Router.push({
                                                    pathname: '/work',
                                                    query: { tags: `${item.keyword}` }
                                                  },

                                                  undefined, { shallow: true }
                                                  )
                                                  handleMenu()
                                            }}
                                          >
                                            {item.name}
                                          </div>
                                      </li>
                                  ))
                              }

                              <Legend />
                          </ul>
                      </section>
                     <div className={'WorkFilterBall__mainWrapper'} onClick={handleMenu}>
                    
                     <p className={`ball_text ${isOpenMenu?'clx_icon':'op_icon'}`}>
                         {isOpenMenu?'X':'Filter'}
                     </p>
                     </div>
             
               </section>}
       </section>
    )
}

export default connect(null, { getData })(SlideBar)
