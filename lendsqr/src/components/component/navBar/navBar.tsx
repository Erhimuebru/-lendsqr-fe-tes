// import { Link } from "react-router-dom";
import { useState } from 'react'
import './navBar.css'
const Union = require ('../../assets/Union.jpg')
const Profile = require ('../../assets/profile.jpg')
const Bell = require ('../../assets/bell.jpg')
const Dropdown = require ('../../assets/dropdown.jpg')
const NavBar = () => {
    
    return (
        <header>

           
            <nav  className="navbar">  
        
        <div className="nav-logo">
            <img className="nav-img" src={Union} alt="Site-logo" />
                <h2 className='nav-name'>lendsqr</h2>
            </div>

         
         
                 
        <div className="search-div">
								
								<input
                                    className='search-input'
									placeholder="Search for anything"
								/>
                               <button className='search-svg'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
							</div>

                            <div className='nav-profile'>
                                <p className='notification-docs'>Docs</p>
                                <img className='notofication-bell' src={Bell} alt="Notification" />
                                <img className='notification-profile' src={Profile} alt="profile" />
                                <h3 className='notification-name'>Adedeji</h3>
                                <img className='notification-dropdown' src={Dropdown} alt="profile" />
                            </div>




                 </nav>
    
     </header>

     
      );
}
 
export default NavBar;