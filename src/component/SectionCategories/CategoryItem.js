import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import AvailablePlatform from "./AvailablePlatform";

import "./category-item.scss";

const CategoryItem = (props) => {

  return (

      <>
   
        <Link  href={`/work/[slug]`} as={`/work/${'ocbc-pay-anyone'}`}>
          <a
           
            className={`cat-item ${
              props.item.grid_size === 0.5 ? "workGrid__colWidth--span2" : ""
            }`}
          >

             <div className={`title`}>
              <p
                className={`${
                  props.item.text_color == "#000000" ? "c_black" : "c_white"
                }`}
              >
                {props.item.categories.map((item, index) => {
                    return (
                      <span key={`demo_snap_${index}`} dangerouslySetInnerHTML={{ __html:  (index ? ', ' : '') + item.name }} />
                    )
                })}
              </p>
              <h5
                className={`${
                  props.item.text_color == "#000000" ? "c_black" : "c_white"
                }`}
              >
                {props.item.name}
              </h5>
            </div>
          
            <img
              className={"work_grid_bg"}
              src={props.item.image?.normal}
              alt={props.item.name}
            />
           
            <AvailablePlatform
             roles={props.item?.roles}
           
            />
            
          </a>
        </Link>
   
      </>

  );
};

export default CategoryItem;
