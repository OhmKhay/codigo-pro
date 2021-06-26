import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import './article-title.scss';

class ArticleTitle extends Component {
    render() { 
        return (
           <>
          
            <div className="section article-title">
               <Fade bottom>
                <p className="title title-one">Here’s 5% of </p>
                <p className="title title-two">our published work.</p>
                <p className="title title-three">See 100% of our power.</p>
                </Fade>
             </div>

         
           </>
        );
    }
}
 
export default ArticleTitle;