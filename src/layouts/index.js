import React from "react"
import { Image } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/global.scss"
import headerImg from "../images/header-image-borderless.png"
import NavbarSmall from "../components/NavbarSmall"
import NavbarLarge from "../components/NavbarLarge"
import NavPopup from "../components/NavPopup"
import Transition from "../components/Transition"

export default function Layout({ children, location, path }) {
  return (

    <div className="">
      <div className="bg"></div>
      <NavbarSmall />
      <NavPopup page={path} />
      <header className="header">
        <Image className="header__image img-fluid" src={headerImg} />
        <h1>Josie & Jonny</h1>
        <h2>
          31<sup>st</sup> July 2021 &mdash; Barnbougle Castle, Edinburgh
        </h2>
      </header>
      <NavbarLarge page={path} />
      <Transition location={location}>
        <div id="main-content-container">
          {children}
        </div>
      </Transition>
      <footer className="footer">
        <p>
          Created, with love, by{" "}
          <a href="https://www.jackhiron.dev/">Jack Hiron</a>{" "}
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-suit-heart-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
          </svg>
        </p>
      </footer>
    </div>
  )
}
