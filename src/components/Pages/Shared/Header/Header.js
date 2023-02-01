import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../UseContext/UseContext";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://dzxcaznxwznlwyyrunlw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6eGNhem54d3pubHd5eXJ1bmx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNzkwNTUsImV4cCI6MTk5MDc1NTA1NX0.lBUqrmQf61_AXrqX8KctmoUETGp7H9DnAm3zkzWUGH0"
);

const Header = ({ setModalShow }) => {
  const { user, handleChange } = useContext(UserContext);
  const [page, setPage] = useState(false);
  // console.log(handleChange);
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };
  // const [user, setUser] = useState({});
  const navigate = useNavigate();

  async function signOutUser() {
    await supabase.auth.signOut();
    navigate("/login");
    window.location.reload();
  }
  console.log(user);
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
              <Link to="/admin">Admin Panal</Link>
              {user ? (
                <Nav.Link>
                  <button onClick={() => signOutUser()}>LogOut</button>
                </Nav.Link>
              ) : (
                <></>
              )}
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

            <Form.Select
              aria-label="Default select example"
              className="w-25"
              onChange={(e) => handleChange(e)}
            >
              {/* <option>Open this select menu</option> */}
              <option value=" Arbitrum Rinkeby"> Arbitrum Rinkeby</option>
              <option value=" Avalanche Fuji"> Avalanche Fuji</option>
              <option value="BNB Chain Testnet">BNB Chain Testnet</option>
              <option value="Ethereum Rinkeby">Ethereum Rinkeby</option>
              <option value=" Fantom Testnet"> Fantom Testnet</option>
              <option value="Harmony Testnet"> Harmony Testnet</option>
              <option value="POA Network Sokol"> POA Network Sokol</option>
              <option value=" Polygon Mumbai"> Polygon Mumbai</option>
            </Form.Select>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Connect Wallet
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
