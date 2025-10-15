import React from 'react'
import { Link } from 'react-router-dom'; // përdorim Link në vend të href,per kete duhet me install npm install react-router-dom
import './Navbar.css';

const Navbar = () => { 
    
    //const style = {color: 'blue', backgroundColor: 'lightblue' } 
    return ( 
        <div className="navbar">
        <h1>Menu</h1>
        <div className="links">
            <Link to="/home">Home</Link>{/*kjo eshte pjesa qe lidhet me komponentin Home*/}
            <Link to="/about">About</Link>{/*kjo eshte pjesa qe lidhet me komponentin About*/}
            <Link to="/project">Project</Link>{/*kjo eshte pjesa qe lidhet me komponentin Project*/}
        </div>
    </div>
     );
}
 
export default Navbar;