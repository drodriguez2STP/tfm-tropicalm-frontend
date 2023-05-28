import Link from "next/link";
import { Container, Menu, Image } from "semantic-ui-react";



export default function Home() {
  return (
    <>
      <main>
        <div className="home">
          <div className="banner">
            <Container>
              <div className="columns">
                <div className="background"></div>
                <div className="logo-banner">
                  <Image className="logo-img" src="./logotm.png" alt="Tropical Mitch logo" />
                  <h1 className="titulo">
                    Tropical <br />
                    Mitch
                  </h1>
                  <button className="home-btn">
                    <Link href="/Tienda">Comprar</Link>
                  </button>
                </div>
              </div>
            </Container>
            <div className="productos">
              <Container>
                <div className="columns">
                  <div className="primera">
                    <div className="card">
                      <Image
                        src="./botella_de_jugo_tm_Mesa_de_trabajo_1.png"
                        alt="Botella de jugo"
                      />
                      <h3 className="ti-jugo">Jugo Natural</h3>
                      <p className="precio">700 ml</p>
                      <button className="home-btn">
                        <Link href="/Producto">Comprar</Link>
                      </button>
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
                        src="./botella_de_jugo_tm_Mesa_de_trabajo_1.png"
                        alt="Botella de jugo"
                      />
                      <h3 className="ti-jugo">Jugo Natural</h3>
                      <p className="precio">700 ml</p>
                      <button className="home-btn">
                        <Link href="/Producto">Comprar</Link>
                      </button>
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
                      <button className="home-btn">
                        <Link href="/Nosotros">Leer más</Link>
                      </button>
                    </div>
                  </div>
                  <div className="dos">
                    <h2 className="porque">¿Por qué elegirnos?</h2>
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
