import * as types from "../types/tournament.types"
import { getCall, postCall, putCall } from "../../networking";
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

export const createNewTournament = (payload, token) => async (dispatch) => {
    dispatch({
        type: types.CREATE_TOURNAMENT_STARTED,
    })
    
    try {
        let headers = { "Content-Type": "application/json", "x-auth-token": token };
        const {status, data} = await postCall( urls.updateTournament, payload, headers);
        if (status === 200) {
            dispatch({
                type: types.CREATE_TOURNAMENT_SUCCEEDED,
                payload: data.data.results,
            });
            return {
                status: true,
                response: data.data.results,
            };
        } else {
            dispatch({
                type: types.CREATE_TOURNAMENT_FAILED,
            })
            return {
                status: false,
                response: data.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.CREATE_TOURNAMENT_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}

export const createGame = (payload, token) => async (dispatch) => {
    dispatch({
        type: types.CREATE_GAME_STARTED,
    })
    
    try {
        let headers = { "Content-Type": "application/json", "x-auth-token": token};
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

export const getLeaderboard = (count) => async (dispatch) => {
    dispatch({
        type: types.GET_LEADERBOARD_STARTED,
    })
    const url = ` ${urls.getLeaderboard}?sortBy=earnings&limit=${count}&page=1`
    try {
        let headers = { "Content-Type": "application/json" };
        const {status, data} = await getCall(url, headers);
        if (status === 200) {
            console.log(data,"-----")
            dispatch({
                type: types.GET_LEADERBOARD_SUCCEEDED,
                payload: data.data.leaderBoard,
                count: count,
            });
            return {
                status: true,
                response: data.data.leaderBoard,
            };
        } else {
            dispatch({
                type: types.GET_LEADERBOARD_FAILED,
            })
            return {
                status: false,
                response: data.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.GET_LEADERBOARD_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}


export const updateTournament = (payload,id, token) => async (dispatch) => {
    dispatch({
        type: types.UPDATE_TOURNAMENT_STARTED,
    })
    const url =`${urls.updateTournament}/${id}`
    
    try {
        let headers = { "Content-Type": "application/json", "x-auth-token": token };
        const {status, data} = await putCall( url, payload, headers);
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

export const updateTournamentImage = (payload,id, token) => async (dispatch) => {
    dispatch({
        type: types.UPDATE_TOURNAMENT_IMAGE_STARTED,
    })
    const url =`${urls.uploadTournamentImage}/${id}`
    
    try {
        let headers = { "x-auth-token": token };
        const {status, data} = await postCall( url, payload, headers);
        if (status === 200) {
            dispatch({
                type: types.UPDATE_TOURNAMENT_IMAGE_SUCCEEDED,
                payload: data.data.results,
            });
            return {
                status: true,
                response: data.data.results,
            };
        } else {
            dispatch({
                type: types.UPDATE_TOURNAMENT_IMAGE_FAILED,
            })
            return {
                status: false,
                response: data.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.UPDATE_TOURNAMENT_IMAGE_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}

export const setTournament =(data)=> (dispatch) => {
    dispatch({
        type: types.SET_TOURNAMENT,
        payload: data
    })
}

export const getMyTournament = (token) => async (dispatch) => {
    dispatch({
        type: types.GET_MY_TOURNAMENT_STARTED,
    })
    
    try {
        let headers = {"x-auth-token": token};
        const {status, data} = await getCall(urls.getMyTournaments, headers);
        if (status === 200) {
            dispatch({
                type: types.GET_MY_TOURNAMENT_SUCCEEDED,
                payload: data.data.results,
            });
            return {
                status: true,
                response: data.data.results,
            };
        } else {
            dispatch({
                type: types.GET_MY_TOURNAMENT_FAILED,
            })
            return {
                status: false,
                response: data.message
            }
        }
    } catch (err) {
        dispatch({
            type: types.GET_MY_TOURNAMENT_FAILED,
            //payload: "Please check your internet connection and try again!",
        });
        return {
            status: false,
            message: err
        }
    }
}