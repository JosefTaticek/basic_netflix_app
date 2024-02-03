import React from 'react'
import Logo from "../images/netflix.png"
import "./NavBar.css"
import {useState} from "react"

import { GiHamburgerMenu } from "react-icons/gi";
import links from '../Data/data_menu';

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return <div className="background-image">
        <div className="navigation">
          <div className="nav-header">
            <img src={Logo} alt="netflix_logo"/>
            <button onClick={()=> setShowMenu(!showMenu)}>
              <GiHamburgerMenu className="hamburger-icon" />
            </button>
            <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
              <ul>
                {
                  links.map((oneLink)=>{
                    const {id, text, url} = oneLink

                    return <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="header-text-email">
          <div className="header-text">
            <h1>Neomezené sledování filmů, TV pořadů a dalšího obsahu</h1>
            <p>Dívejte se kdekoli. Zrušte kdykoli.</p>
            <p>Jste připraveni se dívat? Pro vytvoření nebo obnovení členství zadejte e-mail</p>
          </div>
          <div className="header-email">
            <input type="email" placeholder="E-mailová adresa"></input>
            <input type="submit" value="Začít"></input>
          </div>
        </div>
  </div>
}

export default NavBar