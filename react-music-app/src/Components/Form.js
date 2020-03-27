import React, {useState} from 'react'

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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter Artist Name'
                    value={artist}
                    onChange={handleChange}
                />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Form