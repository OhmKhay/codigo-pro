import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import AvailablePlatform from "./AvailablePlatform";

import "./category-item.scss";

const CategoryItem = (props) => {
 
  return (

      <>
        <Link  href={`/work/[slug]`} as={`/work/${props.item.slug}`}>
          <a
           
            className={`cat-item ${
              props.item.name == "7Rewards" ? "reward" : props.item.name
            }`}
          >
             {/* <Fade> */}
             <div className={`title`}>
              <p
                className={`${
                  props.item.text_color == "#000000" ? "c_black" : "c_white"
                }`}
              >
                {props.item.txt}
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
            //  mobile={props.item.role}
            //  web={props.item.web}
            //  cms={props.item.cms}
            //  ui_ux={props.item.ui_ux}
            />
             {/* </Fade> */}
          </a>
        </Link>
      </>

  );
};

export default CategoryItem;
