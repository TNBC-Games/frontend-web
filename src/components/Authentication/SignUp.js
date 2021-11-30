import React, {useEffect, useState} from 'react';
import Input from '../input';
import toastr from 'toastr';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
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
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();

    toastr.options = {
        "closeButton": true,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
    

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


    async function signupAccount(type){
        setLoading(true)
        let payload = {
            username: inputValues.username,
            email: inputValues.email,
            password: inputValues.password,
        }

       let response = await dispatch( signupUser(payload, type))
       if (response === true){
        toastr.success("Message will come here");
            history.push("/")
        }else {
            alert("no data")
        }
       setLoading(false)
       console.log(response)
    }


    useEffect(() => {
        if(!inputValues.email || !inputValues.username || !inputValues.password){
            setButtonDisabled(true)
        } else {
            setButtonDisabled(false)
        }
        window.scrollTo(0, 0);
    }, [inputValues])


    return (
        <div className = "signup-page fadeInUp animated leaderboard-page fixed-content">
                <div className = "tnbc-compp">
                    <div className ="signup-heading"><p>Sign Up</p></div>
                    <div >
                        <Input
                            className= "formInput mt-30"
                            placeholder="example@gmail.com"
                            type="email"
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

                        <div className ={`${buttonDisabled? "grey-disabled ": ""}form-section float-btn`} onClick={()=>{signupAccount(3)}}>
                            <div className = {`${loading ?"form-loading ": "" } sign-up-btn mt-30`}>
                                <span>Sign Up</span>
                            </div>
                        </div>

                        <div className ="form-section">
                            <div className ="policy-text">
                                <p>By registering you agree to tnbCrow’s terms of using the tnbc games platform and privacy policy.</p>
                            </div>
                        </div>

                        <div className = "form-section mt-4">
                            <div className = "space-between">
                                <div className = "google-discord-btn float-btn mr-3" onClick= {()=> {signupAccount(1)}}>
                                    <div className ="google-discord-btn-inner">
                                        <DiscordLogo/>
                                        <p className = "sign-up-text">Sign up using Discord</p>
                                    </div>

                                </div>
                                <div className = "google-discord-btn float-btn ml-3">
                                    <div className ="google-discord-btn-inner">
                                        <GoogleLogo/>
                                        <p className = "sign-up-text">Sign up using Google</p>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                        <div className = "justify-center mt-4" onClick={()=> history.push("/login")}>
                            <p className = "sign-up-text pt-4">Already have aan account? Login</p>
                        </div>

                        <div>
                            <p>
                                
                            </p>
                        </div>
                        



                    </div>
                </div>
            </div>
    )
}

export default SignUp
