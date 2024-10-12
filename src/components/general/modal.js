import React from "react";

import ModalMedia from "./modalMedia";

import * as modalStyles from "../../styles/modal.module.scss";
import * as layoutStyles from "../../styles/layout.module.scss";

export default function modal(props) {
  const blockClick = (e) => {
    e.stopPropagation();
  }

	return (
    <div className={modalStyles.container} onClick={props.closeModal}>
      <div className={modalStyles.wrapper} onClick={blockClick}>
        <div className={modalStyles.sticky}>
          <button
            onClick={props.closeModal}
            className={`${modalStyles.btn} ${layoutStyles.btn}`}
          >
            Close
          </button>
        </div>
        <h3 className={modalStyles.title}>{props.title}</h3>
        <ModalMedia
          media={props.media}
          mediaFiles={props.mediaFiles}
          galleryAssets={props.galleryAssets}
        />
      </div>
    </div>
  )
}
