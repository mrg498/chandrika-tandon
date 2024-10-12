import React, { useState, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import {Link} from 'gatsby';

import Fade from "react-reveal/Fade"
import scrollTo from "gatsby-plugin-smoothscroll";

import letter from "../../assets/index/letter-section/letter.json";

import * as letterStyles from "../../styles/letter.module.scss";
import * as galleryStyles from "../../styles/momentsSection.module.scss"
import * as layoutStyles from "../../styles/layout.module.scss";

export default function Letter() {
	// const [showReadMore, setShowReadMore] = useState(false);
	const [ accordianState, setAccordianState ] = useState(false);
	const [ setHeight, setHeightState ] = useState(`0px`);
    const content = useRef(null);
    
    const btnOpen = "Read More"
    const btnClosed = "Show Less"

	const toggleAccordion = () => {
		if (accordianState === false) {
			setAccordianState(true);
            setHeightState(`${content.current.scrollHeight}px`);
		}
		else {
			setAccordianState(false);
			setHeightState(`0px`);
		}
	};
	return (
    <div className={letterStyles.container}>
      <h1 className={layoutStyles.sectionTitle}>
        <span>From Chandrika</span>
      </h1>
      <div className={`${letterStyles.row}`}>
        <StaticImage
          src="../../assets/index/letter-section/profile.jpg"
          alt="profile picture"
          className={letterStyles.imageWrapper}
          quality={70}
        />
        <div className={letterStyles.teaserText}>
          <p className={`${layoutStyles.p}`}>{letter.teaser}</p>
          <p className={`${layoutStyles.p} ${letterStyles.extendedTeaser}`}>
            {letter.extended}
          </p>
          <p className={`${layoutStyles.p} ${letterStyles.fullPTeaser}`}>
            {letter.p1}
          </p>
          <button
            className={`${layoutStyles.btn} ${letterStyles.btn}`}
            onClick={() => {
              toggleAccordion()
            }}
          >
            {accordianState ? btnClosed : btnOpen}
          </button>
        </div>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={letterStyles.accordian}
      >
        <p className={letterStyles.mobileFirstP}>{letter.p1_mobile_extended}</p>
        <p className={letterStyles.pDesktop}>{letter.p1_extended}</p>
        <p>{letter.p2}</p>
        <p>{letter.p3}</p>
        <p>{letter.p4}</p>
        <p>{letter.p5}</p>
        <p>{letter.p6}</p>
        <p>{letter.p7}</p>
        <div className={letterStyles.signOff}>
          <StaticImage
            src="../../assets/index/letter-section/loveLightLaughter_grey.png"
            alt="tagline"
            className={letterStyles.tagline}
            loading="eager"
          />
          <StaticImage
            src="../../assets/index/letter-section/signature.png"
            alt="signature"
            className={letterStyles.signature}
            loading="eager"
          />
        </div>
        <p className={letterStyles.btnLink}>
          <button
            className={`${galleryStyles.actionBtn} ${letterStyles.btnLink}`}
          >
            <Link className={galleryStyles.galleryA} to="/profile">
              Read Full Bio
            </Link>
          </button>
        </p>
      </div>
    </div>
  )
}
