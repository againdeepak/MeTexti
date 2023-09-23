import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg border border-info navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        
        <img src="images.png" width="30" height="30" alt="" />
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
            <li className="nav-item">
              <Link className="nav-link active btn " aria-current="page" to="/home" ><i><b>Home</b></i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active btn " aria-current="page" to="/about" ><i><b>About</b></i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active btn " aria-current="page" to="/contacts" ><i><b>Contact</b></i></Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link active btn " target='_blank' aria-current="page" to="https://github.com/againdeepak/MeTexti" ><i><b>GitHub</b></i></Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.enableDark} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modetext} Mode</label>
          </div>
        </div>
      </div>
    </nav>

  )
}
Navbar.propTypes = { title: PropTypes.string, }
// Navbar.defaultProps={
//   title:"Hellow cHinik",
// }