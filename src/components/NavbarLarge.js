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
        <a href="https://jackphiron.typeform.com/to/UitoB7Xu" target="_blank" rel="noopener noreferrer"><li className={"navbar__links--link"}>RSVP</li></a>
      </ul>
    </nav>
  )
}

