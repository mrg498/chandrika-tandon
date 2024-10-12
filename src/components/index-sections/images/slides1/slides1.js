import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Slides1() {
	const data = useStaticQuery(graphql`
		query Slides1 {
			allFile(
				filter: { relativePath: { regex: "/(slide1_Business)/" } }
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
            <GatsbyImage image={e.node.childrenImageSharp[0].gatsbyImageData} alt="Shivoham lyrics" />
        ))
	return (
        images
    );
}