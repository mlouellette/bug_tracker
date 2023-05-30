import React, { useState, useEffect } from "react";
import TopNav from "../../components/topNav/TopNav.jsx";
import SideNavbar from "../../components/sideNav/SideNavbar.jsx";
import TicketList from "../../components/ticketList/TicketList.jsx";
import PieCharts from "../../components/pieCharts/PieCharts.tsx";
import Footer from "../../components/footer/Footer.jsx";
import InfoCard from '../../components/infoCard/InfoCard.jsx';

import ModalTicket from "../modalTicket/ModalTicket.jsx";
import ModalProject from "../modalProject/ModalProject.jsx";
import ProjectList from "../projectList/ProjectList.jsx"
import {ticketData} from "../fakedb/db.js"
import TeamTable from "../teamTable/TeamTable.jsx"
import styles from "./userTicket.module.css";
import { useNavigate } from 'react-router-dom';


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

export default function UserTicket() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()

  const handleToggle = () => {
    if (show === false) {
      return setShow(true)
    }
    setShow(prevShow => !prevShow);

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

            <MDBCol size="12">
            <ProjectList 
                    buttonAction={
                    {
                        columns: tickets.columns,
                        rows: tickets.rows
                        .filter(row => row.author === localStorage.getItem('name'))
                        .map(row => ({
                            ...row,
                            info: <center><button style={{backgroundColor: '#FF7630'}} onClick={() => navigate('/tickets')} className="btn btn-primary">. . .</button></center>,
                        }))
                    }
                    } 
                    className="bg-white" 
                    title={`${localStorage.getItem('name') ? localStorage.getItem('name') : "name"}'s Ticket List`}
                />
            </MDBCol>
 
              </MDBRow>
            </MDBContainer>
          </div>
          <div style={{bottom:-600}}>
            <Footer  />
          </div>
        </div>
      );
}
