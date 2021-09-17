import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import "../scss/page.scss"
import "../scss/index.scss"
import "bootstrap/dist/css/bootstrap.min.css"

class Home extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="main-content-container home">
        <SEO title="Home" />
        <Img
          className="image img-fluid"
          fluid={this.props.image}
          alt="Josie and Jonny"
        />
        <div className="container content">
          <h2>Please join us</h2>
          <p className="summary">
            in celebration of the marriage of
            <br />
            Josie&nbsp;Hiron & Jonny&nbsp;Brewster
            <br />
            on the 3<sup>rd</sup> September, 2022 <br />
            at Barnbougle Castle, Queensferry, Edinburgh
          </p>
          <a
            href="https://jackphiron.typeform.com/to/UitoB7Xu"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            RSVP
          </a>
        </div>
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        jj: file(relativePath: { eq: "josie-jonny-blue-bg.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Home image={data.jj.childImageSharp.fluid}/>
    )}
  />
)