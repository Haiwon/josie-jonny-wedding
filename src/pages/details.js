import React from "react"
import { Image } from "react-bootstrap"
import "../scss/page.scss"
import "../scss/details.scss"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import barnbougleCastle from "../images/barnbougle-castle.jpg"
import scottishLibrary from "../images/scottish-library.jpg"
import banquetHall from "../images/banquet-hall.jpg"

export default class Details extends React.Component {
  render() {
    return (
      <>
        <div className="container content">
          <h2 class="title">The details</h2>
        </div>
        <Image className="image img-fluid" id="barnbougle-castle" src={barnbougleCastle} width="800px" />
        <div className="container content body">
          <p className="summary">
            Our wedding will take place on the <strong>31st July 2021</strong>
            <br />
            at <strong>Barnbougle</strong> Castle near{" "}
            <strong>Edinburgh</strong>
          </p>
        </div>
        <Image className="image img-fluid" id="scottish-library" src={scottishLibrary} width="800px" />
        <div className="container content body">
          <p className="summary">
            The ceremony will be held in the <strong>Scottish Library</strong> at <strong>2:30pm</strong>
          </p>
        </div>
        <Image className="image img-fluid" id="scottish-library" src={banquetHall} width="800px" />
        <div className="container content body">
          <p className="summary">
            Followed by the <strong>reception</strong> and <strong>ceilidh</strong> in the <strong>Banquet Hall</strong> until <strong>midnight</strong>
          </p>
        </div>

        <div className="container content info">
          For more information on Barnbougle Castle, head over to their website:
        </div>
      </>
    )
  }
}
