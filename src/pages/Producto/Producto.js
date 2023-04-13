import React from "react";
import Link from "next/link";
import Menu from "@/components/Header/Menu";
import Footer from "@/components/Footer";
import { Container, Image } from "semantic-ui-react";

export default function Producto() {
  return (
    <>
      <Menu />
      <main>
        <div className="producto">
          <Container>
            <div className="columns">
              <div className="one">
                <div className="card">
                  <Image
                    src="public/botella de jugo tm_Mesa de trabajo 1"
                    alt="Botella de jugo"
                  />
                </div>
              </div>
              <div className="two">
                <div className="card1">
                  <h1 className="producto-ti">Jugo Natural</h1>
                </div>
                <p className="descripcion-prod">
                  Lorem ipsum has been the industry standard text ever since the
                  1500's'
                </p>
                <p className="precio-producto">0.00$</p>
                <div className="cantidad-boton">
                  <div className="product-cart-quantity">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value="1"
                      min="1"
                    />
                  </div>
                  <div className="product-cart-button">
                    <button className="home-btn">
                      <Link href="/Carrito">Añadir al carrito</Link>
                    </button>
                  </div>
                </div>
                <div className="sku-cat">
                  <div className="sku">
                    <div className="skuname">
                      <p className="skus">SKU:</p>
                    </div>
                    <div className="skunum">
                      <p className="skum">05678940579</p>
                    </div>
                  </div>
                  <div className="catego">
                    <p className="catename">Categoría:</p>
                  </div>
                  <div className="catees">
                    <p className="categoria-name">Natanja</p>
                  </div>
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
