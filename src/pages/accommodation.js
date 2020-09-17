import React from "react"
import "../scss/page.scss"
import "../scss/accommodation.scss"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FaHotel, FaBed } from "react-icons/fa"
import GmapAccom from "../components/GmapAccom"

export default class GettingThere extends React.Component {
  render() {
    return (
      <div className="main-content-container accommodation">
        <div className="container content">
          <h2 className="title">Accommodation</h2>
        </div>
        <div className="map-container">
          <GmapAccom />
          <p>Click a pin on the map to go to the website</p>
        </div>
        <div className="container content">
          <p className="summary">
            We have picked out a small selection of hotels and bed & breakfasts
            to suit a range of budgets. <br/><br /> Please see below for more
            details:
          </p>
        </div>
        <h2 className="heading">Hotels</h2>
        <div className="container content">

          <div className="card">
            <div className="card__title">
              <div className="card__title--icon">
                <FaHotel />
              </div>
              <div className="card__title--text">Dakota Hotel Edinburgh</div>
            </div>
            <div className="card__info">
              <div className="card__info--spacer"></div>
              <div className="card__info--text">
                <ul>
                  <li class="address">
                    11 Ferrymuir Retail Park,
                    <br /> 
                    South Queensferry,
                    <br />
                    Edinburgh,
                    <br /> 
                    EH30 9QZ
                  </li>
                  <li class="phone">
                    <a href="tel:+441313193690">0131 319 3690</a>
                  </li>
                  <li class="email">
                    <a href="mailto:reservations@edb.dakotahotels.co.uk">
                      reservations<br/>@edb.dakotahotels.co.uk
                    </a>
                  </li>
                  <li class="info">
                    Discounted rate available by contacting the hotel directly
                    and quoting: <br />
                    <strong>‘Brewster/Hiron Wedding Party’</strong>
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="https://www.dakotahotels.co.uk/edinburgh/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit website
            </a>
          </div>

          <div className="card">
            <div className="card__title">
              <div className="card__title--icon">
                <FaHotel />
              </div>
              <div className="card__title--text">
                Premier Inn (South Queensferry)
              </div>
            </div>
            <div className="card__info">
              <div className="card__info--spacer"></div>
              <div className="card__info--text">
                <ul>
                  <li class="address">
                    Builyeon Road,
                    <br />
                    South Queensferry, 
                    <br />
                    Edinburgh, 
                    <br />
                    EH30 9YJ
                  </li>
                  <li class="phone">
                    <a href="tel:+443337774683">0333 777 4683</a>
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="https://www.premierinn.com/gb/en/hotels/scotland/lothian/edinburgh/edinburgh-south-queensferry.html/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit website
            </a>
          </div>

          <div className="card">
            <div className="card__title">
              <div className="card__title--icon">
                <FaHotel />
              </div>
              <div className="card__title--text">Inkeeper's Lodge</div>
            </div>
            <div className="card__info">
              <div className="card__info--spacer"></div>
              <div className="card__info--text">
                <ul>
                  <li class="address">
                    The Hawes Inn,
                    <br />
                    7 Newhalls Road,
                    <br />
                    South Queensferry,
                    <br />
                    EH30 9TA
                  </li>
                  <li class="phone">
                    <a href="tel:+441313311990">0131 331 1990</a>
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="https://www.innkeeperslodge.com/hotel/the-hawes-inn-south-queensferry-edinburgh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit website
            </a>
          </div>

          <div className="card">
            <div className="card__title">
              <div className="card__title--icon">
                <FaHotel />
              </div>
              <div className="card__title--text">
                DoubleTree by Hilton<br /> 
                (Queensferry Crossing)
              </div>
            </div>
            <div className="card__info">
              <div className="card__info--spacer"></div>
              <div className="card__info--text">
                <ul>
                  <li class="address">
                    St Margarets Head,
                    <br />
                    North Queensferry,
                    <br /> KY11 1HP
                  </li>
                  <li class="phone">
                    <a href="tel:+441383410000">0138 341 0000</a>
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="https://www.hilton.com/en/hotels/ediqcdi-doubletree-edinburgh-queensferry-crossing/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit website
            </a>
          </div>
        
        </div>
        <h2 className="heading">Bed & Breakfast</h2>
        <div className="container content">

          <div className="card">
            <div className="card__title">
              <div className="card__title--icon">
                <FaBed />
              </div>
              <div className="card__title--text">The Queens</div>
            </div>
            <div className="card__info">
              <div className="card__info--spacer"></div>
              <div className="card__info--text">
                <ul>
                  <li class="address">
                    8 The Loan,
                    <br /> 
                    South Queensferry,
                    <br /> 
                    EH30 9LL
                  </li>
                  <li class="phone">
                    <a href="tel:+441313314345">0131 331 4345</a>
                  </li>
                  <li class="email">
                    <a href="mailto:stay@thequeensbandb.co.uk">
                      stay@thequeensbandb.co.uk
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="https://www.dakotahotels.co.uk/edinburgh/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit website
            </a>
          </div>

          <div className="card">
            <div className="card__title">
              <div className="card__title--icon">
                <FaBed />
              </div>
              <div className="card__title--text">
                Ravenous Beastie
              </div>
            </div>
            <div className="card__info">
              <div className="card__info--spacer"></div>
              <div className="card__info--text">
                <ul>
                  <li class="address">
                    Builyeon Road,
                    <br />
                    South Queensferry, 
                    <br />
                    Edinburgh, 
                    <br />
                    EH30 9YJ
                  </li>
                  <li class="phone">
                    <a href="tel:+443337774683">0333 777 4683</a>
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="https://www.premierinn.com/gb/en/hotels/scotland/lothian/edinburgh/edinburgh-south-queensferry.html/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit website
            </a>
          </div>
        
        </div>
      </div>
    )
  }
}
