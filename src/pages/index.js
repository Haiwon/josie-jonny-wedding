import React from "react"
import "../scss/page.scss"
import "../scss/index.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import JosieJonny from "../images/josie-jonny-blue-bg.png"

export default class Home extends React.Component {
  
  render() {
    return (
      <>
        <img
          className="image img-fluid"
          src={JosieJonny}
          alt="Josie and Jonny"
        />
        <div className="container content">
          <h2>Please join us</h2>
          <p className="summary">
            in celebration of the marriage of
            <br />
            Josie&nbsp;Hiron & Jonny&nbsp;Brewster
            <br />
            on the 31<sup>st</sup> July, 2021 <br />
            at Barnbougle Castle, Queensferry, Edinburgh
          </p>
          <a href="https://jackphiron.typeform.com/to/UitoB7Xu" className="btn btn-primary" target="_blank" rel="noopener noreferrer">RSVP</a>
        </div>
      </>
    )
  }
}
