import React from "react";
import { Badge, Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./../../css/menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHouse,
  faMagnifyingGlass,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
  return (
    <Navbar expand="md" className="bg-menu p-0" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home" className="w-25">
          <img
            src="/public/Logotipo.png"
            alt="logotipo-blue-novedades"
            className="w-100 "
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="text-white" />
        <Navbar.Collapse id="navbarScroll" className="w-75 mt-sm-2">
          <div className="w-100 me-md-4">
            <div className="text-dark">
              <Form className="d-flex my-2">
                <Form.Control
                  type="search"
                  placeholder="Bucar"
                  className="border-form"
                  aria-label="Buscar"
                />
                <Button variant="light" type="submit" className="border-button">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </Form>
            </div>
            <div className="mb-lg-auto">
              <Nav
                className="my-2 my-lg-2 navbar-items d-flex justify-content-sm-center align-items-sm-center text-center"
                navbarScroll
              >
                <Nav.Link
                  href="#homepage"
                  className="item-navbar mx-md-2 me-lg-auto ms-lg-4 mb-2"
                >
                  Inicio <FontAwesomeIcon icon={faHouse} />
                </Nav.Link>
                <Nav.Link
                  href="#product"
                  className="item-navbar mx-md-2 mx-lg-4 mb-2"
                >
                  Productos <FontAwesomeIcon icon={faStore} />
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  className="item-navbar mx-md-2 ms-lg-auto me-lg-4 mb-2"
                >
                  Contacto <FontAwesomeIcon icon={faUser} />
                </Nav.Link>
              </Nav>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="text-white text-center me-3 mb-2">
              <Button variant="primary" className="btn-sm rounded-pill">
                Iniciar Sesion
              </Button>
              <p className="m-0 mb-1">o</p>
              <Button variant="info" className="btn-sm rounded-pill">
                Registrarse
              </Button>
            </div>
            <div className="d-flex border-trolley ps-3 mb-2">
              <Button className="rounded-pill btn-lg button-cart-shopping fs-1 ">
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
              </Button>
              <div>
                <Badge bg="danger" pill>
                  !
                </Badge>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
<h1>navbar</h1>;
