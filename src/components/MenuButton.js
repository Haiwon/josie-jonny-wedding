import React from "react"

export default function MenuButton(props) {
  return (
    <div className="menu-button__container" role="button" tabIndex={0} onClick={() => toggleMenu()} onKeyPress={(e) => keyToggle(e)}>
      <div className="menu-button__bar" id="bar-1"></div>
      <div className="menu-button__bar" id="bar-2"></div>
      <div className="menu-button__bar" id="bar-3"></div>
    </div>


  )
}

const toggleMenu = () => {
  const menuButton = document.querySelector(".menu-button__container");
  const navPopup = document.querySelector(".nav__overlay"); 
  menuButton.classList.toggle("change");
  navPopup.classList.toggle("open");
}

const keyToggle = (e) => {
  if (e.code === "KeyM") {
    console.log(e.code)
    toggleMenu();
  }
}