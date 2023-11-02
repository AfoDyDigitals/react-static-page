import React from 'react'
import NavBar from './Navbar'
import SideBar from './SideBar'
import Body from './Body'
import Card from './Card'
import Footer from './Footer'
import Description from './Description'
import "./style.css"
import './App.css'

function App() {

  return (
      <>
      <NavBar />
      <div className="container">
        <div className="MainContent">
          <div>
            <Body />
            <Description />
            <div className="card">
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
