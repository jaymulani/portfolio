import React from 'react'
import hp from '../images/hp.png'
import { Link } from 'react-router-dom';
import '../nav.css'

function Nav() {
    return (
    <>
    <nav className="navbar">
        <Link to='/'><img src={hp} alt='logo' width="50" height="25" className="logo"/></Link>
    </nav> 
    </>
    )
}

export default Nav
