import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {BrowserRouter, Link, NavLink} from "react-router-dom"

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link className=" navbar-brand" to="#">Newsify</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent"  style={{display: "flex",justifyContent:"space-around"}}>
                    <ul className="navbar-nav">
                   
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home   </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/business">Business</Link></li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/general">General</Link></li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/health">Health</Link></li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/science">Science</Link></li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/technology">Technology</Link></li>
                   
                    
                   
                    </ul>
                </div>
                </nav>

      </div>
    )
  }
}

export default Navbar