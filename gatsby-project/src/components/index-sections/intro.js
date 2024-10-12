import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import FixedHeader from "../fixedHeader"
import Header from "../header";

import * as layoutStyles from "../../styles/layout.module.scss";
import * as introStyles from "../../styles/intro.module.scss";

export default function Intro() {
	// const [ imageLoaded, setImageLoaded ] = useState(false);

	// const hideLoadingScreen = () => {
	// 	setImageLoaded(true);
	// };

	return (
    <div className={`${introStyles.container}`}>
      <div className={introStyles.imageWrapper}>
        <StaticImage
          src="../../assets/index/intro-section/introImage3.jpg"
          alt="intro image"
          layout="fullWidth"
          className={introStyles.image1Wrapper}
          // imgClassName={introStyles.image1}
          imgStyle={{ objectPosition: `30% 80%` }}
          quality={80}
          loading="eager"
          backgroundColor="transparent"
          placeholder="none"
        />
      </div>
      <div className={introStyles.wrapper}>
        <h1 className={introStyles.title}>
          <span>Chandrika</span>
          <span>Tandon</span>
        </h1>
        <StaticImage
          src="../../assets/index/intro-section/loveLightLaughter.png"
          alt="Love Light Laughter"
          className={introStyles.lllWrapper}
          backgroundColor="transparent"
          placeholder="none"
          loading="eager"
        />
      </div>
      <FixedHeader />
      <Header />
    </div>
  )
}
