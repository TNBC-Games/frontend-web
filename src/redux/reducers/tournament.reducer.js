import * as types from "../types/tournament.types"

const initialState = {
    getTournaments : "idle",
    tournamentsList:false,
    getGames:"idle",
    gamesList:false,
    leaderboardNames: "",
    leaderboardCount: null,
    tournamentInView: null,
    profileInView: "",
    myTournament: "",
    gameInView: ""
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
        case types.SET_TOURNAMENT:
            return{
                ...state,
                tournamentInView: action.payload,
            }
        case types.GET_MY_TOURNAMENT_SUCCEEDED:
            return{
                ...state,
                myTournament: action.payload,
            }
        case types.SET_PROFILE_IN_VIEW:
            return{
                ...state,
                profileInView: action.payload,
            }
        case types.GET_GAME_SUCCEEDED:
            return {
                ...state,
                gameInView: action.payload
            }
        default:
            return state;
    }
}