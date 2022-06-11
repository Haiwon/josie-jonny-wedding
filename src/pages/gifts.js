import React from "react"
import "../scss/page.scss"
import "../scss/details.scss"
import "../scss/gifts.scss"
import SEO from "../components/seo"

export default class Gifts extends React.Component {
  render() {
    return (
      <div className="main-content-container gifts">
        <SEO title="Gifts" />
        <div className="container content">
          <h2 className="title">Gifts</h2>
        </div>
        <div className="container content body">
          <p className="summary">
            Please do not feel obliged to give us a wedding gift. Your presence
            is more than enough. If you would, however, like to give a gift then
            a contribution to our new house fund would be gratefully
            received.
            <a
              href="https://prezola.com/wishlists/10227747/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Click here to view our gift list
            </a>
          </p>
        </div>
      </div>
    )
  }
}
