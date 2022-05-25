// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
const process = require("process")
const emailjs = require("@emailjs/browser")

const handler = async event => {
  if (!process.env.CONTACT_EMAIL) {
    return {
      statusCode: 500,
      body: "process.env.CONTACT_EMAIL must be defined",
    }
  }

  const body = JSON.parse(event.body)

  const {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID,
  } = process.env

  const { email, guests, isAttending, artist, track } = body

  let templateParams = {
    email,
    guests,
    isAttending,
    artist,
    track
  }

  try {
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID)
    .then(res => {
      console.log("SUCCESS", res.status, res.text)
      return {
        statusCode: 200,
        body: {}
      }
    })
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString()
    }
  }
}

module.exports = { handler }
