import React, { useState } from 'react';
import Input from '../input';

function SignIn() {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    // for validating email address

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    function handleInputEmailChange(event) {
        setUserInfo({ ...userInfo, email: event.target.value });
    }

    function handleInputPasswordChange(event) {
        setUserInfo({ ...userInfo, password: event.target.value });
    }

    async function loginUser(){

    }

    return (
        <div className = "signup-page fadeInUp animated leaderboard-page">
            <div>
                <div className = "tnbc-comp">
                    <div className ="signup-heading"><p>Login</p></div>
                    <div >
                        <Input
                            className= "formInput mt-30"
                            placeholder="Email address "
                            type= "email"
                            onChange ={handleInputEmailChange}
                            value = {userInfo.email}
                            min={2}
                        />
                        <Input
                            className= "formInput mt-30"
                            placeholder="Password"
                            type= "text"
                            onChange ={handleInputPasswordChange}
                            value = {userInfo.password}
                            min={2}
                            autoComplete="off"
                            autoCorrect="new-password"
                            autoCapitalize="off"
                            spellCheck="false"
                        />

                        <div className ="form-section float-btn" onClick={loginUser}>
                            <div className = "sign-up-btn mt-30">
                                <p>Login</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
