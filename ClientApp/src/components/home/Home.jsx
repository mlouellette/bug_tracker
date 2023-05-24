import React, { useState } from 'react';
import TopNav from '../../components/topNav/TopNav.jsx';
import SideNavbar from '../../components/sideNav/SideNavbar.jsx';
import ProjectList from '../../components/projectList/ProjectList.jsx'
import PieCharts from '../../components/pieCharts/PieCharts.tsx'

export default function Home(){
    return (
        <>
           <TopNav/>
           <SideNavbar/> 
           <div style={{position:'absolute', left:'20%', top:'13%', width:'18%', height:'25%'}}>
                <PieCharts />
            </div>
           <div style={{position:'absolute',top:'13%',right:'10%', width:'50%', height:'25%'}}>
           <ProjectList />
           </div>
        </>
    )

}

