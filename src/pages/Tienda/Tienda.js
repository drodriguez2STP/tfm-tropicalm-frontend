import React from "react";
import Link from "next/link";
import { Container, Image } from "semantic-ui-react";
import Menu from "@/components/Header/Menu";
import Footer from "@/components/Footer";

export default function Tienda() {
  return (
    <>
      <Menu />
      <main>
        <div className="tienda">
          <Container>
            <h1 className="tienda-ti">Tienda Tropical Mitch</h1>
            <div className="columns">
              <div className="one">
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
              <div className="two">
                <div className="card">
                  <Image
                    src="public/botella de jugo tm_Mesa de trabajo 1"
                    alt="Botella de jugo"
                  />
                  <h3 className="ti-jugo">Jugo Natural</h3>
                  <p className="precio">700 ml</p>
                  <button className="home-btn">Comprar</button>
                  <div className="two"></div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
