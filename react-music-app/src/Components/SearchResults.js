import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function SearchResults(props) {

    const[mbSearchData, setMbSearchData] = useState({})

    useEffect(() => {
        console.log('SearchResults - useEffect')
        const mbSearchAPI = `https://musicbrainz.org/ws/2/artist/?query=artist:${props.match.params.search}&fmt=json&limit=10`
        const makeApiCall = async() => {
          const res = await fetch(mbSearchAPI)
          const json = await res.json()
          setMbSearchData(json)
        }
        makeApiCall()
      }, [])

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
        return(
            <></>
        )
    }
}

export default SearchResults