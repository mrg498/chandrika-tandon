import React, {useState} from 'react'

import Modal from "../general/modal";

import * as albumButtonsStyles from "../../styles/albumButtons.module.scss";

export default function AlbumButtons(props) {
    
    const [showNotes, setShowNotes] = useState(false);
    const [showVideos, setShowVideos] = useState(false);
    const [showLyrics, setShowLyrics] = useState(false);
    const [showCredits, setShowCredits] = useState(false);

    const toggleNotes = () =>{
        setShowNotes(!showNotes);
    }
    const toggleVideos = () =>{
        setShowVideos(!showVideos);
    }
    const toggleLyrics = () =>{
        setShowLyrics(!showLyrics);
    }
    const toggleCredits = () =>{
        setShowCredits(!showCredits);
    }

    return (
      <>
        <div className={albumButtonsStyles.container}>
          {props.details.notes.length > 0 ? (
            <button onClick={toggleNotes} className={albumButtonsStyles.btn}>
              Notes
            </button>
          ) : (
            <></>
          )}
          {props.details.videos.length > 0 ? (
            <button onClick={toggleVideos} className={albumButtonsStyles.btn}>
              Videos
            </button>
          ) : (
            <></>
          )}
          {props.details.lyrics.length > 0 ? (
            <button onClick={toggleLyrics} className={albumButtonsStyles.btn}>
              Lyrics
            </button>
          ) : (
            <></>
          )}
          {props.details.credits.length > 0 ? (
            <button onClick={toggleCredits} className={albumButtonsStyles.btn}>
              Credits
            </button>
          ) : (
            <></>
          )}
        </div>
        {showNotes ? (
          <Modal
            title="Notes"
            mediaFiles={props.details.notes}
            media=""
            closeModal={toggleNotes}
          />
        ) : (
          <></>
        )}
        {showVideos ? (
          <Modal
            title="Videos"
            mediaFiles={props.details.videos}
            media=""
            closeModal={toggleVideos}
          />
        ) : (
          <></>
        )}
        {showLyrics ? (
          <Modal
            title="Lyrics"
            mediaFiles={props.details.lyrics}
            media=""
            closeModal={toggleLyrics}
          />
        ) : (
          <></>
        )}
        {showCredits ? (
          <Modal
            title="Credits"
            mediaFiles={props.details.credits}
            media=""
            closeModal={toggleCredits}
          />
        ) : (
          <></>
        )}
      </>
    )
}
