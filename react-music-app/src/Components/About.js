import React from 'react'

function About() {
    return(
        <div className='about-container'>
            <p>
                Hi, I'm Jeremy Hilado, an aspiring software engineer, and this is an app 
                <br />
                I created using the React framework. I created this app for my unit 2 project
                <br />
                for General Assembly's Software Engineering Immersive Course. It is a music 
                <br />
                themed app where users can search for an artist and then find additional info 
                <br />
                related to that artist such as top tracks, albums, and similar artists. It is
                <br />
                integrated with the lastfm, MusicBrainz, and AudioDB APIs to generate the content.
            </p>
        </div>
    )
}

export default About