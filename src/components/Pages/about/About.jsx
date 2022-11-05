import React from 'react'
import './about.css';
import Navbar from '../../Navbar/Navbar';
import {React_icon, node_icon, javascript_icon, jquery_icon, mongodb_icon, expressIcon} from '../../../images'

const About = () => {
  return (
    <>
    <Navbar></Navbar>

         <div class="parts_container">
       <div class="experience gradient-border">
       <div> <h2 className=''>Experience</h2>
       <p>It all started as a kid who has internet access, to discover the cool things in this limitless world, then wanting to know how they work, then wanting to make cool things as well, and here my journey began, starting with front-end with HTML&CSS to games with Python to PC applications with C++ going back then Game development with C++ & Unreal engine to the world of design for a few rounds there and being a UI/UX designer for a local company and finally going back to WEB development, but this time as a Full stack developer with JavaScript, React, Express & JQuiery. </p>
        </div>

       <div className='resume gradient-border  shadow-pop-bl section_name'>
        <a href='https://www.youtube.com/watch?v=yRsNLnyq5lI' target=' '><h3>Resume</h3></a>
       </div>

       </div>


       <div class="frame_works gradient-border ">
        <h2>Technologies I use:</h2>
        <div className='frame_works_imgs'>
        <img src={React_icon} alt="" />
        <img src={javascript_icon} alt="" />
        <img src={node_icon} alt="" />
        <img src={expressIcon} alt="" className='filter'/>
        <img src={jquery_icon} alt="" className='filter'/>
        <img src={mongodb_icon} alt="" className='filter'/>
        </div>

       </div>



       <div class="time_line gradient-border">

        <div className='time_stamp'>
          <h3 className='title'>Fresh developer</h3>
          <h4 className='year'>2018-2019</h4>
          <p className='details'>A web developer who works for fun and mostly for myself</p>

        </div>

        <div className='time_stamp'>
        <h3 className='title'>Expolrer</h3>
          <h4 className='year'>2020-2021</h4>
          <p className='details'>At that time I worked with many languages Python, C++, Dart, JavaScript, joined the computer science major, artificial intelligence specifically.</p>
        </div>

        <div className='time_stamp'>
        <h3 className='title'>Full stack developer</h3>
          <h4 className='year'>2021-now</h4>
          <p className='details'>tried the field of design, had some courses from Google in UX design and finally came to be a full stack developer.</p>
        </div>

       </div>
       </div>
    </>
  )
}

export default About







/*  

<div className='about_section_container sections_grid'>

      <div className='experience work_section gradient-border'>

     <div> <h2 className=''>Experience</h2>
      <p>It all started as a kid who has internet access, to discover the cool things in this limitless world, then wanting to know how they work, then wanting to make cool things as well, and here my journey began, starting with front-end with HTML&CSS to games with Python to PC applications with C++ going back then Game development with C++ & Unreal engine to the world of design for a few rounds there and being a UI/UX designer for a local company and finally going back to WEB development, but this time as a Full stack developer with JavaScript, React, Express & JQuiery. </p></div>

      
      <div className='resume gradient-border  shadow-pop-bl section_name'><a href='https://www.youtube.com/watch?v=yRsNLnyq5lI' target=' '><h2>Resume</h2></a></div>
      
      

      </div>
      <div className='git_section gradient-border frame_works' ></div>
      <div className='about_section gradient-border'>Timeline</div>



    </div>

*/