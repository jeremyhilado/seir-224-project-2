import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Form(props) {

    console.log('Form - props', props)

    const[artist, setArtist] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        props.handleSubmit(artist)
        setArtist('')
    }

    const handleChange = e => {
        setArtist(e.target.value)
    }

    return(
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter Artist Name'
                    value={artist}
                    onChange={handleChange}
                />
                <Link to={`/searchresults/${artist}`}>
                <button>Search</button>
                </Link>
            </form>
        </div>
    )
}

export default Form