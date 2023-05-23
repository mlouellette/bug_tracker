import React, {useState} from 'react';
import styles from './SideNavbar.css'
import { useNavigate } from 'react-router-dom'

import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText
  } from "@trendmicro/react-sidenav";

  import "@trendmicro/react-sidenav/dist/react-sidenav.css"

export default function SideNavbar() {
    const navigate = useNavigate();
    return (
        <div >
            <SideNav style={{ margin:"6% 5% 1% 1%", borderRadius: 5 }}
            onSelect={selected => {
                console.log(selected)
                navigate('/' + selected)
            }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                    <NavIcon><i className='fa far-fw fa-home' style={{fontSize:'1.5em'}}></i></NavIcon>
                    <NavText>Home</NavText>
                    </NavItem>
                    <NavItem eventKey="tickets">
                    <NavIcon><i className='fa far-regular fa-ticket' style={{fontSize:'1.5em'}}></i></NavIcon>
                    <NavText>Tickets</NavText>
                    </NavItem>
                    <NavItem eventKey="administration">
                    <NavIcon><i className='fa far-regular fa-lock' style={{fontSize:'1.5em'}}></i></NavIcon>
                    <NavText>Administration</NavText>
                    </NavItem>
                    <br/>

                    <NavItem eventKey="logout">
                    <NavIcon><i className='fa-solid fa-arrow-right-from-bracket' style={{fontSize:'1.5em'}}></i></NavIcon>
                    <NavText>logout</NavText>
                    </NavItem>
                </SideNav.Nav>
                    
            </SideNav>
        </div>
            )
    
}