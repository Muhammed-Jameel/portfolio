import React from 'react'
import styled from 'styled-components';
import './landingPage.css';
import { Route, Routes, Link} from 'react-router-dom'


const LandingPage = () => {

  return (
    <div className='landing_page'>

        <div className='catch_line'>

            <p>Hi, I'm <span className='mj'>MJ</span></p>
            <h1> <span>I </span>
                 <div className='animated_text'>
                  <div className='word1'>Dream</div>
                  <div className='word2'>Design</div>
                  <div className='word3'>Code</div>
                  </div>
            </h1>
            <p>UI/UX design - WEB development</p>

        </div>

        <div className='sections_grid'>

            <div className='work_section gradient-border  shadow-pop-bl section_name'><Link to="/Work"><h2>Work</h2></Link></div>
            <div className='git_section gradient-border  shadow-pop-bl section_name'><Link to="/Git"><h2>Get in touch</h2></Link></div>
            <div className='about_section gradient-border  shadow-pop-bl section_name'><Link to="/About"><h2>About</h2></Link></div>
            <div className='more_section gradient-border  shadow-pop-bl section_name'><Link to="/More"><h2>More</h2></Link></div>

        </div>
       
        
       
    </div>
  )
}

export default LandingPage