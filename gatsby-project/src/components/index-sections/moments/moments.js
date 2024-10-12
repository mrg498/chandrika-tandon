import React from "react";

import Fade from "react-reveal/Fade"

import SlideWrapper from "./slideWrapper";

import * as momentsStyles from "../../../styles/moments.module.scss";
import * as layoutStyles from "../../../styles/layout.module.scss";

import BusinessImages from "../images/slides1/slides1";
import MusicImages from "../images/slides2/slides2";
import NYUImages from "../images/slides3/slides3";
import HonorsImages from "../images/slides4/slides4";
import WellbeingImages from "../images/slides5/slides5";
import BeginningImages from "../images/slides6/slides6";

const testimonial1 = {
	images: BusinessImages,
	quote: "novid",
	text: "My vision was to create transformational change and long term impact— it starts at the top.",
	title: "BUSINESS",
	class: "zero",
	index: 0
};

const testimonial2 = {
	images: MusicImages,
	quote: "novid",
	text: "Music is what I am. Everything else is what I do— I found myself through music.",
	title: "MUSIC",
	class: "one",
	index: 1
};

const testimonial3 = {
	images: NYUImages,
	quote: "novid",
	text: "It is a privilege to be able to see young lives blossom, radiating power and impact onto the world.",
	title: "NYU/ TANDON SCHOOL OF ENGINEERING",
	class: "two",
	index: 2
};

const testimonial4 = {
	images: HonorsImages,
	quote: "novid",
	text: " Thank you— Salutations to the many unsung heroes who are grace itself.",
	title: "HONORS",
	class: "three",
	index: 3
};

const testimonial5 = {
	images: WellbeingImages,
	quote: "novid",
	text: " When we find the light within ourselves, we can begin to create a better planet.",
	title: "HUMAN FLOURISHING",
	class: "four",
	index: 4
};

const testimonial6 = {
	images: BeginningImages,
	quote: "novid",
	text: " My start was simple, but I am grateful for the unbounded dreams and my journeymen.",
	title: "IN THE BEGINNING",
	class: "five",
	index: 5
};

export default function moments() {
	return (
    <div id="moments" className={momentsStyles.container}>
      <h1 className={layoutStyles.sectionTitle}>
        <span>Moments</span>
      </h1>
      <div className={momentsStyles.wrapper}>
        <Fade left distance={"100px"} fraction={0.5} duration={2000}>
          <SlideWrapper
            className={momentsStyles.rowWrapper}
            slides={testimonial1}
            reverseDirection={true}
          />
        </Fade>
        <Fade right distance={"100px"} fraction={0.5} duration={2000}>
          <SlideWrapper
            className={momentsStyles.rowWrapper}
            slides={testimonial2}
            reverseDirection={false}
          />
        </Fade>
        <Fade left distance={"100px"} fraction={0.5} duration={2000}>
          <SlideWrapper
            className={momentsStyles.rowWrapper}
            slides={testimonial3}
            reverseDirection={true}
          />
        </Fade>
        <Fade right distance={"100px"} fraction={0.5} duration={2000}>
          <SlideWrapper
            className={momentsStyles.rowWrapper}
            slides={testimonial4}
            reverseDirection={false}
          />
        </Fade>
        <Fade left distance={"100px"} fraction={0.5} duration={2000}>
          <SlideWrapper
            className={momentsStyles.rowWrapper}
            slides={testimonial5}
            reverseDirection={true}
          />
        </Fade>
        <Fade right distance={"100px"} fraction={0.5} duration={2000}>
          <SlideWrapper
            className={momentsStyles.rowWrapper}
            slides={testimonial6}
            reverseDirection={false}
          />
        </Fade>
      </div>
    </div>
  )
}
