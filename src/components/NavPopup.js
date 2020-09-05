import React from "react"
import { Link } from "gatsby";

export default function NavPopup({ page }) {
  return (
    <div className="nav__overlay">
      <div className="nav__overlay--content">
        <Link className={"nav__overlay--link" + (page === "/" ? " active" : "")} to="/" onClick={() => closePopup(this)}>Home</Link>
        <Link className={"nav__overlay--link" + (page === "/details/" ? " active" : "")} to="/details" onClick={() => closePopup(this)}>The details</Link>
        <Link className={"nav__overlay--link" + (page === "/getting-there/" ? " active" : "")} to="/getting-there" onClick={() => closePopup(this)}>Getting there</Link>
        <Link className={"nav__overlay--link" + (page === "/accommodation/" ? " active" : "")} to="/accommodation" onClick={() => closePopup(this)}>Accommodation</Link>
        <a href="https://jackphiron.typeform.com/to/UitoB7Xu" target="_blank" rel="noopener noreferrer" className="nav__overlay--link" onClick={() => closePopup(this)}>RSVP</a>
      </div>
    </div>
  )
}

function closePopup(x) {
  const menuButton = document.querySelector(".menu-button__container");
  const navPopup = document.querySelector(".nav__overlay"); 
  menuButton.classList.toggle("change");
  navPopup.classList.toggle("open");
}