import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Album1Notes() {
	const data = useStaticQuery(graphql`
		query Album1Notes {
			allFile(
				filter: { relativePath: { regex: "/(details-shivoham)/(notes)/" } }
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
            <GatsbyImage image={e.node.childrenImageSharp[0].gatsbyImageData} alt="Shivoham notes" />
        ))
	return (
        images
    );
}