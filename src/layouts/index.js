import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/global.scss"
import NavbarSmall from "../components/NavbarSmall"
import NavbarLarge from "../components/NavbarLarge"
import NavPopup from "../components/NavPopup"
import Transition from "../components/Transition"
import { FaRegHeart } from "react-icons/fa"

export default function Layout({ children, location, path }) {
  const { header } = useStaticQuery(
    graphql`
      query {
        header: file(relativePath: { eq: "header-image-borderless.png" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  console.log(header)
  return (
    <div className="">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossOrigin="anonymous"
        />
      </Helmet>
      <div className="bg"></div>
      <NavbarSmall />
      <NavPopup page={path} />
      <header className="header">
        {/* <Image className="header__image img-fluid" src={headerImg} /> */}
        <Img className="header__image img-fluid" fluid={header.childImageSharp.fluid} />
        <h1>Josie & Jonny</h1>
        <h2>
          Saturday 3<sup>rd</sup> September 2022 &mdash; Barnbougle Castle, Edinburgh
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


