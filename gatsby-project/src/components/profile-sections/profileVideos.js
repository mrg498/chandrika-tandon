import React, {useState} from 'react'
import {StaticImage} from "gatsby-plugin-image"

import Modal from "../general/modal";

import * as profileVideosStyles from "../../styles/profileVideos.module.scss"
import * as mediaStyles from "../../styles/media.module.scss";

export default function ProfileVideos() {
    const [showModal, setShowModal] = useState(false)
    const [videoSrc, setVideoSrc] = useState("")
    const [videoTitle, setVideoTitle] = useState("")

    const toggleModal = e => {
      const src = e.target.value
      // console.log("SRC",src);
      let video, title;
      if(src){
        [video, title] = src.split(",");
      }
      
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
    return (
      <div className={profileVideosStyles.container}>
        <div className={profileVideosStyles.wrapper}>
          <StaticImage
            src="../../assets/profile/vid1.jpg"
            alt="video thumbnail"
          />
          <div className={profileVideosStyles.textWrapper}>
            <p className={profileVideosStyles.title}>
              Horatio Alger Award | Introduction
            </p>
            <button
              onClick={toggleModal}
              value="https://www.youtube.com/embed/q2hfo2JnH9Q,Horatio Alger Award | Introduction"
              className={mediaStyles.actionBtn}
            >
              Watch Video
            </button>
          </div>
        </div>
        <div className={profileVideosStyles.wrapper}>
          <StaticImage
            src="../../assets/profile/vid2.jpg"
            alt="video thumbnail"
          />
          <div className={profileVideosStyles.textWrapper}>
            <p className={profileVideosStyles.title}>
              Chandrika Introduces Shivoham — The Quest
            </p>
            <button
              onClick={toggleModal}
              value="https://www.youtube.com/embed/jaruYKn6rCs,Chandrika Introduces Shivoham — The Quest"
              className={mediaStyles.actionBtn}
            >
              Watch Video
            </button>
          </div>
        </div>
        <div className={profileVideosStyles.wrapper}>
          <StaticImage
            src="../../assets/profile/vid3.jpg"
            alt="video thumbnail"
          />
          <div className={profileVideosStyles.textWrapper}>
            <p className={profileVideosStyles.title}>
              WHEELS Foundation Award | Introduction
            </p>
            <button
              onClick={toggleModal}
              value="https://www.youtube.com/embed/GqdbcjELRgU,WHEELS Foundation Award | Introduction"
              className={mediaStyles.actionBtn}
            >
              Watch Video
            </button>
          </div>
        </div>
        {showModal ? (
          <Modal closeModal={toggleModal} title={videoTitle} media={videoSrc} />
        ) : (
          <div></div>
        )}
      </div>
    )
}
