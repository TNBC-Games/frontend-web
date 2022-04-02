import * as types from "../types/signup.types";

const initialState = {
    userEmail : false,
    userLoggedIn: false,
    userDetails: {
        user: {
            superAdmin: false,
        },
    },
    admin: false
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
        case types.SIGNIN_STARTED:
            return{
                ...state,
                userEmail: action.payload.email,
            };
        case types.SIGNIN_SUCCEEDED:
            return{
                ...state,
                userLoggedIn: true,
                admin: action?.payload?.user?.superAdmin
            }
        case types.GET_USER_SUCCEEDED:
            return{
                ...state,
                userDetails: action.payload,
            }

        default:
            return state;
    }
}