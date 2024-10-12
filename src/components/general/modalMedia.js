import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import * as modalMediaStyles from "../../styles/modalMedia.module.scss"

export default function ModalMedia(props) {
  const [loaded, setLoaded] = useState(false)

  const toggleLoad = () => {
    setLoaded(true)
    // console.log(`toggleLoad`);
  }

  setTimeout(function () {
    toggleLoad()
    // console.log(`timeout toggleLoad`);
  }, 500)

  let iframe
  if (props.media?.includes("youtu")) {
    iframe = (
      <>
        <div
          className={`${modalMediaStyles.iframeContainer}`}
          style={{ margin: `0 auto`, marginBottom: `32px` }}
        >
          <iframe
            title={`${props.title}-mobile`}
            className={
              loaded
                ? `${modalMediaStyles.iframeResponsive} ${modalMediaStyles.show}`
                : `${modalMediaStyles.iframeResponsive}`
            }
            src={props.media}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={toggleLoad}
          />
        </div>
        <div
          className={`${modalMediaStyles.iframeDesktop}`}
          style={{ maxWidth: `840px`, margin: `0 auto`, marginBottom: `32px` }}
        >
          <iframe
            title={props.title}
            className={
              loaded
                ? `${modalMediaStyles.iframeFullSize} ${modalMediaStyles.show}`
                : `${modalMediaStyles.iframeFullSize}`
            }
            width="840"
            height="472"
            src={props.media}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={toggleLoad}
          />
        </div>
      </>
    )
  } else if (props.mediaFiles) {
    if (props.mediaFiles[0]?.src?.includes("youtu")) {
      iframe = props.mediaFiles.map(video => (
        <>
          <div
            className={`${modalMediaStyles.iframeContainer}`}
            style={{ margin: `0 auto`, marginBottom: `32px` }}
          >
            <iframe
              title={`${video.title}-mobile`}
              className={
                loaded
                  ? `${modalMediaStyles.iframeResponsive} ${modalMediaStyles.show}`
                  : `${modalMediaStyles.iframeResponsive}`
              }
              src={video.src}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={toggleLoad}
            />
          </div>
          <div
            className={`${modalMediaStyles.iframeDesktop}`}
            style={{
              maxWidth: `840px`,
              margin: `0 auto`,
              marginBottom: `32px`,
            }}
          >
            <iframe
              title={video.title}
              className={
                loaded
                  ? `${modalMediaStyles.iframeFullSize} ${modalMediaStyles.show}`
                  : `${modalMediaStyles.iframeFullSize}`
              }
              width="840"
              height="472"
              src={video.src}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={toggleLoad}
            />
          </div>
        </>
      ))
    } else if (props.mediaFiles?.length > 0) {
    //   console.log(props.mediaFiles)
      iframe = props.mediaFiles?.map(e => (
        <div
          style={{
            width: `80%`,
            maxWidth: `1000px`,
            margin: `0 auto`,
            marginBottom: `16px`,
          }}
        >
          {e()}
        </div>
      ))
    } else {
      ;<div>
        <p style={{ textAlign: "center" }}>Not content available</p>
      </div>
    }
  } else if (props.galleryAssets) {
    iframe = props.galleryAssets?.map(e => (
      <div
        style={{
          width: `80%`,
          maxWidth: `1000px`,
          margin: `0 auto`,
          marginBottom: `16px`,
        }}
      >
        {e}
      </div>
    ))
  } else {
    iframe = (
      <div>
        <p style={{ textAlign: "center" }}>Not content available</p>
      </div>
    )
  }

  return <>{iframe}</>
}
