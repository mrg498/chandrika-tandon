import React, { useState, useRef, useEffect } from "react"
import {GatsbyImage} from "gatsby-plugin-image";

import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown"
import scrollTo from "gatsby-plugin-smoothscroll"

import Modal from "../general/modal"
import useWindowDimensions from '../general/useWindowDimensions';

import * as galleryStyles from "../../styles/momentsSection.module.scss"
import * as layoutStyles from "../../styles/layout.module.scss"

export default function MomentsSection(props) {
  
  const { windowHeight, windowWidth } = useWindowDimensions()
  
  const [accordianClass, setAccordianClass] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const content = useRef(null)

  const [displayVideoModal, setDisplayVideoModal] = useState("none")
  const [videoSrc, setVideoSrc] = useState("")

  const [displayAssetsModal, setDisplayAssetsModal] = useState("none")
  const [assetsSrc, setAssetsSrc] = useState("")


  const additional_assets_array = props.section.posts.map(e => {
    return e.node.frontmatter.additional_images 
  });

  let additional_assets = []

  for(let i = 0; i < additional_assets_array.length; i++){
    if(additional_assets_array[i] !== null){
      const assets = additional_assets_array[i].map(e => (
        <GatsbyImage image={e.childImageSharp.gatsbyImageData}/>
      ))
      additional_assets.push(assets);
    }
    else{
      additional_assets.push([]);
    }
  }

  // console.log(additional_assets);

  useEffect(() => {
    if (props.open) {
      toggleAccordion()
      if (props.index !== 0) {
        scrollTo(`#section${props.index}`)
      }
    }
  }, [])

  function toggleAccordion() {
    if (accordianClass === "") {
      setAccordianClass("open")
      setHeightState(`${content.current.scrollHeight}px`)
    } else {
      setAccordianClass("")
      setHeightState(`0px`)
    }
  }

  function toggleVideoModal(e) {
    const src = e.target.value
    if (displayVideoModal === "none") {
      setDisplayVideoModal("flex")
      setVideoSrc(src)
    } else {
      setDisplayVideoModal("none")
      setVideoSrc("")
    }
  }

  function toggleAssetsModal(e) {
    const src = e.target.value
    if (displayAssetsModal === "none") {
      setDisplayAssetsModal("flex")
      setAssetsSrc(src)
    } else {
      setDisplayAssetsModal("none")
      setAssetsSrc("")
    }
  }

  return (
    <section className={galleryStyles.section}>
      <p
        id={`section${props.index}`}
        onClick={toggleAccordion}
        className={`${galleryStyles.h2}`}
      >
        {" "}
        {props.section.name}{" "}
        <BsChevronDown
          className={`${galleryStyles.caret} ${
            accordianClass === "open" ? galleryStyles.open : ""
          }`}
        />
      </p>
      <p className={galleryStyles.description}>{props.section.description}</p>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={`${galleryStyles.linksContainer} ${galleryStyles.accordian}`}
      >
        {props.section.posts.map((link, index) => (
          <div className={galleryStyles.linkWrapper}>
            <div className={galleryStyles.imageWrapper}>
              <GatsbyImage
                image={
                  link.node.frontmatter.thumbnail_image.childImageSharp
                    .gatsbyImageData
                }
              />
            </div>
            <p className={galleryStyles.linkTitle}>
              {link.node.frontmatter.title}
            </p>
            {link.node.frontmatter.subtitle ? (
              <p className={galleryStyles.linkText}>
                {link.node.frontmatter.subtitle}
              </p>
            ) : (
              <></>
            )}
            <div className={galleryStyles.actionBtns}>
              {link.node.frontmatter.web_page_link ? (
                <button className={galleryStyles.actionBtn}>
                  <a
                    className={galleryStyles.galleryA}
                    href={link.node.frontmatter.web_page_link}
                    target="_blank"
                  >
                    Learn More
                  </a>
                </button>
              ) : (
                <></>
              )}
              {link.node.frontmatter.video_link ? (
                <button
                  value={link.node.frontmatter.video_link}
                  onClick={toggleVideoModal}
                  className={galleryStyles.actionBtn}
                >
                  Watch Video
                </button>
              ) : (
                <></>
              )}
              {additional_assets[index].length > 0 ? (
                <button
                  value={index}
                  onClick={toggleAssetsModal}
                  className={galleryStyles.actionBtn}
                >
                  See More
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
        {/* {props.section.posts.length % 2 === 1 ||
        props.section.posts.length < 3 ||
        props.section.posts.length % 3 === 2} */}
        {((props.section.posts.length % 3 === 1 ||
          props.section.posts.length % 3 === 2) &&
          windowWidth > 991) ||
        (props.section.posts.length % 2 === 1 && windowWidth <= 991) ? (
          <div
            className={`${galleryStyles.linkWrapper} ${galleryStyles.linkWrapperFiller}`}
          ></div>
        ) : (
          <></>
        )}
        {/* <div className={`${galleryStyles.linkWrapper} ${galleryStyles.linkWrapperFiller}`}></div> */}
      </div>
      <div style={{ display: `${displayVideoModal}` }}>
        <Modal media={videoSrc} closeModal={toggleVideoModal} />
      </div>
      <div style={{ display: `${displayAssetsModal}` }}>
        <Modal
          galleryAssets={additional_assets[assetsSrc]}
          closeModal={toggleAssetsModal}
        />
      </div>
    </section>
  )
}
