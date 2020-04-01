import React, {useState, useEffect} from 'react'

function ArtistDetail(props) {

    const[audiodbArtistData, setAudiodbArtistData] = useState({})
    const[audiodbAlbumsData, setAudiodbAlbumsData] = useState({})
    const[lastfmArtistData, setLastfmArtistData] = useState({})

    console.log('ArtistDetail - props', props)

    useEffect(() => {
        console.log('ArtistDetail - useEffect')
        const audiodbArtistAPI = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${props.match.params.name}`
        const lastfmArtistAPI = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${props.match.params.name}&api_key=7405f10b4750ad36052b877fa5b52ed2&format=json`
        const audiodbAlbumsAPI = `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${props.match.params.name}`
        const makeApiCall = async() => {
            const res1 = await fetch(audiodbArtistAPI)
            const res2 = await fetch(lastfmArtistAPI)
            const res3 = await fetch(audiodbAlbumsAPI)
            const json1 = await res1.json()
            const json2 = await res2.json()
            const json3 = await res3.json()
            setAudiodbArtistData(json1)
            setLastfmArtistData(json2)
            setAudiodbAlbumsData(json3)
        }
        makeApiCall()
    }, [])

    console.log('ArtistDetail - audiodbArtistData', audiodbArtistData)
    console.log('ArtistDetail - audiodbAlbumsData', audiodbAlbumsData)
    console.log('ArtistDetail - lastfmArtistData', lastfmArtistData)

    return(
        <div>
            Artist Detail
        </div>
    )
}

export default ArtistDetail