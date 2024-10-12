import React, { useState, useRef } from "react";

import AlbumButtons from "./albumButtons";

import * as albumStyles from "../../styles/album.module.scss";
import * as layoutStyles from "../../styles/layout.module.scss";

export default function Album(props) {
	const [ accordianState, setAccordianState ] = useState(false);
    const [ setHeight, setHeightState ] = useState("0px");
	const content = useRef(null);
	
	const btnOpen = "Listen"
    const btnClosed = "Hide"

    function toggleAccordion() {
		if (!accordianState) {
			setAccordianState(true);
			setHeightState(`${content.current.scrollHeight}px`);
		}
		else {
			setAccordianState(false);
			setHeightState(`0px`);
		}
	}
	return (
    <div
      className={albumStyles.rowWrapper}
      style={
        props.index % 2 === 1
          ? { flexDirection: "row-reverse",
      }: {}}
    >
      <div className={albumStyles.colWrapper}>
        <h3 className={albumStyles.videoTitle}>{props.album.details.title}</h3>
        <p className={albumStyles.subtitle}>{props.album.details.subtitle}</p>
        <p className={albumStyles.mobileDescription}>
          {props.album.details.description_mobile}
        </p>
        <p className={albumStyles.albumDescription}>
          {props.album.details.description}
        </p>
        <p className={albumStyles.albumDescription}>
          {props.album.details.description_extended}
        </p>
        <button
          onClick={toggleAccordion}
          className={`${layoutStyles.btn} ${albumStyles.btn}`}
        >
          {accordianState ? btnClosed : btnOpen}
        </button>
      </div>
      <div className={albumStyles.colWrapper}>
        {props.album.image()}
        <div
          className={albumStyles.btnsWrapper}
          style={accordianState ? { opacity: "0" } : { display: "1" }}
        >
          <AlbumButtons details={props.album.details} />
        </div>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={albumStyles.accordian}
      >
        <iframe
          width="100%"
          height={450}
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${props.album.playlistId}&color=%23c4c1ba&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
        />
      </div>
    </div>
  )
}
