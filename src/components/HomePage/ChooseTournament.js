import React from 'react';
import callOfDutyImage from "../../assets/callOfDutyPng.png";
import { ProgressBar } from 'react-bootstrap';

function ChooseTournament() {
    const games = [
        {
            gameType: "CHESS",
            image: callOfDutyImage,
            completedTournament:24,
            totalTournament: 24,
            completedPercent: 40,
            fee: 20,
        },
        {
            gameType: "COD",
            image: callOfDutyImage,
            completedTournament:2,
            totalTournament: 34,
            completedPercent: 40,
            fee: 70,
        },
        {
            gameType: "COD - BLACK OPS",
            image: callOfDutyImage,
            completedTournament:5,
            totalTournament: 34,
            completedPercent: 30,
            fee: 55,
        },
        {
            gameType: "FIFA",
            image: callOfDutyImage,
            completedTournament:7,
            totalTournament: 14,
            completedPercent: 20,
            fee: 24,
        },
        {
            gameType: "FORTNITE",
            image: callOfDutyImage,
            completedTournament:23,
            totalTournament: 34,
            completedPercent: 32,
            fee: 55,
        },
        {
            gameType: "MINECRAFT",
            image: callOfDutyImage,
            completedTournament:12,
            totalTournament: 34,
            completedPercent: 24,
            fee: 86,
        }
    ]

    return (
        <div className = "choose-tournament">

            <div className = "choose-games-header">
                <div className ="choose-games-title"><p>Upcoming Tournament</p></div>
                <div className ="games-filter">
                    <div className ="games-filter-inner">
                        <div className ="games-filter-title"> All Games </div>
                    </div>
                </div>
            </div>
            
            <div className = "choose-games-section">
            {games &&
                games.map((item, index) => (
                    <div key ={index} className ="tourn-item">
                        <div className = "upcoming-tornament-name">
                            <p className ="pl-4">{item?.gameType}</p>
                        </div>
                        <div>
                            <img src={item?.image}></img>
                        </div>
                        <div className ="tourn-more-info">
                            <div className ="tourn-name mb-3">{item?.gameType}</div>            
                            <ProgressBar now={item?.completedPercent}/>
                            <div className = "tourn-completed mt-2">{item?.completedTournament} of {item?.totalTournament}</div>
                            <div className = "fee"> Fee </div>
                            <div className = "justify-space " >
                                <div className = "fee-amount">{item.fee} TNBC</div>
                                <div className = "join-free float-btn">
                                    View
                                </div>
                            </div>
                        
                        </div>
                        
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default ChooseTournament
