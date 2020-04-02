import React, {useState, useEffect} from 'react';
import './App.css';
import About from './Components/About'
import ArtistDetail from './Components/ArtistDetail'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Nav from './Components/Nav'
import SearchResults from './Components/SearchResults'
import {Route, Link, Switch} from 'react-router-dom'

function App() {

  // const[artist, setArtist] = useState('')

  // const handleSubmit = async artistInput => {
  //   setArtist(artistInput)
  // }

  return (
    <div className="app">
      <header className="nav">
        <Nav />  
      </header>
      <main>
        <Route 
          exact path='/'
          render={submit => <Form />}
        />
        <Route path='/about' component={About} />
        <Route 
          exact path='/artist/:name'
          render={data => <ArtistDetail {...data} />}
        />
        <Route
          path='/searchresults/:search'
          render={props => <SearchResults{...props} />}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
