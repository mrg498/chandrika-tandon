import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import OtherHeader from "../components/otherHeader"
import Intro from "../components/moments-sections/introMoments"
import MomentsSection from "../components/moments-sections/momentsSection"
import * as momentsPageStyles from "../styles/momentsPage.module.scss";

const Moments = ({ location, data }) => {
  const business_posts = data.business.edges;
  const music_posts = data.music.edges;
  const nyu_posts = data.nyu.edges;
  const honors_posts = data.honors.edges;
  const human_posts = data.human.edges;
  const sections = [
    {
      name: "Business",
      description:
        "My vision is to create transformational and long term change — it starts at the top",
      index: 0,
      posts: business_posts,
    },
    {
      name: "Music",
      description:
        "Music is what I am. Everything else is what I do — I found myself through music",
      index: 1,
      posts: music_posts,
    },
    {
      name: "NYU and Tandon School Of Engineering",
      description:
        "It is a priviledge to see young lives blossom, radiating power and impact into the world",
      index: 2,
      posts: nyu_posts,
    },
    {
      name: "Honors",
      description:
        "Thank you — Salutations to the many unsung heros who are grace itself",
      index: 3,
      posts: honors_posts,
    },
    {
      name: "Human Flourishing",
      description:
        "When we find the light within ourselves, we can begin to create a better planet",
      index: 4,
      posts: human_posts,
    },
  ]
  // console.log(sections);
  let sectionRequest
  if (location?.state?.gallerySection) {
    sectionRequest = location.state.gallerySection
  } else {
    sectionRequest = sections[0].index
  }
  return (
    <Layout style={{ backgroundColor: `white` }}>
      <SEO title="Moments" />
      <OtherHeader />
      <Intro />
      <div className={momentsPageStyles.container}>
        {sections.map(section =>
          section.index === sectionRequest ? (
            <MomentsSection
              index={section.index}
              open={true}
              section={section}
            />
          ) : (
            <MomentsSection
              index={section.index}
              open={false}
              section={section}
            />
          )
        )}
      </div>
    </Layout>
  )
}

export default Moments

export const query = graphql`
  query {
    business: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(gallery_business)/" } }
      sort: { fields: frontmatter___updated_at, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            updated_at
            video_link
            web_page_link
            media_section
            additional_images {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            thumbnail_image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
    music: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(gallery_music)/" } }
      sort: { fields: frontmatter___updated_at, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            updated_at
            video_link
            web_page_link
            media_section
            additional_images {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            thumbnail_image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
    nyu: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(gallery_nyu)/" } }
      sort: { fields: frontmatter___updated_at, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            updated_at
            video_link
            web_page_link
            media_section
            additional_images {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            thumbnail_image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
    honors: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(gallery_honors)/" } }
      sort: { fields: frontmatter___updated_at, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            updated_at
            video_link
            web_page_link
            media_section
            additional_images {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            thumbnail_image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
    human: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(gallery_human)/" } }
      sort: { fields: frontmatter___updated_at, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            updated_at
            video_link
            web_page_link
            media_section
            additional_images {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            thumbnail_image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`
