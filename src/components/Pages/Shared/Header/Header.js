import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ setModalShow }) => {
  const [page, setPage] = useState(false);

  return (
    <div>
      <Navbar bg="light" expand="lg" className=" p-3">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">Faucets</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>

            <Form.Select aria-label="Default select example" className="w-25">
              {/* <option>Open this select menu</option> */}
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Launch vertically centered modal
            </Button>
            <div className="position-relative">
              <Button
                onClick={() => setPage(!page)}
                className="rounded-circle bg-secondary"
              >
                {" "}
                <FaRegUserCircle></FaRegUserCircle>
              </Button>
              {!page ? (
                <></>
              ) : (
                <div className="bg-white border border-primary position-absolute p-8">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <Link to="/login">Login</Link>
                    </li>
                    <li className="list-group-item">
                      <Link to="/register">Sign Up</Link>
                    </li>
                    <li className="list-group-item">
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
