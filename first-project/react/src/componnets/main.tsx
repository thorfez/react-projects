import React from "react";

function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : "main"}>
      <h1 className="main-h1"> Fun facts about Reacts </h1>
      <div className="main-div">
        <ul className="main-ul">
          <li> Was first released in 2013</li>
          <li> Was originally created by Jordan Walke</li>
          <li> Has well over 100K stars on GitHub</li>
          <li> Is maintained by Facebook</li>
          <li className="main-ul-li">
            {" "}
            Powers thousands of enterprise apps, including <br />
            mobile apps
          </li>
        </ul>
        <img
          src="public\photos\react-icon-large.png"
          className="main--div--img"
        />
      </div>
    </main>
  );
}

export default Main;
