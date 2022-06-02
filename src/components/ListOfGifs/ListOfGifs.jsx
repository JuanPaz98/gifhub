import React, {useState, useEffect} from 'react'
import Gif from "../Gif/Gif"
import GetGifs from "../../services/GetGifs"

const ListOfGifs = ({params}) => {
    const {keyWord} = params
    const [gifs, setGifs] = useState([])
    useEffect(function(){
        GetGifs({keyWord}).then(gifs => setGifs(gifs))
    }, [keyWord])
    return gifs.map(({id, url, title}) => 
        <Gif 
            key={id}
            url={url}
            title={title}>
        </Gif>)
}

export default ListOfGifs