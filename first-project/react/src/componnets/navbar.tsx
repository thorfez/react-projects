import React from "react";

function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : "navbar"}>
      <img
        src="public\photos\react-icon-small.png"
        className="image"
        width={"28.9295"}
        height={"28.9295"}
      ></img>
      <h3 className="reactfacts"> ReactFacts </h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;
