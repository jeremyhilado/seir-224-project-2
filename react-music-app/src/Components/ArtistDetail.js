import React, {useState, useEffect} from 'react'

function ArtistDetail(props) {

    const[audiodbArtistData, setAudiodbArtistData] = useState({})
    const[audiodbAlbumsData, setAudiodbAlbumsData] = useState({})
    const[lastfmArtistData, setLastfmArtistData] = useState({})
    const[lastfmTracksData, setLastfmTracksData] = useState({})

    console.log('ArtistDetail - props', props)

    useEffect(() => {
        console.log('ArtistDetail - useEffect')
        const audiodbArtistAPI = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${props.match.params.name}`
        const audiodbAlbumsAPI = `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${props.match.params.name}`
        const lastfmArtistAPI = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${props.match.params.name}&api_key=7405f10b4750ad36052b877fa5b52ed2&format=json`
        const lastfmTracksAPI = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${props.match.params.name}&api_key=7405f10b4750ad36052b877fa5b52ed2&format=json&limit=5`
        const makeApiCall = async() => {
            const res1 = await fetch(audiodbArtistAPI)
            const res2 = await fetch(lastfmArtistAPI)
            const res3 = await fetch(audiodbAlbumsAPI)
            const res4 = await fetch(lastfmTracksAPI)
            const json1 = await res1.json()
            const json2 = await res2.json()
            const json3 = await res3.json()
            const json4 = await res4.json()
            setAudiodbArtistData(json1)
            setLastfmArtistData(json2)
            setAudiodbAlbumsData(json3)
            setLastfmTracksData(json4)
        }
        makeApiCall()
    }, [])

    console.log('ArtistDetail - audiodbArtistData', audiodbArtistData)
    console.log('ArtistDetail - audiodbAlbumsData', audiodbAlbumsData)
    console.log('ArtistDetail - lastfmArtistData', lastfmArtistData)
    console.log('ArtistDetail - lastfmTracksData', lastfmTracksData)
    
    if(audiodbArtistData.artists && lastfmTracksData.toptracks) {

        const topTracks = lastfmTracksData.toptracks.track.map((track, i) => {
            return(
                <li key={i}>{track.name}</li>
            )
        })

        const albums = audiodbAlbumsData.album.map((album, i) => {
            return(
                <div key={i}>
                    <img src={album.strAlbumThumb}></img>
                    <h3>{album.strAlbum}</h3>
                    <h4>{album.intYearReleased}</h4>
                </div>
            )
        })

        const similarArtists = lastfmArtistData.artist.similar.artist.map((artist, i) => {
            return(
                <li key={i}>{artist.name}</li>
            )
        })

        return(
        <div>
            <img src={audiodbArtistData.artists[0].strArtistBanner}></img>
            <div>
                <h1>Biography</h1>
                <p>{audiodbArtistData.artists[0].strBiographyEN}</p>
            </div>
            <div>
                <h1>Top Tracks</h1>
                <ol>{topTracks}</ol>
            </div>
            <div>
                <h1>Albums</h1>
                <div>
                    {albums}
                </div>
            </div>
            <div>
                <h1>Similar Artists</h1>
                <ul>{similarArtists}</ul>
            </div>
        </div>
        )
    } else {
        return(
            <div>
                <h1>No matching artist page. Please go back and try again.</h1>
            </div>
        )
    }
}

export default ArtistDetail