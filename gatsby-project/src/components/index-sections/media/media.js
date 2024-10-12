import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import SocialMedia from "./socialMedia"
import SocialLinks from "./socialLinks"
import Modal from "../../general/modal"

import * as mediaStyles from "../../../styles/media.module.scss"
import * as galleryStyles from "../../../styles/momentsSection.module.scss"
import * as layoutStyles from "../../../styles/layout.module.scss"

export default function Media() {
  const data = useStaticQuery(graphql`
    query Media {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(media-section)/" } }
        sort: { fields: frontmatter___updated_at, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              subtitle
              updated_at
              video_link
              web_page_link
              additional_images {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
              thumbnail_image {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  `)
  // console.log(data)

  const [displayVideoModal, setDisplayVideoModal] = useState("none")
  const [videoSrc, setVideoSrc] = useState("")

  const [displayAssetsModal, setDisplayAssetsModal] = useState("none")
  const [assetsSrc, setAssetsSrc] = useState("")

  const additional_assets_array = data.allMarkdownRemark.edges.map(e => {
    return e.node.frontmatter.additional_images;
  })

  let additional_assets = []

  for (let i = 0; i < additional_assets_array.length; i++) {
    if (additional_assets_array[i] !== null) {
      const assets = additional_assets_array[i].map(e => (
        <GatsbyImage image={e.childImageSharp.gatsbyImageData} />
      ))
      additional_assets.push(assets)
    } else {
      additional_assets.push([])
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
    <div id="media" className={mediaStyles.container}>
      <h1 className={layoutStyles.sectionTitle}>
        <span>Media</span>
      </h1>
      <div className={mediaStyles.linksContainer}>
        {data.allMarkdownRemark.edges.map((link, index) => (
          <div className={mediaStyles.linkWrapper}>
            <div className={galleryStyles.imageWrapper}>
              <GatsbyImage
                image={
                  link.node.frontmatter.thumbnail_image.childImageSharp
                    .gatsbyImageData
                }
              />
            </div>
            <p className={mediaStyles.linkTitle}>
              {link.node.frontmatter.title}
            </p>
            <p className={mediaStyles.linkText}>
              {link.node.frontmatter.subtitle}
            </p>
            <div className={mediaStyles.actionBtns}>
              {link.node.frontmatter.web_page_link ? (
                <button className={mediaStyles.actionBtn}>
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
                  className={mediaStyles.actionBtn}
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
                  className={mediaStyles.actionBtn}
                >
                  View Details
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
        {data.allMarkdownRemark.edges.length % 2 === 1 ? (
          <div
            className={`${galleryStyles.linkWrapper} ${galleryStyles.linkWrapperFiller}`}
          ></div>
        ) : (
          <></>
        )}
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
      <SocialMedia />
      <SocialLinks />
    </div>
  )
}
