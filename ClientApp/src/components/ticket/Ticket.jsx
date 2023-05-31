import React, { useState, useEffect } from "react";
import TopNav from "../../components/topNav/TopNav.jsx";
import SideNavbar from "../../components/sideNav/SideNavbar.jsx";
import TicketList from "../../components/ticketList/TicketList.jsx";
import PieCharts from "../../components/pieCharts/PieCharts.tsx";
import Footer from "../../components/footer/Footer.jsx";
import InfoCard from "../../components/infoCard/InfoCard.jsx";

import ModalTeam from "../modalTeam/ModalTeam.jsx";
import ModalProject from "../modalProject/ModalProject.jsx";
import ProjectList from "../projectList/ProjectList.jsx";
import { ticketData } from "../fakedb/db.js";
import TeamTable from "../teamTable/TeamTable.jsx";

import styles from "./ticket.module.css";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Ticket() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleToggle = () => {
    if (show === false) {
      return setShow(true);
    }
    setShow((prevShow) => !prevShow);
  };

  const [tickets, setTickets] = useState(null);

  useEffect(() => {
    function getTickets() {
      setTickets(ticketData);
    }

    getTickets();
  }, []);

  if (!tickets) return null;

  return (
    <div>
      <TopNav />
      <SideNavbar className={styles.sideNavbar} />
      <div className={styles.contentWrapper}>
        <MDBContainer>
          <MDBRow>
            {/* -------------------------- upper row ----------------------------  */}
            <MDBCol size="3">
              <div style={{ position: "relative", marginTop: "-4rem" }}>
                <ModalTeam />
                <div className="mt-3">
                  <TeamTable />
                </div>
              </div>
            </MDBCol>

            <MDBCol size="1"></MDBCol>

            <MDBCol size="8">
              <ProjectList
                buttonAction={{
                  columns: tickets.columns,
                  rows: tickets.rows.map((row) => ({
                    ...row,
                    info: (
                      <center>
                        <button
                          onClick={handleToggle}
                          className="btn btn-link"
                          style={{color: '#FF7630'}}
                        >
                          . . .
                        </button>
                      </center>
                    ),
                  })),
                }}
                className="bg-white"
                title="Project's ticket list"
              />
            </MDBCol>

            {/* -------------------------- lower row ----------------------------  */}

            <MDBCol className="mt-5" size="12">
              {show && <InfoCard show={show} onHide={handleClose} />}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <Footer />
    </div>
  );
}
