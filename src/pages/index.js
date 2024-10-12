import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Header from "../components/header";
import Intro from "../components/index-sections/intro";
import Letter from "../components/index-sections/letter";
import Videos from "../components/index-sections/videos";
import Music from "../components/index-sections/music";
import Moments from "../components/index-sections/moments/moments"
import Media from "../components/index-sections/media/media"

const IndexPage = () => (
  <Layout style={{ backgroundColor: `white` }}>
    <SEO title="Home"/>
    <Intro />
    <Letter />
    <Videos />
    <Music />
    <Moments />
    <Media />
  </Layout>
)

export default IndexPage;
