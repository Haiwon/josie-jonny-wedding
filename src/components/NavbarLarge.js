import React from "react"
import { Link } from "gatsby"

export default function NavbarLarge({page}) {
  return (
    <nav id="nav" className="navbar__large">
      <ul className="navbar__links">
        <Link to="/">
          <li className={"navbar__links--link" + (page === "/" ? " active" : "")}>Home</li>
        </Link>
        <Link to="/details">
          <li className={"navbar__links--link" + (page === "/details/" ? " active" : "")}>The details</li>
        </Link>
        <Link to="/getting-there">
          <li className={"navbar__links--link" + (page === "/getting-there/" ? " active" : "")}>Getting there</li>
        </Link>
        <Link to="/accommodation">
          <li className={"navbar__links--link" + (page === "/accommodation/" ? " active" : "")}>Accommodation</li>
        </Link>
        <Link to="/gifts">
          <li className={"navbar__links--link" + (page === "/gifts/" ? " active" : "")}>Gifts</li>
        </Link>
        <Link to="/rsvp">
          <li className={"navbar__links--link" + (page === "/rsvp/" ? " active" : "")}>RSVP</li>
        </Link>
      </ul>
    </nav>
  )
}

