import React,{useEffect, useState} from 'react'
import {HashLink as Link} from "react-router-hash-link"
import "../styles/Header.css"
import MenuIcon from '@material-ui/icons/Menu'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const [navbarToggle, setNavbarToggle]=useState(false);
  const location=useLocation();
  useEffect(()=>{
    setNavbarToggle(false)
  },[location])
  return (
    <div className="navbar" id={navbarToggle ? "open": "hidden"}>
      <div className="toggleButton">
        <button onClick={() => {setNavbarToggle((prev)=>!prev)}}>
          <MenuIcon/>
        </button>
      </div>
      <div className="nav-links">
        <Link to='#about-me' smooth style={{color:"#00ffb1"}}>Home</Link>
        <Link to='#skills' smooth>Skills</Link>
        <Link to='#projects' smooth>Projects</Link>
        <Link to='#experience' smooth>Experience</Link>
        <Link to='#contact' smooth>Contact me</Link>
      </div>
    </div>
  )
}

export default Header