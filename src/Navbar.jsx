import React from 'react'
import "./style.css"
import logo from "./Resources/logo.svg"
import MenuBar from "./Resources/MenuBar.svg"

function Navbar() {
  return (
    <>
    <div>
    <div class="navBar">
            <div class="logo"><img src={logo} /></div>
            <div class= "menuGroup">
                <div class="menus">
                    <div>Home</div>
                    <div>About</div>
                    <div>Sports</div>
                    <div>Facilities</div>
                    <div>Membership</div>
                    <div>Contact</div>
                    <div class= "Button"> Enrol Today</div>
                </div>
                <div class="navBarBtnSmallScreen">
                <div class="MenuBar"><img src={MenuBar} /></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar