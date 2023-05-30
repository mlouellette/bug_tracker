import React, { useState } from "react";
import "./SideNavbar.css";
import { useNavigate } from "react-router-dom";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

export default function SideNavbar() {
  const navigate = useNavigate();
  return (
    <div>
      <SideNav
        className="sidenav"
        onSelect={(selected) => {
          console.log(selected);
          navigate("/" + selected);
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav>
          <NavItem eventKey="home">
            <NavIcon>
              <i
                
                className="fa far-fw fa-home"
                style={{ color:"white", fontSize: "1.5em" }}
              ></i>
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="userticket">
            <NavIcon>
              <i
                className="fa far-regular fa-ticket"
                style={{ color:"white", fontSize: "1.5em" }}
              ></i>
            </NavIcon>
            <NavText>Tickets</NavText>
          </NavItem>
          <NavItem eventKey="admin">
            <NavIcon>
              <i
                className="fa far-regular fa-lock"
                style={{ color:"white", fontSize: "1.5em" }}
              ></i>
            </NavIcon>
            <NavText>Administration</NavText>
          </NavItem>
          <br />

          <NavItem eventKey="">
            <NavIcon>
              <i
                className="fa-solid fa-arrow-right-from-bracket"
                style={{ color:"white", fontSize: "1.5em" }}
              ></i>
            </NavIcon>
            <NavText>logout</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
