import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <a href="/"><img onClick="/" src="images/logo-vd.png" alt="Logo Victor Duveau" /></a>
            <div>
                <a href="/">Accueil</a>
                <a href="/#motivation">À propos</a>
                <a href="/#projets">Portfolio</a>
            </div>
    </nav>
  )
}

export default Navbar