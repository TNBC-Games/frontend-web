import * as types from "../types/tournament.types"

const initialState = {
    getTournaments : "idle",
    tournamentsList:[],
    getGames:"idle",
    gamesList:[]
}

export const tournamentReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_TOURNAMENT_STARTED:
            return{
                ...state,
                getTournaments: "loading",
            };
        case types.GET_TOURNAMENT_SUCCEEDED:
            return{
                ...state,
                getTournaments: "idle",
                tournamentsList: action.payload,
            }
        case types.GET_GAMES_STARTED:
            return{
                ...state,
                getGames: "loading",
            };
        case types.GET_GAMES_SUCCEEDED:
            return{
                ...state,
                getGames: "idle",
                gamesList: action.payload,
            }
        default:
            return state;
    }
}