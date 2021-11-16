import React from 'react';
import styled from 'styled-components';
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
                    <TournamentView>
                        <div className = "upcoming-tornament-name">
                            <p className ="pl-4">{item?.gameType}</p>
                        </div>
                        <div>
                            <img src={item?.image} alt={item?.gameType}></img>
                        </div>
                        <TournamentInfo>
                            <div className ="tourn-name mb-3">{item?.gameType}</div>            
                            <ProgressBar now={item?.completedPercent}/>
                            <div className = "tourn-completed mt-2">{item?.completedTournament} of {item?.totalTournament}</div>
                            <div className = "fee"> Fee </div>
                            <div className = "justify-space " >
                                <div className = "fee-amount">{item?.fee} TNBC</div>
                                <div className = "join-free float-btn">
                                    View
                                </div>
                            </div>
                        
                        </TournamentInfo>
                    </TournamentView>
                ))
            }
            </div>
        </div>
    )
}

export default ChooseTournament

export const TournamentView = styled.div`
    width: 29%;
    height: 412px;
    margin-bottom: 5%;
    filter: ${props => props.grey? "grayscale(100%)": ""};

    .upcoming-tornament-name {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        padding-top: 11px;
        height: 30px;
        position: relative;
        top: 30px;
        z-index: 1;
        background: rgba(0, 0, 0, 0.6);
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 15px;
    }

`;

export const TournamentInfo = styled.div`
    background: #1D1D1D;\
    padding: 16px;

    .tourn-name {
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 30px;
        color: #FFFFFF;
    }

    .tourn-completed {
        display: flex;
        height: 20px;
        justify-content: flex-end;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #FFFFFF;
    }

    .fee {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.7);
    }

    .fee-amount {
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 40px;
        color: #FFFFFF;
    }

    .join-free {
        height:40px;
        width:122px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        box-sizing: border-box;
        border-radius: 5px;
        color: #000000;
        background: linear-gradient(263.86deg, #FACF5A 0%, #DC0D16 100%);
        cursor: pointer;
        text-decoration: none;
        z-index: 2;
    }

`;

