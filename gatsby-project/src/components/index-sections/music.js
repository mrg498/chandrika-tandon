import React from 'react'

import Fade from "react-reveal/Fade"

import MusicLinks from "./musicLinks"
import Album from "./album";

import * as musicStyles from "../../styles/music.module.scss"
import * as layoutStyles from "../../styles/layout.module.scss"

// shivoham
import Album1Cover from "./images/album1/album1Cover";
import Album1Credits from "./images/album1/credits/album1Credits";
import Album1Notes from "./images/album1/notes/album1Notes";
import Album1Lyrics from "./images/album1/lyrics/album1Lyrics";

import Album2Cover from "./images/album2/album2Cover";
import Album2Credits from "./images/album2/credits/album2Credits";
import Album2Notes from "./images/album2/notes/album2Notes";
import Album2Lyrics from "./images/album2/album2Cover";

import Album3Cover from "./images/album3/album3Cover";
import Album3Credits from "./images/album3/album3Cover";
import Album3Notes from "./images/album3/notes/album3Notes";
import Album3Lyrics from "./images/album3/album3Cover";

import Album4Cover from "./images/album4/album4Cover";
import Album4Credits from "./images/album4/credits/album4Credits";
import Album4Notes from "./images/album4/notes/album4Notes";
import Album4Lyrics from "./images/album4/lyrics/album4Lyrics";   

const data = [
    {
        playlistId: "341015477",
        image: Album1Cover,
        details: {
            title: "Shivoham – The Quest",
            subtitle: "",
            description_mobile: "",
            description: "An oratorio in three movements merging Sanskrit and English text –",
            description_extended:"Yearning, Searching, Connecting",
            credits: [
                Album1Credits
            ],
            hasCredits: true,
            notes: [
                Album1Notes
            ],
            hasNotes: true,
            lyrics: [
                Album1Lyrics
            ],
            hasLyrics: true,
            hasVideos: true,
            videos: [
                {
                    title: `Song of Beginnings`,
                    src: `https://www.youtube.com/embed/2QHBCCgC6Vw`
                },
                {
                    title: `Chandrika Tandon Introduces Shivoham-The Quest`,
                    src: `https://www.youtube.com/embed/jaruYKn6rCs`
                },
                {
                    title: `Shivoham Rehearsal`,
                    src: `https://www.youtube.com/embed/LWzn-misakY`
                },
                {
                    title: `Shivoham Choral Recording`,
                    src: `https://www.youtube.com/embed/qaHzxn6qZDE`
                },
                {
                    title: `Abbey Road – Musicians on Shivoham`,
                    src: `https://www.youtube.com/embed/f4ZC1zHEXwY`
                }
            ]  
        }
    },
    {
        playlistId: "3394862",
        image: Album2Cover,
        details: {
            title: "Soul March",
            subtitle: "",
            description_mobile: "",
            description: "Raghupati Raghava Raja Ram",
            description_extended:"A tribute to Mahatma Gandhi's Salt March",
            credits: [
                Album2Credits
            ],
            hasCredits: true,
            notes: [
                Album2Notes
            ],
            hasNotes: true,
            lyrics: [
                
            ],
            hasLyrics: false,
            videos: [
                {
                    title: `Raghupati Raghava Raja Ram – Reprise | Chandrika Tandon | Official Video`,
                    src: `https://www.youtube.com/embed/yjmkutJ6C4Q`
                }
            ]
        }
    },
    {
        playlistId: "2711780",
        image: Album3Cover,
        details: {
            title: "Soul Call",
            subtitle: "GRAMMY Nominated",
            description: "The powerful healing mantra: Om Namo Narayanaya in eight ragas",
            description_extended:"",
            credits: [
                
            ],
            notes: [
                Album3Notes
            ],
            lyrics: [
                
            ],
            videos: [
                {
                    title: `Basanth Video`,
                    src: `https://www.youtube.com/embed/dh59fgrfUkQ`
                },
                {
                    title: `Malkauns' - from Soul Call`,
                    src: `https://www.youtube.com/embed/mKoKeEtHSpc`
                }
            ]
        }
    },
    {
        playlistId: "24243596",
        image: Album4Cover,
        details: {
            title: "Soul Mantra",
            subtitle: "",
            description: "Om namah shivaya in nine ragas",
            description_extended:"",
            credits: [
                Album4Credits
            ],
            notes: [
                Album4Notes
            ],
            lyrics: [
                Album4Lyrics
            ],
            videos: [

            ]
        }
    }
]


export default function Music() {
    const albums = data.map((p, index) => (
        <Album key={index} album={p} index={index} className={musicStyles.rowWrapper} />
    ))

    return (
      <div id="music" className={musicStyles.container}>
        <Fade bottom distance={"20px"} fraction={0.2} duration={1000}>
          <h1 className={layoutStyles.sectionTitle}>
            <span>Music</span>
          </h1>

          <MusicLinks />
        </Fade>
        <div className={musicStyles.wrapper}>{albums}</div>
      </div>
    )
}
