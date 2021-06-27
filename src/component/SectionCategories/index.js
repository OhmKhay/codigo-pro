import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router';
import CategoryItem from './CategoryItem';
import { getData } from '../../actions/getData';
import './section-categories.scss';

const SectionCategories = ({ searchParam, getData, data, slidebarClick }) => {
    const router = useRouter();
    const { tags } = router.query;
  
    useEffect(() => {
        if(searchParam){
            getData(searchParam);
        }else{
            getData("all");
        }
    }, []);

    const renderServices = ()=> {

        return (
            data.length > 0 ? data.map((item,index)=> (
                
                     <CategoryItem item={item} key={index} /> 
                   
            )): <div className="nofound">
                <Fade bottom>
                
               {`There is no specific project related with the tag name(${tags})! Do you want to show all the projects instead?`}
           
                 </Fade>
            </div>
        )          
    }                     

    
     
        return (
            <div style={{
                display: "flex"
            }}>
              {slidebarClick && <div className={`${slidebarClick?"flex_1":""}`}>
                    
             </div>}
             <div className="cat">
             <div className="section-categories">  
            
              { renderServices()}                              
             </div>
             </div>
            </div>
        );
}

const mapStateToProps = (state) => {
    return {
        data: state.data.data
    }
}

export default connect(mapStateToProps, { getData })(SectionCategories);