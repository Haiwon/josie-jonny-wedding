import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import Button from "@mui/material/Button"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import SEO from "./seo"
import "../scss/rsvp.scss"

const ContactForm = () => {
  const [numGuests, setNumGuests] = useState(1)
  const [guests, setGuests] = useState({})
  const [email, setEmail] = useState("")
  const [isAttending, setIsAttending] = useState("yes")
  const [artist, setArtist] = useState("")
  const [track, setTrack] = useState("")
  const [loading, setLoading] = useState("")
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [error, setError] = useState(false)

  const form = useRef()

  const handleNumGuests = e => {
    setNumGuests(+e.target.value)
  }

  const handleGuestInfo = e => {
    setGuests({
      ...guests,
      [e.target.name.split("_")[0]]: {
        ...guests[e.target.name.split("_")[0]],
        [e.target.name.split("_")[1]]: e.target.value,
      },
    })
  }

  // const handleIndividualFields = e => {
  //   setGuests({
  //     ...guests,
  //     [e.target.name]: e.target.value,
  //   })
  // }

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handleIsAttending = e => {
    setIsAttending(e.target.value)
  }

  const handleArtist = e => {
    setArtist(e.target.value)
  }
  const handleTrack = e => {
    setTrack(e.target.value)
  }

  const guestFields = (key, label) => {
    return [...Array(numGuests)].map((field, i) => (
      <TextField
        variant="filled"
        fullWidth
        margin="normal"
        label={`Guest ${i + 1} - ${label}`}
        id={`guest-${i + 1}`}
        name={`guest-${i + 1}_${key}`}
        onChange={handleGuestInfo}
        key={`guest-${i + 1}`}
      />
    ))
  }

  const createGuestsTable = () => {
    let guestsArr = []
    for (const key in guests) {
      if (key.indexOf("guest") !== -1) {
        guestsArr.push(guests[key])
      }
    }
    let body = `
      <table>
        <tbody>
      ${guestsArr
        .map(
          (guest, i) =>
            `
              <tr>
                <td style="min-width: 125px;"><strong>Guest ${
                  i + 1
                }:</strong></td> <td>${guest.name}</td>
              </tr>
              <tr>
                <td style="min-width: 125px;"><strong>Dietary/allergies:</strong></td> <td>${
                  guest.dietary
                }</td>
              </tr>
            `
        )
        .join("")}
        </tbody>
      </table>
    `
    return body
  }

  const handleSubmit = () => {
    let guests = createGuestsTable()
    const templateParams = {
      guests: guests,
      contactEmail: email,
      isAttending: isAttending,
      artist: artist,
      track: track,
    }
    setLoading(true)
    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.EMAILJS_USER_ID
      )
      .then(
        res => {
          console.log("SUCCESS!", res.status, res.text)
          setLoading(false)
          setIsEmailSent(true)
        },
        err => {
          console.log("FAILED...", err)
          setLoading(false)
          setError(true)
        }
      )
  }

  let btnContent

  if (loading) {
    btnContent = (
      <div className="lds-heart">
        <div></div>
      </div>
    )
  } else if (isEmailSent) {
    btnContent = "Thank you!"
  } else if (error) {
    btnContent = "Something went wrong!"
  } else {
    btnContent = "Submit"
  }

  return (
    <Box
      style={{
        backgroundColor: "#eef9ff",
        padding: "1.5rem",
        borderRadius: "10px",
      }}
    >
      <SEO title="RSVP" />
      <ValidatorForm
        instantValidate
        style={{ display: "flex", flexFlow: "column nowrap" }}
        onSubmit={handleSubmit}
        ref={form}
      >
        <TextField
          type="number"
          variant="filled"
          label="Number of guests"
          InputProps={{
            inputProps: { min: 1, max: 5 },
          }}
          value={numGuests}
          onChange={handleNumGuests}
        />
        {guestFields("name", "Name")}
        <FormControl margin="normal">
          <FormLabel id="attending">
            Will you be attending our reception?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="attending"
            defaultValue="yes"
            name="attending"
            onChange={handleIsAttending}
            value={isAttending}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <TextField
          variant="filled"
          fullWidth
          margin="normal"
          label="Email address"
          type="email"
          name="email"
          id="email"
          onChange={handleEmail}
          value={email}
        />
        <p style={{ marginTop: "1rem" }}>
          If you or anyone in your party has any dietary needs or allergies we
          should be aware of, please let us know below:
        </p>
        {guestFields("dietary", "Dietary/Allergies")}
        <p style={{ marginTop: "1rem" }}>
          And finally, if there were one song that would get you up onto the
          dance floor, what would it be?
        </p>
        <div>
          <TextField
            variant="filled"
            className="song-request artist"
            label="Artist"
            name="artist"
            onChange={handleArtist}
            value={artist}
          />
          <TextField
            variant="filled"
            className="song-request track-name"
            label="Track name"
            name="trackName"
            onChange={handleTrack}
            value={track}
          />
        </div>
        <Button
          margin="normal"
          variant="contained"
          type="submit"
          style={{ marginTop: "1rem" }}
          disabled={isEmailSent}
        >
          {btnContent}
        </Button>
      </ValidatorForm>
      {isEmailSent && (
        <p style={{ textAlign: "center", fontSize: "1.2rem", marginTop: "1rem", marginBottom: 0 }}>
          <strong>
            Your response has been received. <br/> We look forward to seeing you in
            September! <br/>
            ♡
          </strong>
        </p>
      )}
    </Box>
  )
}

export default ContactForm
