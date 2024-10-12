import React, { useState, useRef } from 'react';

import * as bioStyles from '../../styles/bio.module.scss';
import * as layoutStyles from '../../styles/layout.module.scss';

export default function Bio() {
	const [ accordianState, setAccordianState ] = useState(false);
	const [ setHeight, setHeightState ] = useState(`0px`);
	const content = useRef(null);

	const btnOpen = 'See Full Bio';
	const btnClosed = 'Show Less';

	const toggleAccordion = () => {
		if (accordianState === false) {
			setAccordianState(true);
			setHeightState(`${content.current.scrollHeight}px`);
		}
		else {
			setAccordianState(false);
			setHeightState(`0px`);
		}
	};

	return (
		<div className={bioStyles.container}>
			<button
				className={`${layoutStyles.btn} ${bioStyles.btn}`}
				onClick={() => {
					toggleAccordion();
				}}
			>
				{accordianState ? btnClosed : btnOpen}
			</button>
			<div ref={content} style={{ maxHeight: `${setHeight}` }} className={bioStyles.accordian}>
				<p className={bioStyles.text}>
					Chandrika Tandon is a recognized business leader, Grammy-nominated artist and humanitarian who is
					dedicated to addressing issues in education, the arts, and wellbeing.
				</p>
				<p className={bioStyles.text}>
					A former partner of McKinsey and Company, Ms. Tandon founded and chairs her advisory and investment
					firm, Tandon Capital Associates, focusing on measurable transformation of institutions to achieve
					excellence. Additionally, she oversees the Krishnamurthy Tandon Foundation and Soul Chants Music, a
					nonprofit music label.
				</p>
				<p className={bioStyles.text}>
					Ms. Tandon has been a champion for access to educational opportunities, particularly in STEM related
					fields. At New York University (NYU), she is Vice-Chairman of the Board of Trustees, Chair of the
					President’s Global Council, Chair of the Board of NYU’s Tandon School of Engineering, Trustee of the
					NYU Langone Health System, and a member of the Board of Overseers at the NYU Stern School of
					Business. For her efforts on behalf of higher education, she was inducted as a Harold Acton Fellow
					at NYU and a Sterling Fellow at Yale, where she previously served on the President’s Global Council.
					In addition, she is a member of the President’s Council of the National Academies of Science,
					Engineering and Medicine.
				</p>
				<p className={bioStyles.text}>
					As a composer and vocalist herself, Ms. Tandon is an ardent supporter of the arts. She has produced
					several albums, of which Soul Call was nominated for a Grammy award. Her “limpid, serene voice” (The
					New York Times) has filled major venues around the world. Ms. Tandon staged her most recent album’s
					world premiere, Shivoham - The Quest, at the John F. Kennedy Center for the Performing Arts and is
					currently working on a new album. She has also served on the Board of Directors of Lincoln Center
					for the Performing Arts and the Berklee School of Music’s President’s Council.
				</p>
				<p className={bioStyles.text}>
					In recognition of her work, Ms. Tandon has been profiled on television, radio, and in print,
					including in CNBC’s “The Brave Ones” series. She has received several awards, notably the Gallatin
					Medal, NYU’s highest honor for outstanding contributions to society, the Walter Nichols Medal for
					leadership and integrity, and the Polytechnic Medal, recognizing her involvement in science and
					engineering. She was also the Inaugural Distinguished Alumnus of both the Indian Institute of
					Management, Ahmedabad (IIMA) and Madras Christian College (MCC), her two alma maters. Ms. Tandon is
					a member of the American Academy of Arts and Sciences, a recipient of the Ellis Island Medal of
					Honor, and a member of the Horatio Alger Association of Distinguished Americans.
				</p>
			</div>
		</div>
	);
}
