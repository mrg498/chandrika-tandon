import React from 'react'
// import {
//   FaTwitter,
//   FaFacebookSquare,
//   FaYoutube,
//   FaInstagram,
//   FaSpotify,
// } from "@react-icons/all-files/fa"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaSpotify } from "@react-icons/all-files/fa/FaSpotify"

import * as SocialLinksStyles from "../../../styles/socialLinks.module.scss";

export default function socialLinks() {
    return (
      <div className={SocialLinksStyles.container}>
        <p className={SocialLinksStyles.signoff}>
          Follow Us On Social Media
        </p>
        <div className={SocialLinksStyles.wrapper}>
          <div className={SocialLinksStyles.linkWrapper}>
            <a
              href="https://twitter.com/chandrikatandon"
              target="_blank"
              rel="noopener"
            >
              <FaTwitter className={SocialLinksStyles.icon} />
            </a>
          </div>
          <div className={SocialLinksStyles.linkWrapper}>
            <a
              href="https://www.facebook.com/chandrikatandon/"
              target="_blank"
              rel="noopener"
            >
              <FaFacebookSquare className={SocialLinksStyles.icon} />
            </a>
          </div>
          <div className={SocialLinksStyles.linkWrapper}>
            <a
              href="https://www.youtube.com/c/ChandrikaTandon"
              target="_blank"
              rel="noopener"
            >
              <FaYoutube className={SocialLinksStyles.icon} />
            </a>
          </div>
          <div className={SocialLinksStyles.linkWrapper}>
            <a
              href="https://www.instagram.com/chandrikatandon/"
              target="_blank"
              rel="noopener"
            >
              <FaInstagram className={SocialLinksStyles.icon} />
            </a>
          </div>
          {/* <div className={SocialLinksStyles.linkWrapper}>
            <a
              href="https://smarturl.it/shivohamspotify"
              target="_blank"
              rel="noopener"
            >
              <FaSpotify className={SocialLinksStyles.icon} />
            </a>
          </div> */}
        </div>
      </div>
    )
}
