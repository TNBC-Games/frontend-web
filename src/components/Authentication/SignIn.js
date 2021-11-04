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
        console.log("====>",event.target.value)
    }

    function handleInputPasswordChange(event) {
        setUserInfo({ ...userInfo, password: event.target.value });
        console.log("====>",event.target.value)
    }

    return (
        <div className = "signup-page fadeInUp animated">
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

                        <div className ="form-section float-btn">
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
