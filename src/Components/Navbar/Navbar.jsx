import React, { useRef } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import search from "../../assets/search_icon.svg"
import bell from "../../assets/bell_icon.svg"
import profile from "../../assets/profile_img.png"
import caret from "../../assets/caret_icon.svg"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

const NavRef = useRef() 

useEffect(()=>{

window.addEventListener("scroll" , ()=>{

if(window.scrollY >= 80 ){
  NavRef.current.classList.add('nav-dark')
}else{
  NavRef.current.classList.remove('nav-dark')
};

  });
},[])


  
  return (
    <div ref={NavRef} className='Navbar'>
     <div className="nav-left">
       <img src={logo} alt="" />
     
      <ul>
        <li>Home</li>
        <li>TV shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Language</li>
      </ul>
     </div>
     <div className="nav-rgt">
      <img src={search} alt="" className='icons'/>
      <p>Childern</p>
      <img src={bell} alt="" className='icons'/>

    <div className="navbar-profile">
    <img src={profile} alt="" className='profile'/>
    <img src={caret} alt="" />
    <Link to="/login" className="dropdown">
      <p >Sign Out from Netflix</p>
    </Link>

    </div>

     </div>
    </div>
  )
}

export default Navbar
