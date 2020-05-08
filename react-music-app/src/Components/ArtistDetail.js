import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function ArtistDetail(props) {

    const[audiodbArtistData, setAudiodbArtistData] = useState({})
    const[audiodbAlbumsData, setAudiodbAlbumsData] = useState({})
    const[lastfmArtistData, setLastfmArtistData] = useState({})
    const[lastfmTracksData, setLastfmTracksData] = useState({})

    useEffect(() => {
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
    }, [props.match.params.name])
    
    if(audiodbArtistData.artists && lastfmTracksData.toptracks && audiodbAlbumsData.album) {

        const topTracks = lastfmTracksData.toptracks.track.map((track, i) => {
            return(
                <li key={i}>{track.name}</li>
            )
        })

        const albums = audiodbAlbumsData.album.map((album, i) => {
            return(
                <div key={i} className='album'>
                    <img src={album.strAlbumThumb ? album.strAlbumThumb : 'https://res.cloudinary.com/do6tcpizk/image/upload/c_scale,h_700,w_700/v1585845946/Project%202%20React%20App/product_image_not_available_otx8jx.png'}></img>
                    <h3>{album.strAlbum}</h3>
                    <h5>{(album.intYearReleased == 0) ? 'N/A' : album.intYearReleased}</h5>
                </div>
            )
        })

        const similarArtists = lastfmArtistData.artist.similar.artist.map((artist, i) => {
            return(
                <Link key={i} to={`/artist/${artist.name}`}>
                    <li>{artist.name}</li>
                </Link>
            )

        })

        console.log('ArtistDetail - Similar Artist - props', props)

        return(
        <div className='detail-container'>
            <img className='banner' src={audiodbArtistData.artists[0].strArtistBanner}></img>
            <div>{audiodbArtistData.artists[0].strArtistBanner ? <></> : <h1>{audiodbArtistData.artists[0].strArtist}</h1>}</div>
            <div>
                <h1>Biography</h1>
                <p>{audiodbArtistData.artists[0].strBiographyEN ? audiodbArtistData.artists[0].strBiographyEN : 'Biography not available.'}</p>
            </div>
            <div>
                <h1>Top Tracks</h1>
                <ol>{topTracks}</ol>
            </div>
            <div>
                <h1>Albums</h1>
                <div className='album-container'>
                    {albums}
                </div>
            </div>
            <div>
                <h1>Similar Artists</h1>
                <ul>{similarArtists}</ul>
            </div>
        </div>
        )
    } else if ((!audiodbArtistData.artists || !audiodbAlbumsData.album) && lastfmTracksData.toptracks) {
        return(
            <div className='no-match-container'>
                <h1 className='no-match'>No matching artist page. Please go back and try again.</h1>
            </div>
        )
    } else if (lastfmArtistData.error) {
        return(
            <div className='no-match-container'>
                <h1 className='no-match'>No matching artist page. Please go back and try again.</h1>
            </div>
        )
    } else {
        return <></>
    }
}

export default ArtistDetail