import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import * as introProfileStyles from "../../styles/introProfile.module.scss"

export default function introProfile() {
    return (
      <div className={introProfileStyles.container}>
        <StaticImage
          src="../../assets/profile/profile_image-small.png"
          alt="moments gallery"
          className={introProfileStyles.imageSmall}
          layout="fullWidth"
        />

        {/* <div className={introProfileStyles.imageLarge}>
          <StaticImage
            src="../../assets/profile/profile_image-large.jpg"
            alt="moments gallery"
          />
        </div> */}

        <p className={introProfileStyles.subtitle}>
          <span className={introProfileStyles.title}>Founder and Chair</span>
          Tandon Capital Associates and Krishnamurthy Tandon Foundation
        </p>
      </div>
    )
}
