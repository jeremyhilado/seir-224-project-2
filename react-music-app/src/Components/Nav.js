import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return(
        <div className='nav-links-container'>
            
                <Link to='/'>Musicpedia</Link> 
        
            
                <Link to='/about'>About</Link>
        
        </div>
    )
}

export default Nav