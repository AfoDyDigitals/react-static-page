import React from 'react'
import "./Style.css"
import Logo from './Logo'
import MenuBar from "../public/MenuBar.svg"

function Navbar() {
  return (
    <>
    <div>
        <div className="navBar">
            <img className="logo" src="../logo.svg" alt='logo'/>
            <div className= "menuGroup">
                <div className="menus"> 
                    <div>Home</div>
                    <div>About</div>
                    <div>Sports</div>
                    <div>Facilities</div>
                    <div>Membership</div>
                    <div>Contact</div>
                    <div className= "Button"> Enrol Today</div>
                </div>
                <img className="navBarBtnSmallScreen" src='../MenuBar.svg' alt='menubar'/>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar