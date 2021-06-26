import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import ArticleTitle from '../../component/ArticleTitle';
import Categories from '../../component/Categories';
import SectionCategories from '../../component/SectionCategories';
 import SlideBar from './SlideBar';
const Work = () => {
    
    let listener = null;
    const [bottomState, setBottomState] = useState(false);
    const [show, setShow] = useState(false);
    const [slidebarClick, setSlideBar] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);


    const isBottom = () => {
      return window.innerHeight*2 + window.scrollY  >= document.body.offsetHeight;
    };

    const handleClickSliderBar = () => {
        setSlideBar(!slidebarClick);
    }
  
    const handleOpenMenu = (value) => {
        setOpenMenu(value);
    }
    useEffect(() => {
      let scrollNum = true;
  
      const onScroll = () => {
         if (isBottom()) {
          setBottomState(true);  
          setShow(false);
          setSlideBar(false);
         }
      }
  
      window.addEventListener('scroll', onScroll)
      listener = document.addEventListener('scroll', e => {
        let scrolled = document.scrollingElement.scrollTop;
        // console.log("here is scrolled", scrolled)
  
        if (scrolled <= 120) {
       
          scrollNum && setBottomState(false)
          show && setShow(false);
          setSlideBar(false);
        
        }
        if(scrolled >= 600) {
            setShow(true)
        }
        
      });
  
  
      return () => {
        window.removeEventListener('scroll', onScroll);
        document.removeEventListener('scroll', listener);
        scrollNum = false;
      }
   }, [bottomState]);

        const router = useRouter();
        const { tags } = router.query;
 
        return (
            <>
             { show && <SlideBar   show={show}  handleChidOpenMenu={handleOpenMenu} handleClickSliderBar={handleClickSliderBar} />}
                <section>
                   <ArticleTitle />
                   <Categories />
                </section>
                <SectionCategories 
                show={show}
                openMenu={openMenu}
                slidebarClick={slidebarClick}
                searchParam={tags}
                />
           
            </>
        );
}
 
export default Work;