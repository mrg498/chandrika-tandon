import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Album3Cover() {
	const data = useStaticQuery(graphql`
		query album3Cover {
			file(relativePath: { eq: "index/music-section/soul-call/album3.jpg" }) {
				id
				childrenImageSharp {
					gatsbyImageData
				}
			}
		}
    `);
    // console.log(data);
	return (
    <GatsbyImage
      style={{ zIndex: -1 }}
      image={data.file.childrenImageSharp[0].gatsbyImageData}
      alt="Cover Art"
    />
  )
}