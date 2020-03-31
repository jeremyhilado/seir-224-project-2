import React, {useState, useEffect} from 'react';
import './App.css';
import About from './Components/About'
import ArtistDetail from './Components/ArtistDetail'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Nav from './Components/Nav'
import SearchResults from './Components/SearchResults'
import {Route, Switch} from 'react-router-dom'

function App() {

  const[audiodbArtistData, setAudiodbArtistData] = useState({})
  const[lastfmArtistData, setLastfmArtistData] = useState({})
  const[lastfmSearchData, setLastfmSearchData] = useState({})
  const[artist, setArtist] = useState('')

  useEffect(() => {
    console.log('App - useEffect')
    const audiodbArtistAPI = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
    const lastfmArtistAPI = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=7405f10b4750ad36052b877fa5b52ed2&format=json`
    const lastfmSearchAPI = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=7405f10b4750ad36052b877fa5b52ed2&format=json&limit=10`
    const makeApiCall = async() => {
      const res1 = await fetch(audiodbArtistAPI)
      const res2 = await fetch(lastfmArtistAPI)
      const res3 = await fetch(lastfmSearchAPI)
      const json1 = await res1.json()
      const json2 = await res2.json()
      const json3 = await res3.json()
      setAudiodbArtistData(json1)
      setLastfmArtistData(json2)
      setLastfmSearchData(json3)
    }
    makeApiCall()
  }, [artist])

  console.log('App - audiodbArtistData', audiodbArtistData)
  console.log('App - lastfmArtistData', lastfmArtistData)
  console.log('App - lastfmSearchData', lastfmSearchData)

  const handleSubmit = async artistInput => {
    setArtist(artistInput)
  }

  return (
    <div className="app">
      <header className="nav">
      </header>
      <main>
          <Route 
            exact path='/'
            render={submit => <Form handleSubmit={handleSubmit} />}
          />
          <Route 
            exact path='/artist/:id'
            render={data => <ArtistDetail audiodbArtistData={audiodbArtistData} lastfmArtistData={lastfmArtistData} {...data} />}
          />
          {lastfmSearchData.results && <SearchResults audiodbArtistData={audiodbArtistData} lastfmSearchData={lastfmSearchData} />}
      </main>
    </div>
  );
}

export default App;
