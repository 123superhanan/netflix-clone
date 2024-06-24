import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_arrow from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate()

  const [apiData , setApiData]= useState({
    name: '',
    key:'',
    published_at:'',
    typeof: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODg0N2NhOWU2YTc4NDI0NmM5ZWIyZDQ2YmFkMGRmOCIsInN1YiI6IjY2NmMwZTk0MDA1YjliYzJmMTcwZGZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9EKeh_VI-QUvUTWX9IJzi2wRJHtQqkjiIl-sN8StDNs'
    }
  };
  
  useEffect( () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  



  return (
    <div className='Player'>
      <img src={back_arrow} alt="--back-arrrow-play-page" onClick={() =>{navigate(-1)}} />
      <iframe width="90%" height="90%" src={`http://www.youtube.com/embed/${apiData.key}`} title='Trailer' frameBorder="0" allowFullScreen ></iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
    
  )
}

export default Player
