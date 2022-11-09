
import Video from "../components/Video"
import { useEffect, useState } from "react"
import { data } from "../utils/data"
import { customFetch } from "../utils/customFetch"

const Videos = () =>{
  const [datos, setDatos] = useState ([])

  const deleteVideo =(id) => {
    let nuevoArray = datos.filter(item => item.id !== id)
    setDatos(nuevoArray)
  }

  //componentDidMount
  useEffect(() => {
    customFetch(2000, data)
    .then(response => setDatos(response))
    .catch(err => console.log(err))
  }, [])

    return(
      <>
        {
          datos.map(item => (
            <Video
            key= {item.id}
            video= {item.video}
            title= {item.title}
            date= {item.date}
            name= {item.artist}
            description= {item.description}
            deleteVideo= {() =>deleteVideo(item.id)} />
            
          ))
        }
      </>
    )
}
export default Videos;