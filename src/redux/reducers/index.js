import { combineReducers } from "redux";
import { signupReducer } from "./signup.reducer";

export const rootReducer = combineReducers({
    signupState: signupReducer
});
