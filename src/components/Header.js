import React from "react";
import memebar from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={memebar} className="header--image"></img>
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course Prj3</h4>
    </header>
  );
}
