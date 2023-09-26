import { Header } from "../../components/Header"
import { Container, Background } from "./styles"

export function Home() {
  return (
    <Container>
      <Header />
      <div>
        <section id="empresa">
          <div className="global">
            <div className="content">
              <h2>Nossos projetos</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa omnis facere dolor dolorem corporis sit aliquam quas id non earum aut eaque debitis numquam harum, adipisci placeat dignissimos ullam? Natus!</p>
              <span>Image from <a href="#">image</a></span>
              <button>Consulte mais informações</button>
            </div>
          </div>
        </section>
      </div>
      <Background />
      <section id="sobre">
        <div className="sobre-content">
          <h1>Há mais de 100 anos, a Empresa fornece serviços de engenharia, compras e construção</h1>
          <div className="ball"></div>
        </div>
        <div className="sobre-p">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugiat id, dolorum labore asperiores laboriosam cum sequi ullam, repellendus, quas culpa! Ab voluptatibus culpa consectetur tenetur hic beatae repellat repellendus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ipsum doloremque eos molestiae ex esse amet dolorum, debitis recusandae harum aperiam explicabo totam reiciendis error enim labore corporis hic repudiandae.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae, in vel modi fugiat, ab culpa officiis id odit mollitia magnam adipisci delectus! At, ab facilis est cupiditate eum nemo.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, dicta commodi? Debitis, dolores laudantium odio libero deserunt assumenda deleniti molestias, repudiandae ab tenetur eos repellendus aperiam dicta perspiciatis dolorum dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nesciunt perferendis, nemo aliquid autem nisi voluptatum perspiciatis rem laboriosam minima enim praesentium laborum optio! Nesciunt inventore minus rerum? Neque, minus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, saepe! Eligendi, eveniet pariatur fugit ab in maxime quo tenetur nobis delectus quasi ad tempore blanditiis eaque assumenda dolorum itaque facilis.
          </p>

          <button>Consulte mais informações</button>
        </div>
      </section>
    </Container>
  )
}