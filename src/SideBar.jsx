import React from 'react'
import "./style.css"
import SidebarBG from "./Resources/SidebarBG.svg"

function SideBar() {
  return (
      <>
      <div>
            <div class="SidebarBG" style={{ backgroundImage: `url(${SidebarBG})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', width: '200px', padding: '10px', marginTop: '20px', height: '10vh', marginRight: '30px'
                }}> 
            </div>
            <div class="SideBarStyle">
                <div class="box">
                    <div>Football</div>
                    <hr />
                    <div>Track and field</div>
                    <hr />
                    <div>Swimming</div>
                    <hr />
                    <div>Basketball</div>
                    <hr />
                </div>

                <div class="box">
                    <div>Physical fitness</div>
                    <hr />
                    <div>Mental fitness</div>
                    <hr />
                    <div>Social strength</div>
                    <hr />
                    <div>Networking</div>
                    <hr />
                </div>

                <div class="box">
                    <div>Announcements</div>
                    <hr />
                    <div>Upcoming Events</div>
                    <hr />
                    <div>Social Media Links</div>
                    <hr />
                    <div>Blog</div>
                    <hr />
                </div>
            </div>
        </div>
    </>
  )
}

export default SideBar