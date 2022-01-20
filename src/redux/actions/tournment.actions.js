import * as types from "../types/tournament.types"
import { getCall, postCall } from "../../networking";
import { urls } from "../../networking/url";


export const getTournament = () => async (dispatch) => {
    dispatch({
        type: types.GET_TOURNAMENT_STARTED,
    })
    
    try {
        let headers = { "Content-Type": "application/json" };
        const {status, data} = await getCall(urls.getTournaments, headers);
        if (status === 200) {
            dispatch({
                type: types.GET_TOURNAMENT_SUCCEEDED,
                payload: data.data.results,
            });
            return {
                status: true,
                response: data.data.results,
            };
        } else {
            dispatch({
                type: types.GET_TOURNAMENT_FAILED,
            })
            return {
                status: false,
                response: data.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.GET_TOURNAMENT_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}

export const getGames = () => async (dispatch) => {
    dispatch({
        type: types.GET_GAMES_STARTED,
    })
    
    try {
        let headers = { "Content-Type": "application/json" };
        const {status, data} = await getCall(urls.getGames, headers);
        if (status === 200) {
            dispatch({
                type: types.GET_GAMES_SUCCEEDED,
                payload: data.data.games,
            });
            return {
                status: true,
                response: data.data.games,
            };
        } else {
            dispatch({
                type: types.GET_GAMES_FAILED,
            })
            return {
                status: false,
                response: data.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.GET_GAMES_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}

export const updateTournament = (payload,id) => async (dispatch) => {
    dispatch({
        type: types.UPDATE_TOURNAMENT_STARTED,
    })
    const url =`${urls.updateTournament}/${id}`
    
    try {
        let headers = { "Content-Type": "application/json" };
        const {status, data} = await postCall(id? url : urls.updateTournament, payload, headers);
        if (status === 200) {
            dispatch({
                type: types.UPDATE_TOURNAMENT_SUCCEEDED,
                payload: data.data.results,
            });
            return {
                status: true,
                response: data.data.results,
            };
        } else {
            dispatch({
                type: types.UPDATE_TOURNAMENT_FAILED,
            })
            return {
                status: false,
                response: data.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.UPDATE_TOURNAMENT_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}

export const createGame = (payload) => async (dispatch) => {
    dispatch({
        type: types.CREATE_GAME_STARTED,
    })
    
    try {
        let headers = { "Content-Type": "application/json" };
        const {status, data} = await postCall(urls.createGame, payload, headers);
        if (status === 200) {
            dispatch({
                type: types.CREATE_GAME_SUCCEEDED,
                payload: data.data.results,
            });
            return {
                status: true,
                response: data.data.results,
            };
        } else {
            dispatch({
                type: types.CREATE_GAME_FAILED,
            })
            return {
                status: false,
                response: data.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.CREATE_GAME_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}