import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import OtherHeader from "../components/otherHeader";
import Intro from "../components/profile-sections/introProfile";
import Bio from "../components/profile-sections/bio";
import Desktop from "../components/profile-sections/desktop";
import ProfileVideos from "../components/profile-sections/profileVideos";

import * as profileStyles from "../styles/profile.module.scss";

export default function Profile() {
  return (
    <Layout style={{ backgroundColor: `white` }}>
      <SEO title="Profile"/>
      <OtherHeader />
      <div className={profileStyles.mobile}>
        <Intro />
        <Bio />
      </div>
      <div className={profileStyles.desktop}>
        <Desktop />
      </div>
      <ProfileVideos/>
    </Layout>
  )
}
