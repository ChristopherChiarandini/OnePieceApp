import React from 'react'
import '../styles/Home.css'
import logo from '../assets/logo-OP.png'

export default function Home() {
  return (
    <div className="container">
      <img src={logo} alt="logo one piece"></img>
      <div>Bienvenue dans le monde de One Piece</div>

      <a href="/Tomes">Les Tomes de One Piece</a>
    </div>
  )
}
