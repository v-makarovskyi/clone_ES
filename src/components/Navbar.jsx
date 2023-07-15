import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Row, Col, NavDropdown } from "react-bootstrap";
import logo from "../assets/images/es-logo.png";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";

export default function NavBar() {
  const [expand, setExpand] = useState(false)

  return (
    <Container className="navbar-container p-0">
      <Row className="prenavbar" /* style={{ justifyContent: "flex-end" }} */>
        <Col xs={4} className="p-0">
          <ul className="prenavbar-list">
            <li>
              <div className="prenavbar-list__social">
                {" "}
                <CgFacebook style={{ width: "20px", height: "20px" }} />
              </div>
            </li>
            <li>
              <div className="prenavbar-list__social">
                <AiOutlineTwitter style={{ width: "20px", height: "20px" }} />
              </div>
            </li>
            <li>
              <div className="prenavbar-list__social">
                <AiOutlineInstagram style={{ width: "20px", height: "20px" }} />
              </div>
            </li>
            <li>
              <div className="prenavbar-list__language">
                <span>English</span>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="logo-container">
        <Col md={4}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Col>
      </Row>
      <Row className="navbar-menu">
        <Navbar expanded={expand} expand="md" style={{ margin: 0, padding: 0 }}>
          <Container
            style={{
              flexDirection: "row-reverse",
              justifyContent: "flex-start",
            }}
          >
            <Navbar.Toggle  onClick={() => setExpand(!expand)}  aria-controls="responsive-navbar-nav">
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse aria-controls="responsive-navbar-nav">
              <Nav /* className="me-auto" */ /* style={{ alignItems: "center" }} */>
                <Nav.Item>
                  <Nav.Link as={Link} to="/eurosolidarity/category/news" onClick={() => setExpand(false)}>
                    НОВИНИ
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                    АНОНСИ ПОДІЙ
                  </Nav.Link>
                </Nav.Item>
                <NavDropdown title="ФОТО-ВІДЕО" id="navbarScrollingDropdown" >
                  <NavDropdown.Item>
                    <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                      ПРЯМА МОВА
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="ПУБЛІКАЦІЇ" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    <Nav.Link as={Link} to="/" >
                      БЛОГИ
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={Link} to="/">
                      ІНТЕРВ'Ю
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={Link} to="/eurosolidarity/category/articles">
                      СТАТТІ
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={Link} to="/">
                      News and interviews
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="ПАРТІЯ" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    <Nav.Link as={Link} to="/">
                      ПРОГРАМА
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={Link} to="/">
                      ФІНАНСОВА ЗВІТНІСТЬ
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={Link} to="/">
                      БАНКІВСЬКІ РЕКВІЗИТИ
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                    ФРАКЦІЯ
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/eurosolidarity/contacts" onClick={() => setExpand(false)}>
                    КОНТАКТИ
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </Container>
  );
}
