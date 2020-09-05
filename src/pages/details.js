import React from "react"
import { Image } from "react-bootstrap"
import "../scss/page.scss"
import "../scss/details.scss"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import barnbougleCastle from "../images/bb-castle.jpg"

export default class Details extends React.Component {
  
  render() {
    return (
      <>
        <div className="container content">
          <h2 class="title">The details</h2>
        </div>
          <Image className="image img-fluid" src={barnbougleCastle} />
        <div className="container content">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dicta est magni veritatis officia architecto assumenda explicabo consequuntur aperiam. Minima ex blanditiis quam vitae quae laboriosam eum aspernatur labore at? Repellat accusamus, molestiae accusantium, beatae laborum laudantium doloremque unde, animi consectetur ipsa quam natus nisi pariatur nulla. Deserunt aut mollitia, fugit laborum modi minus debitis laudantium dolores consequuntur consequatur quibusdam a voluptatum nulla, saepe doloribus quidem. Officia perspiciatis, fugiat obcaecati voluptate odit alias molestiae. Eos quasi culpa voluptates cupiditate doloremque excepturi possimus exercitationem porro nam aliquam eligendi molestias atque doloribus natus molestiae veniam delectus ex at explicabo suscipit, dolorum officia. Dolor possimus, fuga perspiciatis unde ullam nihil enim ex laboriosam, praesentium reiciendis atque soluta nesciunt voluptatibus dicta hic, inventore obcaecati necessitatibus repellendus labore ratione laborum omnis rerum? Eum assumenda illo, asperiores officia tempore non odit quae reprehenderit aliquid optio. Quia vero, doloribus fugit, et itaque, amet libero laboriosam voluptatem illo natus laborum ipsum minima sint temporibus! Dolorem aspernatur debitis illum, nisi nam esse excepturi eveniet eius necessitatibus perferendis? Vel iste earum fuga cupiditate tenetur et esse necessitatibus laboriosam, corporis quod quisquam dignissimos dolor cumque corrupti. Nisi, enim porro. Aliquid unde totam voluptatum saepe asperiores natus dolorem praesentium optio, doloribus iure excepturi! Quidem eaque consequatur nisi amet temporibus sapiente eligendi ad libero consequuntur magnam vero assumenda optio, error nulla explicabo earum hic corrupti nobis fugit provident sequi! Qui harum placeat eius facere praesentium temporibus omnis facilis quis quisquam. Et id optio eligendi ea laborum odio cum ad, commodi consequuntur! Tempore assumenda numquam qui reprehenderit hic, molestiae ullam quidem alias eius, praesentium impedit veniam quia? Corrupti quas doloremque ipsum veritatis hic reiciendis perspiciatis quasi quod, nulla nemo iure repudiandae et at praesentium aliquam dolores in? Explicabo quia iure commodi laudantium molestias, est qui voluptas dolores beatae sint inventore non maiores corporis rem.</p>
        </div>
      </>
    )
  }
}
