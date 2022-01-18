import { combineReducers } from "redux";
import { signupReducer } from "./signup.reducer";
import { tournamentReducer } from "./tournament.reducer";

export const rootReducer = combineReducers({
    signupState: signupReducer,
    tournamentState: tournamentReducer,
});
