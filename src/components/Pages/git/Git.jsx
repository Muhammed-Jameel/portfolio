import React from "react";
import "./git.css";
import Navbar from "../../Navbar/Navbar";
import { github, linkedin, medium, email } from "../../../images";

const Git = () => {
  return (
    <>
      <Navbar />

      <div className="social_links_section">
        <h1>You Can find me on:</h1>

        <div className="social_links_images">
          <a href="https://github.com/Muhammed-Jameel" target=" ">
            <img src={github} alt="" className="filter" />
          </a>
          <a href="https://www.linkedin.com/in/muhammed-jameel-a8706b1b2/" target=" ">
            <img src={linkedin} alt="" className="filter" />
          </a>
          <a href="https://medium.com/@phprkwxfz" target=" ">
            <img src={medium} alt="" className="filter" />
          </a>
          <a href="mailto: muhammedjameel.work@gmail.com" target=" ">
            <img src={email} alt="" className="filter" />
          </a>
        </div>

        <h2>I'll be happy to work with you ^_^</h2>
      </div>
    </>
  );
};

export default Git;
