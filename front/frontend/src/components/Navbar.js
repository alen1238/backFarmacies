import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Logout } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import logoUcoltis from "../assets/img/logoucoltis.png";

function NavBar() {
  let history = useNavigate();
  const dispatch = useDispatch();

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  const logoutHandler = () => {
    dispatch(Logout());
    history.push("/login");
    window.location.reload();
  };

  return (
    <header>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#1A1A1A", padding: "15px 20%" }}
      >
        <img
          src={logoUcoltis}
          width="190"
          height="70"
          className="d-inline-block align-top"
          alt="logo"
        />
      </div>
      <Navbar
        style={{ backgroundColor: "#1A1A1A", width: "100%" }}
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 d-flex justify-content-between align-items-center">
              <LinkContainer to="/">
                <Nav.Link>Inicio</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/shop">
                <Nav.Link>Tienda</Nav.Link>
              </LinkContainer>

              {userInfo && userInfo.isAdmin ? (
                <LinkContainer to="/new-product">
                  <Nav.Link>Añadir nuevo producto</Nav.Link>
                </LinkContainer>
              ) : (
                ""
              )}

              <div className="d-flex align-items-center">
                {userInfo ? (
                  <NavDropdown
                    className="ml-3"
                    title={userInfo.username}
                    id="username"
                  >
                    <LinkContainer to="/account">
                      <NavDropdown.Item>
                        Configuracion de la cuenta
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/all-addresses">
                      <NavDropdown.Item>
                        Configuracion de direcciones
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/card-details">
                      <NavDropdown.Item>
                        Configuracion de tarjetas
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/all-orders">
                      <NavDropdown.Item>Ver todas sus ordenes</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Cerrar sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user">Iniciar sesión</i>
                    </Nav.Link>
                  </LinkContainer>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
