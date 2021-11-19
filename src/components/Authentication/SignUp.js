import React, {useEffect, useState} from 'react';
import Input from '../input';
import { useDispatch } from 'react-redux';
import {ReactComponent as DiscordLogo} from "../../assets/DiscordLogo.svg";
import {ReactComponent as GoogleLogo} from "../../assets/googleLogo.svg";
import { signupUser } from '../../redux/actions/signup.actions';



function SignUp() {
    const [inputValues, setInputValues] = useState({
        email: "",
        username: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const dispatch = useDispatch()
    

    function handleEmailInput(event){
        setInputValues({
            ...inputValues,
            email: event.target.value,
        });
    }
    function handleUserNameInput(event){
        setInputValues({
            ...inputValues,
            username: event.target.value,
        });
    }

    function handlePasswordInput(event){

        setInputValues({
            ...inputValues,
            password: event.target.value,
        });
    }
    async function signupAccount(){
        let payload = {
            userName: inputValues.username,
            email: inputValues.email,
        }
       let  response = await dispatch(
            signupUser(payload)
        )
        console.log(response)
    }

    useEffect(() => {
        if(!inputValues.email || !inputValues.username || !inputValues.password){
            setButtonDisabled(true)
        } else {
            setButtonDisabled(false)
        }
    }, [inputValues])


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
                            onChange={handleEmailInput}
                            value = {inputValues.email}
                            min={2}
                        />
                        <Input
                            className= "formInput mt-30"
                            placeholder="Enter your Username"
                            type= "text"
                            onChange={handleUserNameInput}
                            value = {inputValues.username}
                            min={2}
                        />
                        <Input
                            className= "formInput mt-30"
                            placeholder="Enter your Password"
                            type= "text"
                            onChange={handlePasswordInput}
                            value = {inputValues.password}
                            min={2}
                        />

                        {/* <Input
                            className= "formInput mt-30"
                            placeholder="Re-enter your Password"
                            type= "text"
                            onChange={handlePasswordInput}
                            value = {inputValues.password}
                            min={2}
                        /> */}

                        <div className ={`${buttonDisabled? "grey-disabled ": ""} form-section float-btn`} onClick={signupAccount}>
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
