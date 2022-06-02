import "./Gif.css"

const Gift = ({title, url, id}) => {
    return <div className="gif-container">
        <h3 className=" titulo-gif">{title}</h3>
        <img className="img-gif" src={url}></img>  
    </div>
}

export default Gift