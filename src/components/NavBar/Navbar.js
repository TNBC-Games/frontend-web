import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { ReactComponent as TnbcIcon } from "../../assets/tnbcLogo.svg";
import { useLocation } from 'react-router';
import { Dropdown } from '../HomePage/ChooseGames';
import {ReactComponent as GlobeIcon} from "../../assets/GlobeIcon.svg";




function Navbarr() {
    // const loggedIn = useSelector(state=> state.signupState.userLoggedIn);
    const superAdminStatus = useSelector(state=> state.signupState.userDetails.user.superAdmin)
    // const userEmail = sessionStorage.getItem("userEmail");
    const accessToken = sessionStorage.getItem("accesstoken");
    const location = useLocation();
    const [signupActive, setSignUpActive] = useState(false);
    const [loginActive, setLoginActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showDesktopDropDown, setShowDesktopDropDown] = useState(false);
    const [showMobileDropDown, setShowMobileDropDown] = useState(false);
    const [showDesktopMore, setShowDesktopMore] = useState(false);
    const [showMobileMore, setShowMobileMore] = useState(false);
    const history = useHistory();

    console.log(signupActive, loginActive)

    // var className = "black-bg";
    // var scrollTrigger = 10;

    // const Shopper = <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    // <path d="M10 28C11.1046 28 12 27.1046 12 26C12 24.8954 11.1046 24 10 24C8.89543 24 8 24.8954 8 26C8 27.1046 8.89543 28 10 28Z" fill="white"/>
    // <path d="M24 28C25.1046 28 26 27.1046 26 26C26 24.8954 25.1046 24 24 24C22.8954 24 22 24.8954 22 26C22 27.1046 22.8954 28 24 28Z" fill="white"/>
    // <path d="M28 5.00002H5.82L5 0.80002C4.95325 0.570744 4.82758 0.365123 4.64486 0.218948C4.46214 0.0727735 4.23395 -0.0046976 4 2.03336e-05H0V2.00002H3.18L7 21.2C7.04675 21.4293 7.17242 21.6349 7.35514 21.7811C7.53786 21.9273 7.76605 22.0047 8 22H26V20H8.82L8 16H26C26.2312 16.0057 26.4571 15.931 26.6395 15.7888C26.8218 15.6466 26.9492 15.4456 27 15.22L29 6.22002C29.0335 6.07165 29.0327 5.91758 28.9977 5.76955C28.9627 5.62152 28.8944 5.48343 28.798 5.36579C28.7015 5.24815 28.5795 5.15405 28.4413 5.09067C28.303 5.02729 28.1521 4.99628 28 5.00002ZM25.2 14H7.62L6.22 7.00002H26.75L25.2 14Z" fill="white"/>
    // </svg>

    //window.onscroll = function() {
    // We add pageYOffset for compatibility with IE.
    // if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger || isMobile) {
    //     document.getElementsByClassName("navv")[0].classList.add(className);
    // } else {
    //     document.getElementsByClassName("navv")[0].classList.remove(className);
    // }
    // };



   
    const handleResize = ()=>{
        const windowWidth = window.innerWidth
       if (windowWidth >= 1350){
           setIsMobile(false)
       }
    }

    

    window.addEventListener('resize', handleResize)

    function showDropDown(){
        const windowWidth = window.innerWidth;
        if(windowWidth >= 1350){
            setShowDesktopMore(false)
            setShowDesktopDropDown(true)
        } else{
            setShowDesktopMore(false)
            setShowDesktopDropDown(false)
            setShowMobileDropDown(true)
            setShowMobileMore(false)
        }  
    }

    function showMore(){
        const windowWidth = window.innerWidth;
        if(windowWidth >= 1350){
            setShowDesktopDropDown(false)
            setShowDesktopMore(!showDesktopMore)
        } else{
            setShowDesktopDropDown(false)
            setShowDesktopMore(false)
            setShowMobileMore(!showMobileMore)
            setShowMobileDropDown(false)
        }  

    }

    function logout(){
        sessionStorage.removeItem("accesstoken")
        sessionStorage.removeItem("userEmail")
        history.push("/")
    }

    function gotoFaq(){
        setShowDesktopMore("")
        history.push("/faq")
    }

    function gotoLeaderboard(){
        setShowDesktopMore("")
        history.push("/leaderboard")
    }

    useEffect(() => {
        if(location.pathname === "/signup"){
            setSignUpActive(true)
            setLoginActive(false)
        }else if(location.pathname === "/login") {
            setLoginActive(true)
            setSignUpActive(false)


        }
    }, [location])

    return (        
        <div className={isMobile ? "navv black-bg" : "navv"}>
        <nav className ={isMobile ? "navbar width-100vw" : "navbar"}>
            <div className = "navbar-heading">
                <div className = "navbar-icon">
                     <TnbcIcon/>
                </div>
                <div className = "navbar-name">TNBC Games</div>
             </div>
             
            <ul className={isMobile ? "nav-links-mobile " : " nav-links"}>
                <div className="flexible-flex">
                    <Link to = "/">
                        <li className = {`${isMobile ? " ": " mr-4 mt-2"} menu-button `} onClick={()=> setIsMobile(false)}> Home </li>
                    </Link>
                    <Link to ="/my-tournament">
                        <li className ={`${isMobile ? " ": " mr-4 mt-2"} menu-button `} onClick={()=> setIsMobile(false)}> Tournament </li>
                    </Link>
                    <Link to ="/shop">
                        <li className = {`${isMobile ? " ": " mr-4  mt-2"} menu-button `} onClick={()=> setIsMobile(false)}> Shop </li>
                    </Link>
                    <div className ="flex-column mt-0" >
                        <div className = {`${isMobile ? " ": " mr-4  mt-2 "} menu-button `} onClick ={showMore} onMouseEnter={showMore} onMouseLeave={()=> setShowDesktopDropDown(false)}> More </div>
                        {showDesktopMore && (
                            <div className="flex justify-center">
                                <MoreDropdown>
                                    <div className= "dropdown-inner">
                                        <div className = "dropdown-item" onClick= {gotoFaq}>
                                            <div className = "inner-item"> Faq</div>
                                        </div>
                                        <div className = "dropdown-item" onClick= {gotoLeaderboard}>
                                            <div className = "inner-item"> Leaderboard</div>
                                        </div>
                                    </div>
                                </MoreDropdown>
                            </div>
                        )}
                        {showMobileMore &&(
                            <MobileMore onClick= {()=> setIsMobile(false)}>
                                <div className="single-item mb-2"  onClick= {gotoFaq}>
                                •     Faq
                                </div>
                                <div className="single-item mb-2" onClick= {gotoLeaderboard}>
                                •     Leaderboard
                                </div>
                            </MobileMore>
                        )}
                    </div>
                </div>
                
                {!accessToken &&(<div className="flexible-flex"  onClick= {()=> setIsMobile(false)}> 
                     <Link to ="/login"> 
                        <li className = {`${isMobile ? " ": " mr-1 ml-4 mt-2"} sign-in  `}> <span>Sign in </span></li>
                     </Link>
                     <Link to ="/signup">
                        <li className =  {`${isMobile ? "join-freee ": "join-free ml-2 mt-2 "} float-btn `}> Join Free </li>
                    </Link>
                    </div>
                )} 
                {accessToken &&(<>
                    <div className={`${isMobile ? "": "mr-0 "} loggedIn justify-center mt-4`}>
                        <div className="mx-1 cursor-pointer">
                            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 28C11.1046 28 12 27.1046 12 26C12 24.8954 11.1046 24 10 24C8.89543 24 8 24.8954 8 26C8 27.1046 8.89543 28 10 28Z" fill="white"/>
                                <path d="M24 28C25.1046 28 26 27.1046 26 26C26 24.8954 25.1046 24 24 24C22.8954 24 22 24.8954 22 26C22 27.1046 22.8954 28 24 28Z" fill="white"/>
                                <path d="M28 5.00002H5.82L5 0.80002C4.95325 0.570744 4.82758 0.365123 4.64486 0.218948C4.46214 0.0727735 4.23395 -0.0046976 4 2.03336e-05H0V2.00002H3.18L7 21.2C7.04675 21.4293 7.17242 21.6349 7.35514 21.7811C7.53786 21.9273 7.76605 22.0047 8 22H26V20H8.82L8 16H26C26.2312 16.0057 26.4571 15.931 26.6395 15.7888C26.8218 15.6466 26.9492 15.4456 27 15.22L29 6.22002C29.0335 6.07165 29.0327 5.91758 28.9977 5.76955C28.9627 5.62152 28.8944 5.48343 28.798 5.36579C28.7015 5.24815 28.5795 5.15405 28.4413 5.09067C28.303 5.02729 28.1521 4.99628 28 5.00002ZM25.2 14H7.62L6.22 7.00002H26.75L25.2 14Z" fill="white"/>
                            </svg>
                        </div>

                        <div className="mx-2 cursor-pointer">
                            <svg width="30" height="28" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.64 11.391C20.2379 11.391 19.9115 11.0533 19.9115 10.6371C19.9115 7.75035 18.8258 5.03749 16.854 2.99603C16.5695 2.70155 16.5695 2.22413 16.854 1.92966C17.1386 1.63518 17.5999 1.63518 17.8846 1.92966C20.1312 4.25547 21.3684 7.34839 21.3684 10.6371C21.3684 11.0533 21.0421 11.391 20.64 11.391V11.391Z" fill="white"/>
                                <path d="M0.728451 11.3911C0.326344 11.3911 0 11.0534 0 10.6373C0 7.34851 1.23744 4.25559 3.48486 1.9307C3.76941 1.63622 4.23092 1.63622 4.51547 1.9307C4.80002 2.22517 4.80002 2.70278 4.51547 2.99725C2.54282 5.0376 1.4569 7.75047 1.4569 10.6373C1.4569 11.0534 1.13056 11.3911 0.728451 11.3911Z" fill="white"/>
                                <path d="M10.6833 24.7093C8.6747 24.7093 7.04102 23.0187 7.04102 20.94C7.04102 20.5239 7.36736 20.1862 7.76947 20.1862C8.17158 20.1862 8.49792 20.5239 8.49792 20.94C8.49792 22.1875 9.47785 23.2016 10.6833 23.2016C11.8885 23.2016 12.8687 22.1875 12.8687 20.94C12.8687 20.5239 13.195 20.1862 13.5971 20.1862C13.9992 20.1862 14.3256 20.5239 14.3256 20.94C14.3256 23.0187 12.6919 24.7093 10.6833 24.7093V24.7093Z" fill="white"/>
                                <path d="M18.6963 21.6939H2.67053C1.73312 21.6939 0.970703 20.9049 0.970703 19.9349C0.970703 19.4202 1.18732 18.9328 1.56523 18.598C3.0424 17.3064 3.88449 15.4289 3.88449 13.4397V10.6372C3.88449 6.75749 6.93432 3.60126 10.6834 3.60126C14.4324 3.60126 17.4822 6.75749 17.4822 10.6372V13.4397C17.4822 15.4289 18.3243 17.3064 19.7919 18.591C20.1794 18.9328 20.396 19.4202 20.396 19.9349C20.396 20.9049 19.6336 21.6939 18.6963 21.6939V21.6939ZM10.6834 5.10898C7.73746 5.10898 5.34138 7.58865 5.34138 10.6372V13.4397C5.34138 15.873 4.31096 18.1708 2.51509 19.7419C2.48113 19.7721 2.4276 19.8344 2.4276 19.9349C2.4276 20.0715 2.53839 20.1862 2.67053 20.1862H18.6963C18.8283 20.1862 18.9391 20.0715 18.9391 19.9349C18.9391 19.8344 18.8858 19.7721 18.8536 19.7439C17.0557 18.1708 16.0253 15.873 16.0253 13.4397V10.6372C16.0253 7.58865 13.6292 5.10898 10.6834 5.10898V5.10898Z" fill="white"/>
                                <path d="M10.6835 5.10897C10.2814 5.10897 9.95508 4.77124 9.95508 4.35511V1.33967C9.95508 0.923543 10.2814 0.585815 10.6835 0.585815C11.0856 0.585815 11.412 0.923543 11.412 1.33967V4.35511C11.412 4.77124 11.0856 5.10897 10.6835 5.10897Z" fill="white"/>
                            </svg>
                        </div>

                        <div className="align-center flex-column mt-0 cursor-pointer">
                            <div className ="mx-1" onClick={showDropDown} onMouseEnter={showDropDown}>
                                <div className="profile-img">

                                </div>
                            </div>
                            {showDesktopDropDown && (
                                <ProfileDropdown>
                                    <div className= "dropdown-inner">
                                        <div className = "dropdown-item" onClick= {()=> setShowDesktopDropDown(false)}>
                                            <div className = "inner-item" onClick={()=> history.push("/profile")}> Profile</div>
                                            <div className = "inner-item"> My Cart</div>
                                            <div className = "inner-item" onClick={()=> history.push("/my-tournament")}> My Tournaments</div>
                                        </div>
                                        <div className = "dropdown-item" onClick= {()=> setShowDesktopDropDown(false)}> 
                                            <div className = "inner-item"  onClick= {()=> history.push("/my-wallet")}> Wallet</div>
                                            <div className = "inner-item"  onClick={()=> history.push("/setting")}> Account Settings</div>
                                        </div>
                                        <div className = "dropdown-item" onClick= {()=> setShowDesktopDropDown(false)}> 
                                            <div className = "inner-item justify-space"> 
                                                <div>Language</div> 
                                                <div className="mr-2 sm-text flex">English 
                                                    <div className="ml-2"><GlobeIcon/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "dropdown-item" onClick= {()=> setShowDesktopDropDown(false)}>
                                            <div className = "inner-item"> Refer & earn</div>
                                            <div className = "inner-item"> Help</div>
                                            {superAdminStatus && (<div className = "inner-item" onClick ={()=> history.push("/admin")}> Admin</div>)}
                                            <div className = "inner-item" onClick ={logout}> Log out</div>
                                        </div>
                                    </div>

                                </ProfileDropdown>
                            )}
                            
                        </div>
                        


                    </div>
                    {showMobileDropDown &&(
                        <MobileMore onClick= {()=> setIsMobile(false)}>
                            <div className="single-item flex mb-2 mt-4" onClick={()=> history.push("/profile")}>
                                •     Profile
                            </div>
                            <div className="single-item flex mb-2"  onClick= {()=> setShowMobileDropDown(false)}>
                                •      My Cart
                            </div>
                            <div className="single-item flex mb-2" onClick={()=> history.push("/my-tournament")}>
                                •      My Tournaments
                            </div>
                            <div className="single-item flex mb-2" onClick= {()=> history.push("/my-wallet")}>
                                •     Wallet
                            </div>
                            <div className="single-item flex mb-2"  onClick={()=> history.push("/setting")}>
                                •     Account Settings
                            </div>
                            <div className="single-item flex mb-2" onClick= {()=> setShowMobileDropDown(false)}>
                                •     Language
                            </div>
                            <div className="single-item flex mb-2" onClick= {()=> setShowMobileDropDown(false)}>
                                •     Help
                            </div>
                            {superAdminStatus && (
                                <div className="single-item flex mb-2" onClick ={()=> history.push("/admin")}>
                                    •     Admin
                                </div>
                            )}
                            <div className="single-item flex mb-2" onClick= {()=> setShowMobileDropDown(false)}>
                                •     Refer & earn
                            </div>
                            <div className="single-item flex mb-2" onClick= {()=> setShowMobileDropDown(false)}>
                                •     Forgot Password
                            </div>
                            <div className="single-item flex mb-2" onClick ={logout}>
                                •    Log out
                            </div>
                        </MobileMore>
                    )}
                    </>
                )}       
            </ul>
            <button className ="mobile-menu-icon">
                {isMobile ? <i className ="fas fa-times" onClick={()=> setIsMobile(false)}></i>:<i className="fas fa-bars"onClick={()=> setIsMobile(true)}></i>}
            </button>
        </nav>
        </div>
        // <div >
        // <div className = "nav-bar">
        //     <div className = "navbar-heading">
        //         <div className = "navbar-icon">
        //             <TnbcIcon/>
        //         </div>
        //         <div className = "navbar-name">TNBC Games</div>
        //     </div> 
        //     <div className ="menu-icon"></div>
        //     <div className = "navbar-section">
        //         <Link to = "/">
        //             <div className = "menu-button mr-4"> Home </div>
        //         </Link>
        //         <Link to ="/my-tournament">
        //         <   div className = "menu-button mr-4"> Tournament </div>
        //         </Link>
        //         <Link to ="/shop">
        //             <div className = "menu-button mr-4"> Shop </div>
        //         </Link>
        //        {/* // <Link> */}
        //             <div className = "menu-button mr-4 "> More </div>
        //         {/* </Link> */}

        //         {!userEmail &&(<>
        //             <Link to ="/login">
        //             <   div className = {`${loginActive?"join-free ": "sign-in "} ml-40 float-btn `}> <span>Sign in </span></div>
        //             </Link>
        //             <Link to ="/signup">
        //                 <div className = {`${signupActive?"join-free ": "sign-in "} ml-40 float-btn `}> Join Free </div>
        //             </Link>
        //             </>
        //         )}      
               
        //     </div>  
        //     {userEmail&& (
        //         <div className="flex">
        //             <div className="mx-3">
        //                 <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M10 28C11.1046 28 12 27.1046 12 26C12 24.8954 11.1046 24 10 24C8.89543 24 8 24.8954 8 26C8 27.1046 8.89543 28 10 28Z" fill="white"/>
        //                     <path d="M24 28C25.1046 28 26 27.1046 26 26C26 24.8954 25.1046 24 24 24C22.8954 24 22 24.8954 22 26C22 27.1046 22.8954 28 24 28Z" fill="white"/>
        //                     <path d="M28 5.00002H5.82L5 0.80002C4.95325 0.570744 4.82758 0.365123 4.64486 0.218948C4.46214 0.0727735 4.23395 -0.0046976 4 2.03336e-05H0V2.00002H3.18L7 21.2C7.04675 21.4293 7.17242 21.6349 7.35514 21.7811C7.53786 21.9273 7.76605 22.0047 8 22H26V20H8.82L8 16H26C26.2312 16.0057 26.4571 15.931 26.6395 15.7888C26.8218 15.6466 26.9492 15.4456 27 15.22L29 6.22002C29.0335 6.07165 29.0327 5.91758 28.9977 5.76955C28.9627 5.62152 28.8944 5.48343 28.798 5.36579C28.7015 5.24815 28.5795 5.15405 28.4413 5.09067C28.303 5.02729 28.1521 4.99628 28 5.00002ZM25.2 14H7.62L6.22 7.00002H26.75L25.2 14Z" fill="white"/>
        //                 </svg>
        //             </div>

        //             <div className="mx-3">
        //                 <svg width="30" height="28" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M20.64 11.391C20.2379 11.391 19.9115 11.0533 19.9115 10.6371C19.9115 7.75035 18.8258 5.03749 16.854 2.99603C16.5695 2.70155 16.5695 2.22413 16.854 1.92966C17.1386 1.63518 17.5999 1.63518 17.8846 1.92966C20.1312 4.25547 21.3684 7.34839 21.3684 10.6371C21.3684 11.0533 21.0421 11.391 20.64 11.391V11.391Z" fill="white"/>
        //                     <path d="M0.728451 11.3911C0.326344 11.3911 0 11.0534 0 10.6373C0 7.34851 1.23744 4.25559 3.48486 1.9307C3.76941 1.63622 4.23092 1.63622 4.51547 1.9307C4.80002 2.22517 4.80002 2.70278 4.51547 2.99725C2.54282 5.0376 1.4569 7.75047 1.4569 10.6373C1.4569 11.0534 1.13056 11.3911 0.728451 11.3911Z" fill="white"/>
        //                     <path d="M10.6833 24.7093C8.6747 24.7093 7.04102 23.0187 7.04102 20.94C7.04102 20.5239 7.36736 20.1862 7.76947 20.1862C8.17158 20.1862 8.49792 20.5239 8.49792 20.94C8.49792 22.1875 9.47785 23.2016 10.6833 23.2016C11.8885 23.2016 12.8687 22.1875 12.8687 20.94C12.8687 20.5239 13.195 20.1862 13.5971 20.1862C13.9992 20.1862 14.3256 20.5239 14.3256 20.94C14.3256 23.0187 12.6919 24.7093 10.6833 24.7093V24.7093Z" fill="white"/>
        //                     <path d="M18.6963 21.6939H2.67053C1.73312 21.6939 0.970703 20.9049 0.970703 19.9349C0.970703 19.4202 1.18732 18.9328 1.56523 18.598C3.0424 17.3064 3.88449 15.4289 3.88449 13.4397V10.6372C3.88449 6.75749 6.93432 3.60126 10.6834 3.60126C14.4324 3.60126 17.4822 6.75749 17.4822 10.6372V13.4397C17.4822 15.4289 18.3243 17.3064 19.7919 18.591C20.1794 18.9328 20.396 19.4202 20.396 19.9349C20.396 20.9049 19.6336 21.6939 18.6963 21.6939V21.6939ZM10.6834 5.10898C7.73746 5.10898 5.34138 7.58865 5.34138 10.6372V13.4397C5.34138 15.873 4.31096 18.1708 2.51509 19.7419C2.48113 19.7721 2.4276 19.8344 2.4276 19.9349C2.4276 20.0715 2.53839 20.1862 2.67053 20.1862H18.6963C18.8283 20.1862 18.9391 20.0715 18.9391 19.9349C18.9391 19.8344 18.8858 19.7721 18.8536 19.7439C17.0557 18.1708 16.0253 15.873 16.0253 13.4397V10.6372C16.0253 7.58865 13.6292 5.10898 10.6834 5.10898V5.10898Z" fill="white"/>
        //                     <path d="M10.6835 5.10897C10.2814 5.10897 9.95508 4.77124 9.95508 4.35511V1.33967C9.95508 0.923543 10.2814 0.585815 10.6835 0.585815C11.0856 0.585815 11.412 0.923543 11.412 1.33967V4.35511C11.412 4.77124 11.0856 5.10897 10.6835 5.10897Z" fill="white"/>
        //                 </svg>
        //             </div>

        //             <div className ="mx-3">
        //                 <div className="profile-img">

        //                 </div>
        //             </div>


        //         </div>

        //     )}  
        // </div>
        // </div>
    )
}

