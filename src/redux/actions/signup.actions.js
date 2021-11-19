import * as types from "../types/signup.types"

export const signupUser = (data) => async (dispatch) => {
    dispatch({
        type: types.SIGNUP_STARTED,
        payload: data
    })
    
    // try {
    //     const response = await postCall(urls.createPin, data);
    //     if (response.data.isSuccessful === true) {
    //         dispatch({
    //             type: types.UPDATE_SME_PROFILE_SUCCEEDED,
    //             payload: data,
    //         });
    //         return true;
    //     } else if (response.data.isSuccessful === false){
    //         dispatch({
    //             type: types.UPDATE_SME_PROFILE_FAILED,
    //         })
    //         return false;
    //     } else {
    //         dispatch({
    //             type: types.UPDATE_SME_PROFILE_FAILED,
    //         })
    //         return false;
    //     }
    // } catch (err) {
    //     dispatch({
    //         type: types.CREATE_TRAN_PIN_FAILED,
    //         payload: "Please check your internet connection and try again!",
    //     });
    //     return false;
    // }
}