import React from 'react';
import './App.css';
import About from './Components/About'
import ArtistDetail from './Components/ArtistDetail'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Nav from './Components/Nav'
import SearchResults from './Components/SearchResults'
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {

  return (
    <div className="app">
      <header className="nav">
        <Nav />  
      </header>
      <main>
        <Switch>
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
        <Redirect to='/' />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
