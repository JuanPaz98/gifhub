import React, {useState} from 'react';
import {useLocation} from "wouter"
import "./Home.css"
import SearchBar from "../SearchBar/SearchBar"
import icon2 from "../../icon2.png"


const Home = () =>{
    
    return(
        <>
            <div className="gifhub-container">
                <img src={icon2} width="150px"></img>
                <h2 className="title">Bienvenido</h2>
                <p>Aquí podras encontrar los mejores Gifs... </p>
                
            </div>        
        </>
    )

  }

  export default Home