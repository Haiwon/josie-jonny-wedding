import React from "react"
import { Image } from "react-bootstrap"
import "../scss/page.scss"
import "../scss/details.scss"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import barnbougleCastle from "../images/bb-castle.jpg"

export default class GettingThere extends React.Component {
  
  render() {
    return (
      <>
        <div className="container content">
          <h2 class="title">Getting there</h2>
        </div>
          <Image className="image img-fluid" src={barnbougleCastle} />
        <div className="container content">
          <p>This is a different page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo in commodi eaque aliquid pariatur deleniti odit. Repellat, cumque. Sit fuga deserunt dolor veritatis reprehenderit quidem, rem facilis dolores provident optio autem, saepe, labore culpa! Quos voluptatem sed veritatis tempora expedita nam tenetur necessitatibus magni vitae quis? Fugit libero vitae facilis rerum beatae ut, rem sunt iusto quas reiciendis voluptas ipsum. Soluta iste, ea natus reprehenderit quisquam doloremque ullam velit, laborum adipisci ut dicta. Facilis officia molestias quidem provident consectetur modi officiis nulla magni maiores totam rerum, molestiae dolore quisquam asperiores voluptates quaerat. Deleniti, consequatur? Fugit quibusdam eum amet culpa quod enim voluptatibus, consequuntur laudantium. Quas vitae cupiditate omnis cum vero repudiandae quibusdam magni, animi optio, consectetur voluptatum perferendis amet. Illo natus id at autem ad iste odit recusandae commodi, ea deserunt, voluptatibus neque consectetur modi eaque quaerat in, perferendis ab eos dolor hic architecto corrupti necessitatibus? Ratione, vitae! Repellendus aliquam corrupti voluptatem fuga officia enim soluta ipsa vitae rerum magni, maxime eaque ratione aut qui error autem. Quo praesentium adipisci ipsa velit nesciunt aliquam rem, hic mollitia, aspernatur fuga culpa exercitationem maxime, quidem consectetur odio voluptatum provident reprehenderit. Exercitationem numquam deleniti suscipit facere quidem amet. Harum voluptatem enim vitae nobis dolores at non optio consequatur laboriosam. Nulla, ipsam inventore quis provident omnis deserunt dolor iste aut autem animi fugiat ab deleniti ut vero. Officiis a fugit qui autem nam dolorem aliquid, amet quae quod commodi! Vitae delectus enim sapiente veniam vel odio consectetur ab consequatur aperiam quis dolor perspiciatis, labore illo ipsum eligendi quibusdam suscipit reprehenderit nam at eveniet porro illum ipsa numquam. Inventore voluptatum ea minus, eveniet corrupti quaerat culpa numquam eaque dignissimos laborum similique vero? Inventore rem corrupti reprehenderit minima veniam nobis consequuntur repellat delectus pariatur mollitia, quibusdam hic! Placeat, hic incidunt.</p>
        </div>
      </>
    )
  }
}
