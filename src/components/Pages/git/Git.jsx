import React from 'react'
import './git.css';
import Navbar from '../../Navbar/Navbar';
import {github, linkedin, medium, email} from '../../../images'

const Git = () => {
  return (
   <>
   <Navbar/>

   <div className='social_links_section'>

    <h1>You Can find me on:</h1>
    
    <div className='social_links_images'>
      <a href="#" target=' '><img src={github} alt="" className='filter' /></a>
      <a href="#" target=' '><img src={linkedin} alt="" className='filter' /></a>
      <a href="#" target=' '><img src={medium} alt="" className='filter' /></a>
      <a href="#" target=' '><img src={email} alt="" className='filter' /></a>

    </div>

    <h2>I'll be happy to help</h2>

   </div>

   
   
   
   
   </>
  )
}

export default Git