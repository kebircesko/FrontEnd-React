import React from 'react'
import { Link } from 'react-router-dom'; // përdorim Link në vend të href,per kete duhet me install npm install react-router-dom
import './NavBar.css';

const Navbar = () => { 
    
    //const style = {color: 'blue', backgroundColor: 'lightblue' } 
    return ( 
        <div className="navbar">
        <h1>NavBar</h1>
        <div className="links">
            <Link to="/home">Ballina</Link>{/*kjo eshte pjesa qe lidhet me komponentin Home*/}
            <Link to="/about">Rreth Nesh</Link>{/*kjo eshte pjesa qe lidhet me komponentin About*/}
            <Link to="/project">Projektet</Link>{/*kjo eshte pjesa qe lidhet me komponentin Project*/}
        </div>
    </div>
     );
}
export default Navbar;
