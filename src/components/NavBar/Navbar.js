import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as TnbcIcon } from "../../assets/tnbcLogo.svg"


function Navbar() {

    return (
        <div >
        <div className = "nav-bar">
            <div className = "navbar-heading">
                <div className = "navbar-icon">
                    <TnbcIcon/>
                </div>
                <div className = "navbar-name">TNBC Games</div>
            </div> 
            <div className ="menu-icon"></div>
            <div className = "navbar-section">
                <Link to = "/">
                    <div className = "menu-button mr-4"> Home </div>
                </Link>
                <Link to ="/tournament">
                <   div className = "menu-button mr-4"> Tournament </div>
                </Link>
                <Link to ="/shop">
                    <div className = "menu-button mr-4"> Shop </div>
                </Link>
                <Link to ="/shop">
                    <div className = "menu-button mr-4 "> More </div>
                </Link>
                <Link to ="/login">
                <   div className = "sign-in ml-40 float-btn"> <span>Sign in </span></div>
                </Link>
                <Link to ="/signup">
                    <div className = "join-free ml-40 float-btn"> Join Free </div>
                </Link>
            </div>          
        </div>
        </div>
    )
}

export default Navbar
