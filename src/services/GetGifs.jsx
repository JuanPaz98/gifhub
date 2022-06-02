const apiKey = "GX5lMD3CJE7OufzEuh9eIHnkQT19kud9"

function getGifs({keyWord = "goku"} = {}){
  const URL =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyWord}&limit=50&offset=0&rating=g&lang=en`
    return fetch(URL)
        .then(res => res.json())
        .then(response =>{
        const {data} = response
        console.log(data)
        const gifs = data.map(personaje => {
          const {images, title, id} = personaje
          const {url} = images.downsized_medium
          return {title, id, url}
        }
          )
        return(gifs)
        })
}

export default getGifs