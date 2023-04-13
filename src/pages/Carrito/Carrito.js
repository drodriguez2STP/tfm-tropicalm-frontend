import React from "react";
import Link from "next/link";
import { Container, Image } from "semantic-ui-react";
import Menu from "@/components/Header/Menu";
import Footer from "@/components/Footer";

export default function Carrito() {
  return (
    <>
      <Menu />
      <main>
        <div className="carrito">
          <Container>
            <h1 className="carrito-title">Carrito</h1>

            <div className="columns">
              <div className="product-cart">
                <Image
                  className="product-cart-image"
                  src="imagen-producto.jpg"
                  alt="Producto"
                />

                <div className="product-cart-details">
                  <div className="product-cart-info">
                    <h3 className="product-cart-title">Producto 1</h3>

                    <div className="product-cart-quantity">
                      <label for="quantity">Cantidad:</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value="1"
                        min="1"
                      />
                    </div>

                    <div className="product-cart-subtotal">
                      <span className="n">$99.99</span>
                    </div>
                  </div>

                  <button className="actualizar-btn">Actualizar Carrito</button>
                </div>
              </div>

              <div className="summary-cart">
                <h2 className="summary-title">Total de Compra</h2>

                <div className="summary-detail">
                  <div className="summary-subtotal">
                    <p>Subtotal</p>
                    <p>$15.50</p>
                  </div>
                  <div className="summary-envio">
                    <p>Envío</p>
                    <p>$15.50</p>
                  </div>
                  <div className="summary-total">
                    <p>Total</p>
                    <p>$15.50</p>
                  </div>
                </div>

                <button className="buy-btn">
                  <Link href="/FinalizarCompra">Finalizar Compra</Link>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
