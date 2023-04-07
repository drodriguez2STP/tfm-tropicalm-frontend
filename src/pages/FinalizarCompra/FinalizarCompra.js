import React from "react";
import Link from "next/link";
import { Container, Image } from "semantic-ui-react";
import Menu from "@/components/Header/Menu";
import Footer from "@/components/Footer";

export default function FinalizarCompra() {
  return (
    <>
      <Menu />
      <main>
        <div className="f-compra">
          <Container>
            <h1 className="fcompra-title">Finalizar Compra</h1>

            <div className="columns">
              <div className="factura">
                <div className="factura-title">Factura</div>
                <div className="factura-content">
                  <p>Contenido de la factura</p>
                </div>
              </div>

              <div className="compra-y-pago">
                <div className="resumen-compra">
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
                </div>

                <div className="pago">
                  <h2 className="pago-title">Pago</h2>
                  <div className="metodo-de-pago">Metodo de Pago</div>
                  <button className="buy-btn">Pagar Ahora</button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
