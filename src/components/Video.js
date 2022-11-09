import { useState } from "react"; //esta funcion la tengo que importar ya esta escrita en la libreria de react 

const Video = (props) => {// a los parametros le damos el nombre de props
 // let rate = 0; // state del componente es una variable react 

 const[rate, setRate] = useState(0); // esta funcion se llama HOOK  

  const rateVideo = () => {

  //rate++  ya no se modifica el estado del componente asi, se usa el metodo que devuelve HOOK
  if( rate <= 4 ){
    setRate(rate + 1)
  }
  
    console.log(rate)
  }
 

    return(
    <div className='video-container'>
      <div className='video-image'>
        <iframe src={props.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="description">
        <button onClick={props.deleteVideo}>Delete this video</button>
        <h3>{props.title}</h3>
        <span>This video has {rate} stars</span> <button onClick={rateVideo}>Rate this Video</button>
        <p>Upload date:{props.date} </p>
        <h4>Channel's Title:{props.name}</h4>
        <p>More content visit: {props.description}</p>
      </div>
    </div>
    )
}
export default Video;