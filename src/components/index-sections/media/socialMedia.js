import React from 'react'

import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed"

import Instagram from "./instagram";

import * as socialMediaStyles from "../../../styles/socialMedia.module.scss";

export default function SocialMedia() {
    return (
      <div className={socialMediaStyles.container}>
        <div className={socialMediaStyles.instaWrapper}>
          <p>
            <span className={socialMediaStyles.companyName}>Instagram</span>
          </p>
          <p className={socialMediaStyles.instaLink}>
            <a
              className="instaFollow"
              href="https://www.instagram.com/chandrikatandon/"
            >
              {" "}
              Follow on Instagram{" "}
            </a>
          </p>
          <Instagram />
        </div>
        <div className={socialMediaStyles.wrapper}>
          <p>
            <span className={socialMediaStyles.companyName}>Facebook</span>
          </p>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fchandrikatandon%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="320px"
            height="100%"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
        <div className={socialMediaStyles.wrapper}>
          <p>
            <span className={socialMediaStyles.companyName}>Twitter</span>
          </p>
          {/* <TwitterFollowButton screenName={"chandrikatandon"} /> */}
          <div style={{ height: `7px` }}></div>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="chandrikatandon"
            options={{ height: 472 }}
            noHeader
          />
        </div>
      </div>
    )
}
