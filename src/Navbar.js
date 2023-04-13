import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
       <div className='nav'>
      <h3>Movies</h3>
      <ul className='list'>
        <li> <Link   className="navlist" to={"/"}>Home</Link> </li>
        <li><Link className="navlist" to={"filter"}>filter</Link></li>
        <li><Link  className="navlist" to={"addmovie"}>addmovie</Link></li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
