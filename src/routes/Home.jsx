import React from 'react'
import '../styles/Home.css'
// import logo from '../assets/logo-OP.png'

export default function Home() {
  return (
    <div className="container">
      <div className="box">
        {/* <img src={logo} alt="logo one piece"></img> */}
        <p>Bienvenue dans le monde de One Piece</p>
        <a href="/tomes">Les Tomes de One Piece</a>
      </div>
      <div></div>
    </div>
  )
}
