import React from 'react'
import "./Home.css"
import Navbar from "../../Components/Navbar/Navbar"
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import Titlecard from '../../Components/Title/Titlecard'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="hero_banner-------11(86.out)" className='banner-img' />
        <div className="hero-caption">
          <img src={ hero_title} alt="hero_title-------12(87.out)" className='captionh' />
          <p>Discovering his tied with secret incient order, a young man living in modren istanbul embarks to save quest odf city from immortal enemies!!!</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="hero_banner-------13(88.in)" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="hero_banner-------13(88.in)" />More info.</button>
          </div>
          <Titlecard/>
        </div>
      </div>
      <div className="more-card">
      <Titlecard title={"Blocbuster Movie"}  category={"popular"}/> 
      <Titlecard title={"Only On Netflix"} category={"top_rated"}/> 
      <Titlecard title={"upcomig"} category={"upcoming"}/> 
      <Titlecard title={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
