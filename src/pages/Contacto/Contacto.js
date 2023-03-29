import Link from "next/link";
import Menu from "@/components/Header/Menu";
import Footer from "@/components/Footer";
import { Container, Image } from "semantic-ui-react";

import React from "react";

export default function Contacto() {
  return (
    <>
      <Menu />
      <div className="contacto">
        <Container>
          <h3 className="formulario-text">Formulario de Contacto</h3>
          <div className="columns2">
            <div className="um">
              <div className="card-form">
                <form>
                  <div class="form-group">
                    <label for="name">Nombre y apellido</label>
                    <br />
                    <input type="text" id="name" name="name" required />
                  </div>

                  <div class="form-group">
                    <label for="phone">Número de teléfono</label>
                    <br />
                    <input type="tel" id="phone" name="phone" required />
                  </div>

                  <div class="form-group">
                    <label for="email">Email</label>
                    <br />
                    <input type="email" id="email" name="email" required />
                  </div>

                  <div class="form-group">
                    <label for="comments">Comentarios</label>
                    <br />
                    <textarea id="comments" name="comments"></textarea>
                  </div>

                  <button className="home-btn" type="submit">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
            <div className="dois">
              <div className="info-tm">
                <h4 className="infos">Dirección:</h4>
                <p className="camp">Lorem Ipsum 123</p>
                <h4 className="infos">Teléfono:</h4>
                <p className="camp">85763573458345</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
