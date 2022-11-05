import React, { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoChevronBackCircleOutline} from 'react-icons/io5';
import { IoMdClose} from 'react-icons/io'
import './navbar.css';
import {Link, useNavigate, NavLink} from 'react-router-dom';
import Arrow from '../../images/arrow.svg'


const NavbarLinksList = () => (
  <>
  
  <NavLink to="/Work" className="link">Work</NavLink>
    <NavLink to="/About" className="link">About</NavLink>
    <NavLink to="/Git" className="link">Get in touch</NavLink>
    <NavLink to="/More" className="link">More</NavLink>
    </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <>

    <div className='navbar_links_container'>
    <NavLink to="/" className="link logo">MJ</NavLink>
    
    <NavbarLinksList/>
    
    </div>


    <div className='toggle_menu'>
    {toggleMenu
          ? <IoMdClose color="#FAF8FF" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Fill color="#FAF8FF" size={27} onClick={() => setToggleMenu(true)} />}

          {toggleMenu && (

            <div  className="menu_links"> <NavLink to="/" className="link">Home</NavLink> <NavbarLinksList/> </div>
          
        )}
    </div>
    
    

    </>
  )
}

export default Navbar