import React from "react";

import Link from "next/link";
import { Container, Image, Button, Grid } from "semantic-ui-react";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="columns">
          <div>
            <Link href="/">
              <Image src="public/logotm.png" alt="Tropical Mitch logo" />
            </Link>
          </div>
          <div>
            <ul>
              <Link as="a" href="#" className="linksf">
                Tienda
              </Link>
              <Link as="a" href="#" className="linksf">
                Contacto
              </Link>
              <Link as="a" href="#" className="linksf">
                Términos y Condiciones
              </Link>
              <Link as="a" href="#" className="linksf">
                Política de privacidad
              </Link>
            </ul>
          </div>
          <div className="social">
            <Button as="a" href="#" circular color="facebook" icon="facebook" />
            <Button
              as="a"
              href="#"
              circular
              color="instagram"
              icon="instagram"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="pie">
          <h5>Desarrollado por:</h5>
        </div>
      </Container>
    </div>
  );
}
