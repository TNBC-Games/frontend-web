import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as TnbcIcon } from "../../assets/tnbcLogo.svg";
import { SIGNUP_STARTED } from '../../redux/types/signup.types';



function Navbar() {
    const loggedIn = useSelector(state=> state.signupState.userLoggedIn)
    const userId = sessionStorage.getItem("TnbcID");

    var className = "black-bg";
    var scrollTrigger = 60;

    window.onscroll = function() {
    // We add pageYOffset for compatibility with IE.
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.getElementsByClassName("nav-bar")[0].classList.add(className);
    } else {
        document.getElementsByClassName("nav-bar")[0].classList.remove(className);
    }
    };


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
                <Link to ="/my-tournament">
                <   div className = "menu-button mr-4"> Tournament </div>
                </Link>
                <Link to ="/shop">
                    <div className = "menu-button mr-4"> Shop </div>
                </Link>
                <Link to ="/shop">
                    <div className = "menu-button mr-4 "> More </div>
                </Link>
                {loggedIn? (
                    <div></div>

                ):(<>
                    <Link to ="/login">
                    <   div className = "sign-in ml-40 float-btn"> <span>Sign in </span></div>
                    </Link>
                    <Link to ="/signup">
                        <div className = "join-free ml-40 float-btn"> Join Free </div>
                    </Link>
                    </>
                )}
            </div>          
        </div>
        </div>
    )
}

export default Navbar
