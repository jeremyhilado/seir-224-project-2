import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return(
        <div className='nav-links-container'>
            <Link to='/'>Music<span>pedia</span></Link> 
            <Link to='/about'>About</Link>
        </div>
    )
}

export default Nav