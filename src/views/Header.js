import React from 'react'

const Header = () => {
    return (
        <div className="heading">
            <div className="container">
                <h1>Logo</h1>
                <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
                
                </ul>
               
            </div>
        </div>
    )
}

export default Header
