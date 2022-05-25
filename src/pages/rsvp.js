import React from "react"
import "../scss/page.scss"
import "../scss/details.scss"
import "../scss/gifts.scss"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm";

export default class RSVP extends React.Component {
  render() {
    return (
      <div className="main-content-container rsvp">
        <SEO title="Gifts" />
        <div className="container content">
          <h2 className="title">RSVP</h2>
        </div>
        <div className="container content body">
          <p className="summary">
            Thank you for responding to our RSVP! We have a couple of quick
            questions so we can confirm your attendance, so please fill out the
            form below:
          </p>
          <section className="container content">
            <ContactForm />
          </section>
        </div>
      </div>
    )
  }
}