export default Navbarr;
const ProfileDropdown = styled(Dropdown)`
    position:absolute;
    width:191px;
    height:392px;
    top:80px;
    right:0px;
    

    .dropdown-inner{
        width:189px;
        height:390px;
        justify-content: flex-start;
    }
    .dropdown-item{
        display: block;
        height:auto;
        padding-left: 0px !important;
        :hover{
            background-color: transparent !important;
        }
    }
    .inner-item{
        display:flex;
        align-items:center;
        height:34px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 27px;
        color: white;
        padding-left: 25px !important;
        :hover{
            background-color:#FACF5A;
        }
    }
    @media only screen and (max-width: 1350px){
        display:none;
    }
`;

const MoreDropdown = styled(ProfileDropdown)`
    position:relative;
    top:17px;
    right:0px;
    height: 114px;
    .dropdown-inner{
        height:112px;
    }
`;
const MobileMore = styled.div`
    max-height: 500px;
    overflow-y: scroll;
    display: flex;
    width: 70%;
    margin:auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .single-item{
        display: flex;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        height: 30px;
        font-size: 18px;
        color: grey;
        @media only screen and (max-width: 1350px){
            font-size:15px;
            height: 20px;
        }
    }
    @media only screen and (min-width: 1350px){
        display:none;
    }

`;
