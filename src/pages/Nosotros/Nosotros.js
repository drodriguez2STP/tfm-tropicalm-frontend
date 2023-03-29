import React from "react";
import Link from "next/link";
import Menu from "@/components/Header/Menu";
import Footer from "@/components/Footer";
import { Container, Image } from "semantic-ui-react";

export default function Nosotros() {
  return (
    <>
      <Menu />
      <main>
        <div className="nosotros">
          <Container>
            <div className="columns1">
              <div className="intro"></div>
              <div>
                <h1 className="titulo1">Nosotros</h1>
                <div className="card1">
                  <p className="texto-nos">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scram bled it to make a type specimen book. It has
                    sur vived not only five centuries
                  </p>
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
