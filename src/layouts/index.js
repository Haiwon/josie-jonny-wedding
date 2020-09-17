import React from "react"
import { Image } from "react-bootstrap"
import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/global.scss"
import headerImg from "../images/header-image-borderless.png"
import NavbarSmall from "../components/NavbarSmall"
import NavbarLarge from "../components/NavbarLarge"
import NavPopup from "../components/NavPopup"
import Transition from "../components/Transition"
import { FaRegHeart } from "react-icons/fa"

export default function Layout({ children, location, path }) {
  return (
    <div className="">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossorigin="anonymous"
        />
      </Helmet>
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
      <div id="to-top"></div>
      <NavbarLarge page={path} />
      <Transition location={location}>{children}</Transition>
      <footer className="footer">
        <p>
          Created, with love, by{" "}
          <a href="https://www.jackhiron.dev/">Jack Hiron</a> <FaRegHeart />
        </p>
      </footer>
    </div>
  )
}
