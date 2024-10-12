import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Slides4() {
	const data = useStaticQuery(graphql`
		query Slides4 {
			allFile(
				filter: { relativePath: { regex: "/(slide4_honor)/" } }
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