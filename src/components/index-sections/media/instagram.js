import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'


import * as instaStyles from "../../../styles/instagram.module.scss";

export default function instagram() {
    return (
      <div className={instaStyles.container}>
        <div className={instaStyles.wrapper}>
          <StaticImage src="../../../assets/index/instagram/insta1.jpg" alt="instagram image"/>
        </div>
        <div className={instaStyles.wrapper}>
          <StaticImage src="../../../assets/index/instagram/insta2.jpg" alt="instagram image"/>
        </div>
        <div className={instaStyles.wrapper}>
          <StaticImage src="../../../assets/index/instagram/insta3.jpg" alt="instagram image"/>
        </div>
        <div className={instaStyles.wrapper}>
          <StaticImage src="../../../assets/index/instagram/insta4.jpg" alt="instagram image"/>
        </div>
        <div className={instaStyles.wrapper}>
          <StaticImage src="../../../assets/index/instagram/insta5.jpg" alt="instagram image"/>
        </div>
        <div className={instaStyles.wrapper}>
          <StaticImage src="../../../assets/index/instagram/insta6.jpg" alt="instagram image"/>
        </div>
        <div className={instaStyles.wrapper}>
          <StaticImage src="../../../assets/index/instagram/insta7.jpg" alt="instagram image"/>
        </div>
        <div className={instaStyles.wrapper}>
          <StaticImage src="../../../assets/index/instagram/insta8.jpg" alt="instagram image"/>
        </div>
        <div className={`${instaStyles.wrapper} ${instaStyles.lastPhoto}`}>
          <StaticImage src="../../../assets/index/instagram/insta9.jpg" alt="instagram image"/>
        </div>
      </div>
    )
}


