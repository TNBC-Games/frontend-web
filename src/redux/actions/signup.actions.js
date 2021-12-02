import * as types from "../types/signup.types";
import { postCall } from "../../networking";
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
            : urls.signupUser, data, headers);
        console.log(response,"=====", headers)
        if (response.status === 200) {
            dispatch({
                type: types.SIGNUP_SUCCEEDED,
                payload: data,
            });
            return {
                status: true,
                message: response.data.message
            };
        } else {
            dispatch({
                type: types.SIGNUP_FAILED,
            })
            return {
                status: false,
                message: response.message
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
        console.log(response,"=====", headers)
        if (response.data.code === 200) {
            dispatch({
                type: types.SIGNIN_SUCCEEDED,
                payload: data,
            });
            return {
                status: true,
                message: response.data.message
            };;
        } else {
            dispatch({
                type: types.SIGNIN_FAILED,
            })
            return {
                status: false,
                message: response.message
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