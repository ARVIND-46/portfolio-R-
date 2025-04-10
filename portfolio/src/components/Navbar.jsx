import React from 'react'
import '../components/styles.css'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <nav>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">skills</a></li>
                <li><a href="#Project">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
       
    </div>
    </>
  )
}

export default Navbar