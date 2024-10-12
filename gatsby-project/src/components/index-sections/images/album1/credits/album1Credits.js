import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Album1Credits() {
	const data = useStaticQuery(graphql`
		query Album1Credits {
			allFile(
				filter: { relativePath: { regex: "/(details-shivoham)/(credits)/" } }
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