import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Album4Notes() {
	const data = useStaticQuery(graphql`
		query Album4Notes {
			allFile(
				filter: { relativePath: { regex: "/(details-soul_mantra)/(notes)/" } }
				sort: { order: ASC, fields: name }
			) {
				edges {
					node {
						childrenImageSharp {
							gatsbyImageData(placeholder: NONE)
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