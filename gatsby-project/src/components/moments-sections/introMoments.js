import React from 'react'

import * as layoutStyles from "../../styles/layout.module.scss";
import * as introMomentsStyles from "../../styles/introMoments.module.scss"
import { StaticImage } from 'gatsby-plugin-image';

export default function Intro() {
    return (
      <div className={introMomentsStyles.container}>
        <div className={introMomentsStyles.mobile}>
          <StaticImage
            src="../../assets/moments/moment-gallery.png"
            alt="moments gallery"
            className={introMomentsStyles.image}
            layout="fullWidth"
          />
        </div>
        <div className={introMomentsStyles.desktop}>
          <StaticImage
            src="../../assets/moments/Gallery_image_large.png"
            alt="moments gallery"
            className={introMomentsStyles.image}
            layout="fullWidth"
            imgStyle={{ objectPosition: `0 12%` }}
          />
        </div>
        <h1
          className={`${layoutStyles.sectionTitle} ${introMomentsStyles.sectionTitle}`}
        >
          <span>Moments</span>
        </h1>
      </div>
    )
}
