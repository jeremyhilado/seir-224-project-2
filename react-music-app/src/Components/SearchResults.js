import React from 'react'
import {Link} from 'react-router-dom'

function SearchResults(props) {

    console.log('SearchResults - props', props)

    const searchResults = props.lastfmSearchData.results.artistmatches.artist.map((artist, i) => {
        return(
            <Link key={i} to={`/artist/${artist.name}`}>
                <li>{artist.name}</li>
            </Link>
        )
    })

    return(
        <div>
            <ol>{searchResults}</ol>
        </div>
    )

}

export default SearchResults