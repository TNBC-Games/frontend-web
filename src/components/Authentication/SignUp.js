import React, {useEffect, useState} from 'react';
import Input from '../input';
import toastr from 'toastr';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {ReactComponent as DiscordLogo} from "../../assets/DiscordLogo.svg";
import {ReactComponent as GoogleLogo} from "../../assets/googleLogo.svg";
import { signupUser } from '../../redux/actions/signup.actions';
import { toast } from 'react-toastify';




function SignUp() {
    const [inputValues, setInputValues] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [showSamePasswordError, setShowSamePasswordError] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();
    toast.configure()

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
    function handleConfirmPassword (event){
        setInputValues({
            ...inputValues,
            confirmPassword: event.target.value,
        })

    }


    async function signupAccount(type){
        setLoading(type)
        if (type === 1){
            window.location.replace("https://tnbc-games-api.herokuapp.com/v1/auth/google");
            
        } else if (type === 2){
            window.location.replace("https://tnbc-games-api.herokuapp.com/v1/auth/discord")
            
        } else {
            let payload = {
                username: inputValues.username,
                email: inputValues.email,
                password: inputValues.password,
            }

            let {status, response} = await dispatch( signupUser(payload, type))
            console.log(status, response)
            if (status === true){
                sessionStorage.setItem("userEmail", inputValues.email)
                sessionStorage.setItem("accessstoken", response.data.accessToken)
                toast.success(response.message,{
                    className: 'dark-theme',
                    bodyClassName: "grow-font-size",
                    progressClassName: 'fancy-progress-bar',
                    autoClose:8000
                });
                
                setTimeout(()=> {
                    history.push("/")
                },[2000])
                
            }else {
                toast.warn(response.message || response,{
                    className: 'dark-theme',
                    bodyClassName: "grow-font-size",
                    progressClassName: 'fancy-progress-bar',
                    autoClose:8000
                });
            }          
            setLoading(0)
        }
      // console.log(response)
    }


    useEffect(() => {
        if(!inputValues.email || !inputValues.username || !inputValues.password || !inputValues.confirmPassword){
            setButtonDisabled(true)
        } else {
            if(showSamePasswordError){
                setButtonDisabled(true)
            }else{
                setButtonDisabled(false)
            }

        }

        if (inputValues.password !== "" && inputValues.confirmPassword !== ""){
            if(inputValues.password !== inputValues.confirmPassword){
                setShowSamePasswordError(true)
                setButtonDisabled(true)
            }else{
                setShowSamePasswordError(false)
                setButtonDisabled(false)
            }
        }else{
            setShowSamePasswordError(false)
        }

        window.scrollTo(0, 0);
    }, [inputValues])



    return (
        <div className = "signup-page fadeInUp animated leaderboard-page fixed-content">
                <div className = "signup-comp">
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
                            id = "newPassword"
                            className= "formInput mt-30"
                            placeholder="Enter your Password"
                            type= "password"
                            onChange={handlePasswordInput}
                            value = {inputValues.password}
                            min={2}
                        />
                        <Input
                            id = "newPassword"
                            className= "formInput mt-30"
                            placeholder="Enter your Password"
                            type= "password"
                            onChange={handleConfirmPassword}
                            value = {inputValues.confirmPassword}
                            min={2}
                        />
                        {showSamePasswordError && (
                            <div className ="form-section">
                                <div className ="policy-text red-text">
                                    Please input the same password.
                                </div>
                            </div>
                        )}
                        

                        {/* <Input
                            className= "formInput mt-30"
                            placeholder="Re-enter your Password"
                            type= "text"
                            onChange={handlePasswordInput}
                            value = {inputValues.password}
                            min={2}
                        /> */}

                        <div className ={`${buttonDisabled? "grey-disabled ": ""}form-section float-btn`} onClick={()=>{signupAccount(3)}}>
                            <div className = {`${loading === 3 ?"form-loading ": "" } sign-up-btn mt-30`}>
                                <span>Sign Up</span>
                            </div>
                        </div>

                        <div className ="form-section my-3">
                            <div className ="policy-text">
                                By registering you agree to our terms  and privacy policy.
                            </div>
                        </div>

                        <div className = "form-section mt-4">
                            <div className = "space-between">
                                <div className = "google-discord-btn float-btn mr-3" onClick= {()=> signupAccount(2)}>
                                    <div className ={`${loading === 2 ?"form-loading ": "" } google-discord-btn-inner pt-10`}>
                                        <DiscordLogo/>
                                        <span className = "sign-up-text">Sign up using Discord</span>
                                    </div>

                                </div>
                                <div className = "google-discord-btn float-btn ml-3" onClick= {()=> signupAccount(1)}>
                                    <div className ={`${loading === 1 ?"form-loading ": "" } google-discord-btn-inner pt-10`}>
                                        <GoogleLogo/>
                                        <span className = "sign-up-text">Sign up using Google</span>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                        <div className = "justify-center mt-4" onClick={()=> history.push("/login")}>
                            <p className = "sign-up-text pt-4">Already have an account? Login</p>
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
