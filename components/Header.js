import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header__Section} >  
    <section >
        <section className= {styles.image} >         
             <div className={styles.box} >      
                  <img  width = "1200" height = "150"  src="/assets/Banner__1.jpg" alt="logo1" />   
             </div> 
          </section>                    
        </section>
                              
        <Navbar className={styles.navbar}  expand="md" >
        <div className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav " className={styles.navbarnav} >
              <Nav className="nav-item mr-auto px-4 py-3  ">
                <Nav.Link  className={styles.navlink} href="/home">Home</Nav.Link> 
                <Nav.Link  className={styles.navlink}  href="/assets/List of Govt I.T.I.s_2020.pdf">Govt ITIs  </Nav.Link>      
                <Nav.Link className={styles.navlink} href="/placementdashBoard">Placement DashBoard</Nav.Link>
                 <Nav.Link className={styles.navlink} href="/placementabstractreport">Placement Abstract Report</Nav.Link>
                 <Nav.Link className={styles.navlink} href="/jobseekersreport">Job Seekers Report</Nav.Link>
                 <Nav.Link className={styles.navlink} href="/placementopen">Placement Candidate Profile Update</Nav.Link>
              </Nav>
            </Navbar.Collapse>          
        </div>
    </Navbar>          
</div>
  )
}

export default Header