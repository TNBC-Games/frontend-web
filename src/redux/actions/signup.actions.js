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
        if (response.data.status === true) {
            dispatch({
                type: types.SIGNUP_SUCCEEDED,
                payload: data,
            });
            return true;
        } else if (response.data.status === "error"){
            dispatch({
                type: types.SIGNUP_FAILED,
            })
            return false;
        } else {
            dispatch({
                type: types.SIGNUP_FAILED,
            })
            return false;
        }
    } catch (err) {
        dispatch({
            type: types.SIGNUP_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return false;
    }
}