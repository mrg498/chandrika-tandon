import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Album1Cover() {
	const data = useStaticQuery(graphql`
		query album1Cover {
			file(relativePath: { eq: "index/music-section/shivoham/album1.jpg" }) {
				id
				childrenImageSharp {
					gatsbyImageData
				}
			}
		}
    `);
    // console.log(data);
	return (
        <GatsbyImage style={{zIndex: -1}} image={data.file.childrenImageSharp[0].gatsbyImageData} alt="Cover Art"/>
    );
}
