import React from 'react';
import Arrow from '../../../images/arrow.svg'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';

import './workPage.css'

const WorkPage = () => {
  const history = useNavigate();
  return (
    <>
      <Navbar></Navbar>

      <div className='sections_grid margin'>


        <div className='work_section gradient-border  shadow-pop-bl section_name'><a href="https://www.youtube.com/watch?v=5Q0zGoHUczY" target=" "><h2>Project</h2></a> <p>Company x</p></div>
        <div className='git_section gradient-border  shadow-pop-bl section_name'><a href="#"><h2>Project</h2></a> <p>Company x</p></div>
        <div className='about_section gradient-border  shadow-pop-bl section_name'><a href="#"><h2>Project</h2></a> <p>Company x</p></div>
        <div className='more_section gradient-border  shadow-pop-bl section_name'><a href="#"><h2>Project</h2></a> <p>Company x</p></div>

      </div>

    </>

  )
}

export default WorkPage