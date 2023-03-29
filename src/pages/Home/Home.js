import Link from "next/link";
import { Container, Image } from "semantic-ui-react";

export default function Home() {
  return (
    <>
      <main>
        <div className="home">
          <div className="banner">
            <Container>
              <div className="columns">
                <div className="background"></div>
                <div>
                  <Image src="public/logotm.png" alt="Tropical Mitch logo" />
                  <h1 className="titulo">
                    Tropical <br />
                    Mitch
                  </h1>
                  <button className="home-btn">Comprar</button>
                </div>
              </div>
            </Container>
            <div className="productos">
              <Container>
                <div className="columns">
                  <div className="primera">
                    <div className="card">
                      <Image
                        src="public/botella de jugo tm_Mesa de trabajo 1"
                        alt="Botella de jugo"
                      />
                      <h3 className="ti-jugo">Jugo Natural</h3>
                      <p className="precio">700 ml</p>
                      <button className="home-btn">Comprar</button>
                    </div>
                  </div>
                  <div className="segunda">
                    <p className="intro-sub">Nuestros</p>
                    <h3 className="intro-ti">Productos</h3>
                    <p className="descripcion">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scram bled it to make a type specimen
                      book. It has sur vived not only five centuries
                    </p>
                  </div>
                  <div className="tercera">
                    <div className="card">
                      <Image
                        src="public/botella de jugo tm_Mesa de trabajo 1"
                        alt="Botella de jugo"
                      />
                      <h3 className="ti-jugo">Jugo Natural</h3>
                      <p className="precio">700 ml</p>
                      <button className="home-btn">Comprar</button>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
            <div className="nosotros">
              <Container>
                <div className="columns">
                  <div className="uno">
                    <div className="card">
                      <h3 className="nostros-desc">Nosotros</h3>
                      <p className="nosotrs-text">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scram bled it to make a type specimen
                        book. It has sur vived not only five centuries Lorem
                        Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley
                        of type and scram bled it to make a type specimen book.
                        It has sur vived not only five centuries
                      </p>
                      <ul>
                        <Link as="a" href="#" className="leer">
                          Leer más
                        </Link>
                      </ul>
                    </div>
                    <div className="dos">
                      <h2 className="porque">¿Por qué elegirnos?</h2>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
