import * as types from "../types/tournament.types"

const initialState = {
    getTournaments : "idle",
    tournamentsList:false,
    getGames:"idle",
    gamesList:false,
    leaderboardNames: "",
    leaderboardCount: null,
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
        case types.GET_LEADERBOARD_SUCCEEDED:
            return{
                ...state,
                leaderboardNames: action.payload,
                leaderboardCount: action.count,
            }
        default:
            return state;
    }
}