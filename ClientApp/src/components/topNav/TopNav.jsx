import React, { useState } from "react";
import styles from "./TopNav.module.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import bug from "../assets/bug.png";

export default function TopNav() {
  return (
    <>
      <Navbar style={{ height: 300 }} className={styles.mainNav}>
        <Container>
          <Navbar.Brand style={{ top: 0, position: "absolute" }} href="#home">
            <img style={{ top: 0, width: "10%", padding: 5 }} src={bug} />
            {localStorage.getItem("name")
              ? localStorage.getItem("name")
              : "name"}
            's Dashboard
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
