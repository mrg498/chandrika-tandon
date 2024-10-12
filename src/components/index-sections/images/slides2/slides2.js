import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Slides2() {
	const data = useStaticQuery(graphql`
		query Slides2 {
			allFile(
				filter: { relativePath: { regex: "/(slide2_Music)/" } }
				sort: { order: ASC, fields: name }
			) {
				edges {
					node {
						childrenImageSharp {
							gatsbyImageData
						}
						name
					}
				}
			}
		}
    `);
    
    // console.log(data);
	const images = data.allFile.edges.map(e => (
    <GatsbyImage
      image={e.node.childrenImageSharp[0].gatsbyImageData}
      alt="Shivoham lyrics"
      style={{ zIndex: -1 }}
    />
  ))
	return (
        images
    );
}