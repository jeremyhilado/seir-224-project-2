import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function SearchResults(props) {

    console.log('SearchResults - props', props)

    const[lastfmSearchData, setLastfmSearchData] = useState({})
    const[mbSearchData, setMbSearchData] = useState({})

    useEffect(() => {
        console.log('SearchResults - useEffect')
        const lastfmSearchAPI = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${props.match.params.search}&api_key=7405f10b4750ad36052b877fa5b52ed2&format=json&limit=10`
        const mbSearchAPI = `http://musicbrainz.org/ws/2/artist/?query=artist:${props.match.params.search}&fmt=json&limit=10`
        const makeApiCall = async() => {
          const res1 = await fetch(lastfmSearchAPI)
          const res2 = await fetch(mbSearchAPI)
          const json1 = await res1.json()
          const json2 = await res2.json()
          setLastfmSearchData(json1)
          setMbSearchData(json2)
        }
        makeApiCall()
      }, [])

    console.log('SearchResults - lastfmSearchData', lastfmSearchData)
    console.log('SearchResults - mbSearchData', mbSearchData)

    // if(lastfmSearchData.results) {
    //     const searchResults = lastfmSearchData.results.artistmatches.artist.map((artist, i) => {
    //     return(
    //         <Link key={i} to={`/artist/${artist.name}`}>
    //             <li>{artist.name}</li>
    //         </Link>
    //     )
    // })

    if(mbSearchData.artists) {
        const searchResults = mbSearchData.artists.map((artist, i) => {
        return(
            <Link key={i} to={`/artist/${artist.name}`}>
                <li>{artist.name}</li>
            </Link>
        )
    })



    return(
        <div className='search-results'>
            <h1>Search Results:</h1>
            <ol>{searchResults}</ol>
        </div>
    )

    } else {
        return <></>
    }
}

export default SearchResults