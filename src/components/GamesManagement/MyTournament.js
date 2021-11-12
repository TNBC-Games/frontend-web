import React from 'react';
import styled from 'styled-components';
import callOfDutyImage from "../../assets/callOfDutyPng.png";
import myTournamentImage from "../../assets/myTournamentImage.png";
import { TournamentView } from '../HomePage/ChooseTournament';
import { ProfileHeader } from './GamesHeader'; 
import { ProgressBar } from 'react-bootstrap';
import { TournamentInfo } from '../HomePage/ChooseTournament';
import { GameName } from './GamesHeader';



function MyTournament() {
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
        <div className = "leaderboard-page fadeInUp animated">
            <MyTournamentHeader image ={myTournamentImage}>
                <div className = "my-tournament">
                    MY TOURNAMENTS
                </div>
            </MyTournamentHeader>

            <div className = "choose-games-section p-5">
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

export default MyTournament;

 const MyTournamentHeader = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 90px 100px;
    width:100vw;
    height: 354px;
    background-image: url(${props => props.image});

    .my-tournament{
        font-style: normal;
        font-weight: 800;
        font-size: 35px;
        line-height: 51.98px;
        color: #FFFFFF;
    }
`;
