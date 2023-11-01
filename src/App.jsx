import reactLogo from './assets/react.svg'
import React from 'react'
import NavBar from './Navbar'
import SideBar from './SideBar'
import Body from './Body'
import Card from './Card'
import Button from './Button'
import Footer from './Footer'
import Description from './Description'

import './App.css'

function App() {

  return (
      <>
      <NavBar />
      <div class="container">
        <div class="MainContent">
          <div>
            <Body />
            <Description />
            <div class="card">
              <Card 
                image = "/Football.svg" 
                copy="Experience the excitement of the game."
              />
              <Card 
            
                image = "/running.svg" 
                copy="Experienced track and field coaches."
              />
              <Card 
                image = "/swimming.svg" 
                copy="Join our swimming team and swim like a pro! "
              />
              <Card 
                  image = "/Basketball.svg" 
                  copy="Basketball programs for all ages and skill levels."
              />
            </div>
          </div>
            <SideBar />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
