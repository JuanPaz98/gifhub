
import './App.css';
import React from 'react';
import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import Home from './components/Home/Home'
import GifPage from './components/GifsPage/GifPage'
import SearchBar from './components/SearchBar/SearchBar';
import { Route, Link } from 'wouter';

function App() {

  return (
    <div className="App">

      <section className="App-content">
        {/* <Link to="/"><img src={backIcon}></img></Link> */}
        <Route 
            path="/"
            component = {Home}>
        </Route>          
        <SearchBar />
        <Route 
            path="/search/:keyWord"
            component ={ListOfGifs}>
        </Route>          
      </section>
    </div> 
  ); 
}

export default App;
