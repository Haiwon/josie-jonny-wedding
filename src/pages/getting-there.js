import React from "react"
import "../scss/page.scss"
import "../scss/getting-there.scss"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import GmapDirections from "../components/GmapDirections"
import SEO from "../components/seo"

import {
  FaCar,
  FaPlane,
  FaTaxi,
  FaTrain,
} from "react-icons/fa"
import directions from "../downloads/bb-castle-directions.pdf"

export default class GettingThere extends React.Component {
  render() {
    return (
      <div className="main-content-container getting-there">
        <SEO title="Getting there" />
        <div className="container content">
          <h2 className="title">Getting there</h2>
        </div>
        <div className="map-container">
          <GmapDirections />
          <p>Click a pin on the map to go to the website</p>
        </div>
        <div className="container content">
          <div className="transport">
            <div className="transport__title">
              <div className="transport__title--icon">
                <FaPlane />
              </div>
              <div className="transport__title--text">By plane</div>
            </div>
            <div className="transport__info">
              <div className="transport__info--spacer">&nbsp;</div>
              <div className="transport__info--text">
                <ul>
                  <li>
                    Barnbougle Castle is located 15 minutes away from Edinburgh
                    Airport by car
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="transport">
            <div className="transport__title">
              <div className="transport__title--icon">
                <FaTrain />
              </div>
              <div className="transport__title--text">By train</div>
            </div>
            <div className="transport__info">
              <div className="transport__info--spacer">&nbsp;</div>
              <div className="transport__info--text">
                <ul>
                  <li>
                    Dalmeny Train Station is the closest Train Station and is a
                    short Taxi ride from Barnbougle castle
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="transport">
            <div className="transport__title">
              <div className="transport__title--icon">
                <FaCar />
              </div>
              <div className="transport__title--text">By car</div>
            </div>
            <div className="transport__info">
              <div className="transport__info--spacer">&nbsp;</div>
              <div className="transport__info--text">
                <ul>
                  <li>Parking is available outside Barnbougle Castle</li>
                  <li>
                    Vehicles can be left overnight but must be parked in the
                    main car park up by Dalmeny House
                  </li>
                  <li>
                    To download detailed directions to Barnbougle Castle, please
                    click the button below:
                  </li>
                  <a href={directions} className="btn btn-primary">
                    Download
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="transport">
            <div className="transport__title">
              <div className="transport__title--icon">
                <FaTaxi />
              </div>
              <div className="transport__title--text">By taxi</div>
            </div>
            <div className="transport__info">
              <div className="transport__info--spacer">&nbsp;</div>
              <div className="transport__info--text">
                <ul>
                  <li>
                    As Barnbougle Castle is located within the gated the Dalmeny
                    Estate, taxis must be booked in advance of the day
                  </li>
                  <li>Local taxi firms:</li>
                  <ul>
                    <li>Dalmeny Cars &mdash; 0131 3000 767</li>
                    <li>Marshall Private Hire &mdash; 0131 513 9969</li>
                    <li>
                      Capital Cabs &mdash; 0131 229 4466 (team.leaders@taxis-edinburgh.co.uk)
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
