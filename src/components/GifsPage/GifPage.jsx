import ListOfGifs  from "../ListOfGifs/ListOfGifs"
import SearchBar from "../SearchBar/SearchBar"
import getGifs from "../../services/GetGifs"

const GifPage = () =>{
    return (
        <>
            <SearchBar/>
            <ListOfGifs/>
        
        </>
    )
}

export default GifPage