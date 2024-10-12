import React from "react";
import { Link } from "gatsby"
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { GatsbyImage } from 'gatsby-plugin-image';

import * as slideWrapperStyles from "../../../styles/slideWrapper.module.scss";
import * as videosStyles from "../../../styles/videos.module.scss";
import * as layoutStyles from "../../../styles/layout.module.scss";

export default function SlideWrapper(props) {
    const images = props.slides.images();

	return (
    <div
      className={slideWrapperStyles.rowWrapper}
      style={props.reverseDirection ? { flexDirection: "row-reverse" } : {}}
    >
      <div className={slideWrapperStyles.colWrapper}>
        <h3 className={videosStyles.videoTitle}>{props.slides.title}</h3>
        <p className={videosStyles.videoDescription} style={{textAlign: `left`}}>{props.slides.text}</p>
        {/* <button className={`${layoutStyles.btn} ${videosStyles.btn}`}>
          Learn More
        </button> */}
        {props.slides.index !== 5 ? (
          <Link
            to="/moments"
            style={{ textDecoration: "none", textAlign: "center" }}
            className={`${layoutStyles.btn} ${videosStyles.btn} ${slideWrapperStyles.btn}`}
            state={{ gallerySection: props.slides.index }}
          >
            Learn More
          </Link>
        ) : (
          <Link
            to="/profile"
            style={{ textDecoration: "none", textAlign: "center" }}
            className={`${layoutStyles.btn} ${videosStyles.btn} ${slideWrapperStyles.btn}`}
          >
            Learn More
          </Link>
        )}
      </div>
      <Carousel
        className={slideWrapperStyles.colWrapper}
        swipeable={false}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        stopOnHover={false}
        infiniteLoop={true}
        interval={4000}
      >
        {images}
      </Carousel>
    </div>
  )
}
