import React from 'react'

import { FaApple } from "@react-icons/all-files/fa/FaApple"
import { FaAmazon } from "@react-icons/all-files/fa/FaAmazon"
import { FaSoundcloud } from "@react-icons/all-files/fa/FaSoundcloud"
import { FaSpotify } from "@react-icons/all-files/fa/FaSpotify"

import * as SocialLinksStyles from "../../styles/socialLinks.module.scss"

export default function MusicLinks() {
    return (
      <div className={SocialLinksStyles.wrapper} style={{ marginBottom: "0" }}>
        <div className={SocialLinksStyles.linkWrapper}>
          <a
            href="https://open.spotify.com/artist/1ThL7kmKTqUPeid6c8Dqhb?si=JMpE9kNcRTSgwdkvwmDLpQ"
            target="_blank"
            rel="noopener"
          >
            <FaSpotify className={SocialLinksStyles.icon} />
          </a>
        </div>
        <div className={SocialLinksStyles.linkWrapper}>
          <a
            href="https://music.apple.com/us/artist/chandrika-tandon/351891679"
            target="_blank"
            rel="noopener"
          >
            <FaApple className={SocialLinksStyles.icon} />
          </a>
        </div>
        <div className={SocialLinksStyles.linkWrapper}>
          <a
            href="https://soundcloud.com/chandrikatandon"
            target="_blank"
            rel="noopener"
          >
            <FaSoundcloud className={SocialLinksStyles.icon} />
          </a>
        </div>
        <div className={SocialLinksStyles.linkWrapper}>
          <a
            href="https://music.amazon.com/artists/B0035ZTQFW/chandrika-tandon"
            target="_blank"
            rel="noopener"
          >
            <FaAmazon className={SocialLinksStyles.icon} />
          </a>
        </div>
      </div>
    )
}
