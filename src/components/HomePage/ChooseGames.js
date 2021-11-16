import React from 'react';
import { useHistory } from 'react-router';
import callOfDutyImage from "../../assets/callOfDutyPng.png";

function ChooseGames() {
    const games = [
        {
            gameType: "CHESS",
            image: callOfDutyImage
        },
        {
            gameType: "COD",
            image: callOfDutyImage
        },
        {
            gameType: "COD - BLACK OPS",
            image: callOfDutyImage
        },
        {
            gameType: "FIFA",
            image: callOfDutyImage
        },
        {
            gameType: "FORTNITE",
            image: callOfDutyImage
        },
        {
            gameType: "MINECRAFT",
            image: callOfDutyImage
        }
    ]
    const history = useHistory();
    function setGamesPage(){
        history.push("/game-management")
    }
    return (
        <div className = "choose-games">

            <div className = "choose-games-header">
                <div className ="choose-games-title"><p>Choose your Games</p></div>
                <div className ="games-filter">
                    <div className ="games-filter-inner">
                        <div className ="games-filter-title"> All Games </div>
                    </div>
                </div>
            </div>

            <div className = "choose-games-section">
            {games &&
                games.map((item, index) => (
                    <div className ="games-item" onClick={setGamesPage}>
                        <img src={item.image} alt ={item.gameType}></img>
                        <div className = "games-name-box">
                            <p className ="pl-4">{item.gameType}</p>
                        </div>
                    </div>
                ))
            }
            </div>
            
        </div>
    )
}

export default ChooseGames
