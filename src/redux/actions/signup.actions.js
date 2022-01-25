import * as types from "../types/signup.types";
import { postCall, getCall } from "../../networking";
import { urls } from "../../networking/url";


export const signupUser = (data, type) => async (dispatch) => {
    dispatch({
        type: types.SIGNUP_STARTED,
        payload: data
    })
    
    try {
        let headers = { "Content-Type": "application/json" };
        const response = await postCall(
            type === 1 
            ? urls.googleSignup 
            : type === 2
            ? urls.discordSignup
            : urls.signupUser,  type === 3 ? data: null,  type === 3 ? headers: null);
        if (response.status === 200) {
            dispatch({
                type: types.SIGNUP_SUCCEEDED,
                payload: data,
            });
            return {
                status: true,
                response: response.data
            };
        } else {
            dispatch({
                type: types.SIGNUP_FAILED,
            })
            return {
                status: false,
                response: response.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.SIGNUP_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}


export const signinUser = (data, type) => async (dispatch) => {
    dispatch({
        type: types.SIGNIN_STARTED,
        payload: data
    })
    
    try {
        let headers = { "Content-Type": "application/json" };
        const response = await postCall(urls.loginUser, data, headers);
        if (response.data.code === 200) {
            dispatch({
                type: types.SIGNIN_SUCCEEDED,
                payload: data,
            });
            return {
                status: true,
                response: response.data
            };;
        } else {
            dispatch({
                type: types.SIGNIN_FAILED,
            })
            return {
                status: false,
                response: response
            };
        }
    } catch (err) {
        dispatch({
            type: types.SIGNIN_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        };
    }
}

export const getUser = (token) => async (dispatch) => {
    dispatch({
        type: types.GET_USER_STARTED,
    })
    
    try {
        let headers = { "x-auth-token": token };
        const {status, data, message} = await getCall(urls.getUser, headers);
        console.log(data,"=====================>>>>>>>>>>++++++++++++++++")
        if (status === 200) {
            dispatch({
                type: types.GET_USER_SUCCEEDED,
                payload: data.data,
            });
            return {
                status: true,
                response: data.data
            };;
        } else {
            dispatch({
                type: types.GET_USER_FAILED,
            })
            return {
                status: false,
                response: message
            };
        }
    } catch (err) {
        dispatch({
            type: types.GET_USER_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        };
    }
}
