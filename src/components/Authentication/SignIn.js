import React, { useState, useEffect } from 'react';
import Input from '../input';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signinUser } from '../../redux/actions/signup.actions';
import { toast } from 'react-toastify';

function SignIn() {
    const [loading, setLoading] = useState(false)
    let dispatch = useDispatch();
    let history = useHistory();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    toast.configure()
    

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

    async function loginUser(type){
        setLoading(true)
        let payload = {
            email: userInfo.email,
            password: userInfo.password,
        }
       let {status, message} = await dispatch( signinUser(payload, type))
       console.log(status, message)
       if (status === true){        
            toast.success(message,{
                className: 'dark-theme',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar',
                autoClose:8000,
                onClose: history.push("/")
            });
            
            setTimeout(()=> {
                history.push("/")
            },[8000])
        }else {
            toast.warn(message,{
                className: 'dark-theme',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar',
                autoClose:8000
            });
            
        }
       setLoading(false)
      
    }

    useEffect(() => {
        if(!userInfo.email || !userInfo.password){
            setButtonDisabled(true)
        } else {
            setButtonDisabled(false)
        }
        window.scrollTo(0, 0);
    }, [userInfo])

    return (
        <div className = "signup-page fadeInUp animated leaderboard-page">
            <div className ="tnbc-comppp">
                <div className = "hght">
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

                        <div className ={`${buttonDisabled? "grey-disabled ": ""} form-section float-btn`} onClick={loginUser}>
                            <div className = {`${loading ?"form-loading ": "" } sign-up-btn mt-30`}>
                                <span>Login</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
