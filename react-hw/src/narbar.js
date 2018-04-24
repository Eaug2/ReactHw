import React from "react";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = () => (
    <div className="container">
    <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="#">Clicky Game</a>


    <span className="navbar-text">
      Click an image to begin!
    </span>

    <span className="navbar-text">
      Score:0 | Top Score: 0
    </span>
  
</nav>
  </div>
);

export default Navbar;