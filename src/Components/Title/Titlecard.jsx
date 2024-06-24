import React, { useEffect, useRef, useState } from 'react'
import "./Titlecard.css"
import cards_data from "../../assets/cards/Cards_data"
import { Link } from 'react-router-dom'



const Titlecard = ({title, category}) => {
  const [ApiData, setApiData]= useState([]);
  const cardsRef = useRef();

  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODg0N2NhOWU2YTc4NDI0NmM5ZWIyZDQ2YmFkMGRmOCIsInN1YiI6IjY2NmMwZTk0MDA1YjliYzJmMTcwZGZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9EKeh_VI-QUvUTWX9IJzi2wRJHtQqkjiIl-sN8StDNs'
    }
  };
  
 

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  
  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  },[]);

  return (

    <div className='titlecard'>

      <h2>{title?title:'Populer On netflix'}</h2>
      <div className="card_list" ref={cardsRef}>

        {ApiData.map((card, index)=>{ 

        return <Link to={`player/${card.id}`} className="card" key={index}>

        <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="mapped_data_AHA_002" />

        <p>{card.original_title}</p>

          </Link>
        })}
      </div>
    </div>

  )
}

export default Titlecard
