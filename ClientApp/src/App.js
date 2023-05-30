import { useState } from 'react'


import styles from "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Login  from './components/login/Login.jsx';
import Home  from './components/home/Home.jsx';

import TopNav from './components/topNav/TopNav.jsx';
import SideNavbar from './components/sideNav/SideNavbar.jsx';
import ProjectList from './components/projectList/ProjectList.jsx';
import PieCharts from './components/pieCharts/PieCharts.tsx';
import TicketList from './components/ticketList/TicketList.jsx';
import Ticket from './components/ticket/Ticket.jsx';
import TeamTable from './components/teamTable/TeamTable.jsx';
import InfoCard from './components/infoCard/InfoCard.jsx';
import UserTicket from './components/userTicket/UserTicket.jsx';
import Administration from './components/administration/Administration.jsx';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/topnav" element={<TopNav />} />
        <Route path="/sidenav" element={<SideNavbar />} />
        <Route path="/projectlist" element={<ProjectList />} />
        <Route path="/ticketlist" element={<TicketList />} />
        <Route path="/piechart" element={<PieCharts />} />
        <Route path="/tickets" element={<Ticket />} />
        <Route path="/teamtable" element={<TeamTable />} />
        <Route path="/infocard" element={<InfoCard />} />
        <Route path="/userticket" element={<UserTicket />} />
        <Route path="/admin" element={<Administration />} />
      </Routes>
    
  ) 

}

export default App
