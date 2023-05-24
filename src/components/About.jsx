import React from "react";
import Navbar from "./Navbar";
import { SearchTerm } from "../App";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="aboutpar">
        {/* <Navbar /> */}
        <div className="aboutnav">
        <Link to='/' className="home" style={{textDecoration:'none'}}>Home</Link>
        </div>
        <div className="aboutmain">

        <div className="about">
      <h1>About</h1>
      <p className="title">Welcome to our Image Search App!</p>
      <p>
        This application allows you to search for images based on specific keywords
        and displays the results in a grid. You can click on any image to view
        additional information about it.
      </p>
        </div>
        <div className='content'>
      <h2>How to Use</h2>
      <ol>
        <li>
          Enter a search term in the search bar at the top of the page. By default, the
          term "nature" is preloaded.
        </li>
        <li>
          Press the Enter key or click the search button to perform the search.
        </li>
        <li>
          The application will retrieve and display a grid of images related to the
          search term.
        </li>
        <li>
          Click on any image to view more details about it, including the photographer's
          name and a link to their portfolio.
        </li>
        <li>
          You can also change the search term by typing a new term in the search bar and
          repeating steps 2-4.
        </li>
      </ol>
      <p>
        We hope you enjoy using our Image Search App! If you have any questions or
        feedback, please don't hesitate to contact us.
      </p>
        </div>
        </div>
    </div>
  );
};

export default About;
