import React from 'react';
import Input from '../input';
import {ReactComponent as DiscordLogo} from "../../assets/DiscordLogo.svg";
import {ReactComponent as GoogleLogo} from "../../assets/googleLogo.svg";

function SignUp() {
    return (
        <div className = "signup-page fadeInUp animated leaderboard-page">
            <div>
                <div className = "tnbc-comp">
                    <div className ="signup-heading"><p>Sign Up</p></div>
                    <div >
                        <Input
                            className= "formInput mt-30"
                            placeholder="Enter your Email address "
                            type= "email"
                            // onChange ={}
                            // value = {}
                            min={2}
                        />
                        <Input
                            className= "formInput mt-30"
                            placeholder="Enter your Username"
                            type= "text"
                            // onChange ={}
                            // value = {}
                            min={2}
                        />
                        <Input
                            className= "formInput mt-30"
                            placeholder="Enter your Password"
                            type= "text"
                            // onChange ={}
                            // value = {}
                            min={2}
                        />

                        <Input
                            className= "formInput mt-30"
                            placeholder="Re-enter your Password"
                            type= "text"
                            // onChange ={}
                            // value = {}
                            min={2}
                        />

                        <div className ="form-section float-btn">
                            <div className = "sign-up-btn mt-30">
                                <p>Sign Up</p>
                            </div>
                        </div>

                        <div className ="form-section">
                            <div className ="policy-text">
                                <p>By registering you agree to tnbCrow’s terms of using the tnbc games platform and privacy policy.</p>
                            </div>
                        </div>

                        <div className = "form-section mt-4">
                            <div className = "space-between">
                                <div className = "google-discord-btn float-btn mr-30">
                                    <div className ="google-discord-btn-inner">
                                        <DiscordLogo/>
                                        <p className = "sign-up-text">Sign up using Discord</p>
                                    </div>

                                </div>
                                <div className = "google-discord-btn float-btn ml-30">
                                    <div className ="google-discord-btn-inner">
                                        <GoogleLogo/>
                                        <p className = "sign-up-text">Sign up using Google</p>
                                    </div>

                                </div>
                            </div>
                            
                        </div>

                        <div>
                            <p>
                                
                            </p>
                        </div>
                        



                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
