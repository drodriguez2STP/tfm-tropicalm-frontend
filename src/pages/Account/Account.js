import React from "react";
import Link from "next/link";
import { Container, Image } from "semantic-ui-react";
import Menu from "@/components/Header/Menu";
import Footer from "@/components/Footer";

export default function Account() {
  return (
    <>
      <Menu />
      <main>
        <div className="account">
          <Container>
            <h1 className="account-title">Mi Cuenta</h1>

            <div className="columns">
              <div className="card1">
                <p>Info de mi cuenta</p>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
