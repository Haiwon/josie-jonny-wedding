import React, { Component } from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import mapStyles from "./mapStylesAccom.json"

class GmapAccom extends Component {
  render() {
    const containerStyle = {
      height: "60vh",
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
        zoom={13.2}
        initialCenter={{
          lat: 55.998776,
          lng: -3.376601,
        }}
        disableDefaultUI={true}
        containerStyle={containerStyle}
        style={style}
        styles={mapStyles}
      >
        <Marker
          name={"Barnbougle Castle"}
          title={"Click to open website"}
          position={{ lat: 55.992472, lng: -3.33444 }}
          icon={{
            url:
              "http://www.myiconfinder.com/icon/download/a5485b563efc4511e0cd8bd04ad0fe9e.png",
            labelOrigin: {
              x: 12,
              y: 37,
            },
            scaledSize: new this.props.google.maps.Size(30, 30),
          }}
          label={{
            text: "Barnbougle Castle",
            color: "#485e69",
            fontSize: "12px",
          }}
          onClick={ () => window.open("https://roseberyvenues.co.uk/venue/barnbougle-castle", "_blank") }
        />
        
        <Marker
          name={"Dakota Hotel"}
          title={"Click to open website"}
          position={{ lat: 55.982302, lng: -3.400205 }}
          icon={{
            url:
              "http://www.myiconfinder.com/icon/download/a5485b563efc4511e0cd8bd04ad0fe9e.png",
            labelOrigin: {
              x: 12,
              y: 37,
            },
            scaledSize: new this.props.google.maps.Size(30, 30),
          }}
          label={{
            text: "Dakota Hotel",
            color: "#485e69",
            fontSize: "12px"
          }}
          onClick={ () => window.open("https://www.dakotahotels.co.uk/edinburgh/", "_blank") }
        />

        <Marker
          name={"Premier Inn"}
          title={"Click to open website"}
          position={{ lat: 55.984123, lng: -3.405410 }}
          icon={{
            url:
              "http://www.myiconfinder.com/icon/download/a5485b563efc4511e0cd8bd04ad0fe9e.png",
            labelOrigin: {
              x: 12,
              y: 37,
            },
            scaledSize: new this.props.google.maps.Size(30, 30),
          }}
          label={{
            text: "Premier Inn",
            color: "#485e69",
            fontSize: "12px"
          }}
          onClick={ () => window.open("https://www.dakotahotels.co.uk/edinburgh/", "_blank") }
        />
        
        <Marker
          name={"Innkeeper's Lodge"}
          title={"Click to open website"}
          position={{ lat: 55.990356, lng: -3.385105 }}
          icon={{
            url:
              "http://www.myiconfinder.com/icon/download/a5485b563efc4511e0cd8bd04ad0fe9e.png",
            labelOrigin: {
              x: 12,
              y: 37,
            },
            scaledSize: new this.props.google.maps.Size(30, 30),
          }}
          label={{
            text: "Innkeeper's Lodge",
            color: "#485e69",
            fontSize: "12px"
          }}
          onClick={ () => window.open("https://www.innkeeperslodge.com/hotel/the-hawes-inn-south-queensferry-edinburgh/", "_blank") }
        />

        <Marker
          name={"DoubleTree by Hilton"}
          title={"Click to open website"}
          position={{ lat: 56.013113, lng: -3.405010 }}
          icon={{
            url:
              "http://www.myiconfinder.com/icon/download/a5485b563efc4511e0cd8bd04ad0fe9e.png",
            labelOrigin: {
              x: 12,
              y: 37,
            },
            scaledSize: new this.props.google.maps.Size(30, 30),
          }}
          label={{
            text: "DoubleTree by Hilton",
            color: "#485e69",
            fontSize: "12px"
          }}
          onClick={ () => window.open("https://www.hilton.com/en/hotels/ediqcdi-doubletree-edinburgh-queensferry-crossing/", "_blank") }
        />

        <Marker
          name={"The Queens"}
          title={"Click to open website"}
          position={{ lat: 55.989877, lng: -3.397552 }}
          icon={{
            url:
              "http://www.myiconfinder.com/icon/download/a5485b563efc4511e0cd8bd04ad0fe9e.png",
            labelOrigin: {
              x: 12,
              y: 37,
            },
            scaledSize: new this.props.google.maps.Size(30, 30),
          }}
          label={{
            text: "The Queens",
            color: "#485e69",
            fontSize: "12px"
          }}
          onClick={ () => window.open("https://www.thequeensbandb.co.uk/welcome/", "_blank") }
        />

        <Marker
          name={"Ravenous Beastie"}
          title={"Click to open website"}
          position={{ lat: 55.990054, lng: -3.396413 }}
          icon={{
            url:
              "http://www.myiconfinder.com/icon/download/a5485b563efc4511e0cd8bd04ad0fe9e.png",
            labelOrigin: {
              x: 12,
              y: -7,
            },
            scaledSize: new this.props.google.maps.Size(30, 30),
          }}
          label={{
            text: "Ravenous Beastie",
            color: "#485e69",
            fontSize: "12px"
          }}
          onClick={ () => window.open("https://www.tripadvisor.co.uk/Hotel_Review-g4049419-d1827443-Reviews-Ravenous_Beastie-South_Queensferry_Edinburgh_Scotland.html", "_blank") }
        />

      </Map>
      
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBGCsIplVpQ_DR5cGqB1iD5CeBqCfG61Yw",
})(GmapAccom)