import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Fade from "react-reveal/Fade"

import Modal from "../general/modal"

import * as videosStyles from "../../styles/videos.module.scss"
import * as modalMediaStyles from "../../styles/modalMedia.module.scss"
import * as layoutStyles from "../../styles/layout.module.scss"

export default function Videos() {
  const data = useStaticQuery(graphql`
    query Videos {
      allMarkdownRemark(
        sort: { fields: frontmatter___updated_at, order: DESC }
        filter: { fileAbsolutePath: { regex: "/(index)/(videos)/" } }
      ) {
        edges {
          node {
            frontmatter {
              description
              title
              video_link
              updated_at
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  const [loaded, setLoaded] = useState(false)

  const toggleLoad = () => {
    setLoaded(true)
    // console.log(`toggleLoad`);
  }

  setTimeout(function () {
    toggleLoad()
    // console.log(`timeout toggleLoad`);
  }, 500)

  const [showModal, setShowModal] = useState(false)
  const [videoSrc, setVideoSrc] = useState("")
  const [videoTitle, setVideoTitle] = useState("")

  const toggleModal = e => {
	const src = e.target.value
	// console.log("SRC",src);
	const [video, title] = src.split(",");
    if (showModal === false) {
	  setVideoSrc(video)
    setVideoTitle(title)
    setShowModal(true)
    } else {
	  setVideoSrc("")
    setVideoTitle("")
    setShowModal(false)
    }
    
  }

  const videos = data.allMarkdownRemark.edges
  // console.log(videos)

  const desktopPosts = videos.map((p, index) => {
      if(index === 0){
        return (
          <div>
            <div
              key={index}
              className={videosStyles.dRowWrapper}
              style={{ width: "90%" , margin: `5rem auto`}}
            >
              <StaticImage
                src="../../assets/index/videos-section/BraveOnes_Thumbnail_v02.jpg"
                alt="Video image"
                className={videosStyles.dImageWrapper}
                style={{ width: "90%", height: `auto` }}
              />
              {/* <h3 className={videosStyles.videoTitle}>
                {p.node.frontmatter.title}
              </h3> */}
              <p className={videosStyles.videoDescription} style={{margin: `1em 0`, fontSize: "22px"}}>
                {p.node.frontmatter.description}
              </p>
              <button
                value={`${p.node.frontmatter.video_link},${p.node.frontmatter.title}`}
                onClick={toggleModal}
                className={`${layoutStyles.btn} ${videosStyles.btn}`}
              >
                Watch Video
              </button>
            </div>
            {showModal ? (
              <Modal
                closeModal={toggleModal}
                title={videoTitle}
                media={videoSrc}
              />
            ) : (
              <div></div>
            )}
          </div>
        )
      }
      else if(p.node.frontmatter.title === "Unbounded With Kenny Werner"){
        return (
          <div
            className={`${modalMediaStyles.iframeDesktop}`}
            style={{
              maxWidth: `1200px`,
              margin: `0 auto`,
              marginBottom: `32px`,
            }}
          >
            <iframe
              title={p.node.frontmatter.title}
              className={
                loaded
                  ? `${modalMediaStyles.iframeFullSize} ${modalMediaStyles.show}`
                  : `${modalMediaStyles.iframeFullSize}`
              }
              width="1200"
              height="674"
              src={`${p.node.frontmatter.video_link}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={toggleLoad}
            />
          </div>
        )
      }
      else{
        return (
          <div style={{ width: `40%` }}>
            <div
              key={index}
              className={videosStyles.dRowWrapper}
              
            >
              <GatsbyImage
                image={p.node.frontmatter.image.childImageSharp.gatsbyImageData}
                alt="Video image"
                className={videosStyles.dImageWrapper}
              />
              <h3
                className={videosStyles.videoTitle}
                style={{
                  margin: `0.5em 0`,
                  fontSize: `clamp(20px, 2vw, 24px)`,
                }}
              >
                {p.node.frontmatter.title}
              </h3>
              <p className={videosStyles.videoDescription} style={{width: `80%`}}>
                {p.node.frontmatter.description}
              </p>
              <button
                value={`${p.node.frontmatter.video_link},${p.node.frontmatter.title}`}
                onClick={toggleModal}
                className={`${layoutStyles.btn} ${videosStyles.btn}`}
                style={{marginTop: `auto`}}
              >
                Watch Video
              </button>
            </div>
            {showModal ? (
              <Modal
                closeModal={toggleModal}
                title={videoTitle}
                media={videoSrc}
              />
            ) : (
              <div></div>
            )}
          </div>
        )
      }
      
  });

  const mobilePosts = videos.map((p, index) => (
    <div>
        <Fade
          left={index % 2 === 0}
          right={index % 2 === 1}
          distance={"100px"}
          fraction={0.5}
          duration={2000}
        >
          <div
            key={index}
            className={videosStyles.rowWrapper}
            style={index % 2 === 1 ? { flexDirection: "row-reverse" } : {}}
          >
            <div className={videosStyles.colWrapper}>
              <h3 className={videosStyles.videoTitle}>
                {p.node.frontmatter.title}
              </h3>
              <p className={videosStyles.videoDescription}>
                {p.node.frontmatter.description}
              </p>
              <button
                value={`${p.node.frontmatter.video_link},${p.node.frontmatter.title}`}
                onClick={toggleModal}
                className={`${layoutStyles.btn} ${videosStyles.btn}`}
              >
                Watch Video
              </button>
            </div>
            <div className={videosStyles.colWrapper}>
              <GatsbyImage
                image={p.node.frontmatter.image.childImageSharp.gatsbyImageData}
                alt="Video image"
                className={videosStyles.mobileImageWrapper}
              />
            </div>
          </div>
        </Fade>
      {showModal ? (
        <Modal closeModal={toggleModal} title={videoTitle} media={videoSrc} />
      ) : (
        <div></div>
      )}
    </div>
  ))

  return (
    <div className={videosStyles.container}>
      <div className={videosStyles.mobile}>{mobilePosts}</div>
      <div className={videosStyles.desktop}>{desktopPosts}</div>
    </div>
  )
}
