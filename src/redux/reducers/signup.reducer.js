import * as types from "../types/signup.types";

const initialState = {
    userEmail : false,
    userLoggedIn: false,
}

export const signupReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SIGNUP_STARTED:
            return{
                ...state,
                userEmail: action.payload.email,
            };
        case types.SIGNUP_SUCCEEDED:
            return{
                ...state,
                userLoggedIn: true,
            }
        default:
            return state;
    }
}