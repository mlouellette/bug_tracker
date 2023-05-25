import React, { useState } from 'react';
import TopNav from '../../components/topNav/TopNav.jsx';
import SideNavbar from '../../components/sideNav/SideNavbar.jsx';
import ProjectList from '../../components/projectList/ProjectList.jsx'
import PieCharts from '../../components/pieCharts/PieCharts.tsx'
import Footer from '../../components/footer/Footer.jsx'
import styles from "./home.module.css";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default function Home() {
    return (
      <div>
        <TopNav />
          <SideNavbar className={styles.sideNavbar} />
        <div className={styles.contentWrapper}>
          <MDBContainer>
            <MDBRow>

              <MDBCol size="3" className={styles.pieChartsContainer}>
                <PieCharts />
              </MDBCol>
              <MDBCol size="1"></MDBCol>

              <MDBCol size="8" className={styles.projectListContainer}>
              
                <ProjectList />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>


        <Footer />

      </div>
    );
  }