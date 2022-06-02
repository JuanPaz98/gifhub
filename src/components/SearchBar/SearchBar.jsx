import {useState} from "react";
import {useLocation} from "wouter"
import "./SearchBar.css"
import ListOfGifs from "../ListOfGifs/ListOfGifs"

const SearchBar = () =>{
    const [keyWord, setKeyword] = useState("")
    const [actualLocation, newLocation] = useLocation()

    const inputChange = (e) => {
        setKeyword(e.target.value)}
    
        const enviarDatos = (e) => {
        e.preventDefault(); 
        newLocation(`/search/${keyWord}`)
        }
    
    return(
        <form onSubmit={enviarDatos} className="search-bar">
            <input className="search-input"
            type="text" 
            placeholder="Busca tus Gif favoritos" 
            onChange={inputChange}></input>          
            <button className="search-btn">🔍</button>
        </form>
    )
}
export default SearchBar;