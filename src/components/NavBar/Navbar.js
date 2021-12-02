import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as TnbcIcon } from "../../assets/tnbcLogo.svg";
import { SIGNUP_STARTED } from '../../redux/types/signup.types';
import { useLocation } from 'react-router';



function Navbar() {
    const loggedIn = useSelector(state=> state.signupState.userLoggedIn)
    const userId = sessionStorage.getItem("TnbcID");
    const location = useLocation();
    const [signupActive, setSignUpActive] = useState(false)
    const [loginActive, setLoginActive] = useState(false)

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

    useEffect(() => {
        if(location.pathname === "/signup"){
            setSignUpActive(true)
            setLoginActive(false)
        }else if(location.pathname === "/login") {
            setLoginActive(true)
            setSignUpActive(false)


        }
        console.log(location.pathname);
    }, [location])


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
                    <   div className = {`${loginActive?"join-free ": "sign-in "} ml-40 float-btn `}> <span>Sign in </span></div>
                    </Link>
                    <Link to ="/signup">
                        <div className = {`${signupActive?"join-free ": "sign-in "} ml-40 float-btn `}> Join Free </div>
                    </Link>
                    </>
                )}
            </div>          
        </div>
        </div>
    )
}

export default Navbar
