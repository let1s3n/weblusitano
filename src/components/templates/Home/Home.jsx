import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { BsLinkedin } from "react-icons/bs";
const Home = () => {

  return (
    <Container className="g-0 d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh", rowGap: "2rem" }}>
      <Row className="g-0 justify-content-center">
        <Col xs="auto" className="g-0">
          <Image className="logo" src="/images/lusitanoBanner.jpeg" />
        </Col>
      </Row>

      <Row className="g-0 justify-content-center">
        <Col xs="auto" className="g-0 text-center">
          <a
            className="d-block lh-1"
            href="https://www.linkedin.com/company/lusitano-maritime-inc/"
            target='_blank'
          >
            <h3 className="lh-1 m-0 p-0">
              <BsLinkedin />
            </h3>
          </a>

          <p className="lh-1 m-0">info@lusitanomaritime.com</p>
        </Col>
      </Row>

      <Row
        className="g-0 justify-content-around"
        style={{ rowGap: 2 + "rem" }}
      >
        <Col xl={4}>
          <p className="m-0 text-center">
            BICSA Financial Center Avenida Balboa y Calle Aquilino De La Guardia Oficina 4703 Piso 47 PH Ciudad de Panamá
            0801, Ciudad de Panamá, Panama 0801, PA
          </p>
        </Col>

      </Row>
    </Container>

  )
}

export default Home