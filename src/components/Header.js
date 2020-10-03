import React from "react";
import "../stylesheets/HeaderStyle.css";

const Header = () => {
  return (
    <header className="header">
      <img
        className="image"
        src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Icon_Bug_256x256.png"
        alt="things"
      />
      <h1>Meme Generator</h1>
    </header>
  );
};

export default Header;
