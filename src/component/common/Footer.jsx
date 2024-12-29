import React from "react";
import "./../../css/footer.css";
import { Button, Col, Row } from "react-bootstrap";
//import { Button } from "bootstrap";

const Footer = () => {
  return (
    <footer className="footer-bottom">
      <Row className="background-footer">
        <Col className="col-4">
          <div className="mt-2">
            <img
              src="/public/logotipo-v2.png"
              alt="logotipo-blue-novedades-version-2"
              className="w-100"
            />
          </div>
        </Col>
        <Col className="col-4">
          <div className="text-center p-2">
            <Button className="my-1 btn-footer">Inicio</Button>
            <Button className="my-1 btn-footer">Productos</Button>
            <Button className="my-1 btn-footer">Contacto</Button>
          </div>
        </Col>
        <Col className="col-4">
          <div className="p-3 text-center">
            <h4 className="font-footer">Redes Sociales</h4>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
