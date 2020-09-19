import React, { Component } from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import mapStyles from "./mapStylesDirections.json"

class GmapDirections extends Component {
  render() {
    const containerStyle = {
      height: "50vh",
      position: "relative",
      marginBottom: "10px",
    }

    const style = {
      borderRadius: "10px",
      border: "2px solid #aac3cf",
      maxWidth: "800px",
      margin: "0 auto",
    }
    return (
      <Map
        google={this.props.google}
        zoom={11.75}
        initialCenter={{
          lat: 55.9706444,
          lng: -3.3530694,
        }}
        disableDefaultUI={true}
        containerStyle={containerStyle}
        style={style}
        styles={mapStyles}
      >
        <Marker
          name={"Barnbougle Castle"}
          title={"Barnbougle Castle"}
          position={{ lat: 55.992472, lng: -3.33444 }}
          icon={{
            url:
              "https://icon-library.com/images/google-maps-pin-icon/google-maps-pin-icon-13.jpg",
            labelOrigin: {
              x: 12,
              y: 37,
            },
            scaledSize: new this.props.google.maps.Size(30, 30),
          }}
          label={{
            text: "Barnbougle Castle",
            color: "#485e69"
          }}
          onClick={ () => window.open("https://roseberyvenues.co.uk/venue/barnbougle-castle", "_blank") }
        />

        <Marker
          name={"Edinburgh Airport"}
          title={"Edinburgh Airport"}
          position={{ lat: 55.950620, lng: -3.361453 }}
          icon={{
            url:
              "https://icon-library.com/images/google-maps-pin-icon/google-maps-pin-icon-13.jpg",
            labelOrigin: {
              x: 12,
              y: 37,
            },
            scaledSize: new this.props.google.maps.Size(30, 30),
          }}
          label={{
            text: "Edinburgh Airport",
            color: "#485e69"
          }}
          onClick={ () => window.open("https://www.edinburghairport.com/", "_blank") }
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBGCsIplVpQ_DR5cGqB1iD5CeBqCfG61Yw",
})(GmapDirections)
