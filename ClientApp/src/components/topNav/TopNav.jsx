import React, { useState } from 'react';
import styles from "./TopNav.module.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bug from "../assets/bug.png";

export default function TopNav(props) {
    const [name, setName] = useState('');
    

    return (
        <>
            <Navbar className={styles.mainNav} bg="light">
                    <Container>
                    <Navbar.Brand href="#home">
                      <img style={{width:"10%", padding:5}} src={bug} />
                      {name !== '' ? name : 'User'}'s Dashboard
                    </Navbar.Brand>
                    </Container>
                </Navbar>
      
      </>
        
    )
}

