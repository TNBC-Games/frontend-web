import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import callOfDutyImage from "../../assets/callOfDutyPng.png";
import myTournamentImage from "../../assets/myTournamentImage.png";
import { TournamentView } from '../HomePage/ChooseTournament';
import { ProfileHeader } from './GamesHeader'; 
import { ProgressBar } from 'react-bootstrap';
import { TournamentInfo } from '../HomePage/ChooseTournament';



function MyTournament() {
    const [active, setActive] = useState(1);
    const [completedList, setCompletedList] = useState("");
    const [ongoingList, setOngoingList] = useState("");
    const games = [
        {
            gameType: "CHESS",
            image: callOfDutyImage,
            completedTournament:24,
            totalTournament: 24,
            completedPercent: 40,
            fee: 20,
            completed: true,
        },
        {
            gameType: "COD",
            image: callOfDutyImage,
            completedTournament:2,
            totalTournament: 34,
            completedPercent: 40,
            fee: 70,
            completed: true,
        },
        {
            gameType: "COD - BLACK OPS",
            image: callOfDutyImage,
            completedTournament:5,
            totalTournament: 34,
            completedPercent: 30,
            fee: 55,
            completed: true,
        },
        {
            gameType: "FIFA",
            image: callOfDutyImage,
            completedTournament:7,
            totalTournament: 14,
            completedPercent: 20,
            fee: 24,
            completed: true,
        },
        {
            gameType: "FORTNITE",
            image: callOfDutyImage,
            completedTournament:23,
            totalTournament: 34,
            completedPercent: 32,
            fee: 55,
            completed: false,
        },
        {
            gameType: "CHESS",
            image: callOfDutyImage,
            completedTournament:24,
            totalTournament: 24,
            completedPercent: 40,
            fee: 20,
            completed: false,
        },
        {
            gameType: "COD",
            image: callOfDutyImage,
            completedTournament:2,
            totalTournament: 34,
            completedPercent: 40,
            fee: 70,
            completed: false,
        },
        {
            gameType: "COD - BLACK OPS",
            image: callOfDutyImage,
            completedTournament:5,
            totalTournament: 34,
            completedPercent: 30,
            fee: 55,
            completed: false,
        },
        {
            gameType: "FIFA",
            image: callOfDutyImage,
            completedTournament:7,
            totalTournament: 14,
            completedPercent: 20,
            fee: 24,
            completed: true,
        },
        {
            gameType: "FORTNITE",
            image: callOfDutyImage,
            completedTournament:23,
            totalTournament: 34,
            completedPercent: 32,
            fee: 55,
            completed: false,
        },
        {
            gameType: "MINECRAFT",
            image: callOfDutyImage,
            completedTournament:12,
            totalTournament: 34,
            completedPercent: 24,
            fee: 86,
            completed: false,
        },
        {
            gameType: "CHESS",
            image: callOfDutyImage,
            completedTournament:24,
            totalTournament: 24,
            completedPercent: 40,
            fee: 20,
            completed: false,
        },
        {
            gameType: "COD",
            image: callOfDutyImage,
            completedTournament:2,
            totalTournament: 34,
            completedPercent: 40,
            fee: 70,
            completed: false,
        },
        {
            gameType: "COD - BLACK OPS",
            image: callOfDutyImage,
            completedTournament:5,
            totalTournament: 34,
            completedPercent: 30,
            fee: 55,
            completed: false,
        },
        {
            gameType: "FIFA",
            image: callOfDutyImage,
            completedTournament:7,
            totalTournament: 14,
            completedPercent: 20,
            fee: 24,
            completed: false,
        },
        {
            gameType: "FORTNITE",
            image: callOfDutyImage,
            completedTournament:23,
            totalTournament: 34,
            completedPercent: 32,
            fee: 55,
            completed: false,

        },
    ]

    useEffect(()=>{
        const completedList = games.filter(
            (item) => item.completed === true
        );

        const ongoing = games.filter(
            (item) => item.completed === false
        );

        setCompletedList(completedList);
        setOngoingList(ongoing)

    },[active])

    return (
        <div className = "leaderboard-page fadeInUp animated">
            <MyTournamentHeader image ={myTournamentImage}>
                <div className = "my-tournament">
                    MY TOURNAMENTS
                </div>
            </MyTournamentHeader>

            <CompletedStatus>
                <OngoingCompleted active={active} >
                    <div className ="ongoing mr-4" onClick ={()=> setActive(1)}>
                        Ongoing
                    </div>
                    <div className ="completed ml-4" onClick ={()=> setActive(2)}>
                        Completed
                    </div>

                </OngoingCompleted>

            </CompletedStatus>

            <div className = "choose-games-section p-5">
                {active === 1 ? (
                    <>
                    {ongoingList &&
                        ongoingList.map((item, index) => (
                            <TournamentView key ={index}>
                                <div className = "upcoming-tornament-name">
                                    <p className ="pl-4">{item?.gameType}</p>
                                </div>
                                <div>
                                    <img src={item?.image} alt={item?.gameType}></img>
                                </div>
                                <TournamentInfo>
                                    <div className ="tourn-name mb-3 pb-3">{item?.gameType}</div>            
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
                    </>
                ):(
                    <>
                        {completedList &&
                            completedList.map((item, index) => (
                                <TournamentView key ={index} grey={true}>
                                    <div className = "upcoming-tornament-name">
                                        <p className ="pl-4">{item?.gameType}</p>
                                    </div>
                                    <div>
                                        <img src={item?.image} alt={item?.gameType}></img>
                                    </div>
                                    <TournamentInfo>
                                        <div className="height-220">
                                            <div className ="tourn-name pb-3 border-bottom">{item?.gameType}</div>
                            
                                            <div className = "justify-space mb-2" >
                                                <div className = "fee justify-center align-items-center">Earnings</div>
                                                <div className = "fee-amount">{item?.fee} TNBC</div>
                                            </div>

                                            <div className = "justify-space mb-2" >
                                                <div className = "fee justify-center align-items-center">Trophy</div>
                                                <div className = "fee-amount">Gold</div>
                                            </div>

                                            <div className = "justify-space mb-2" >
                                                <div className = "fee justify-center align-items-center">Points</div>
                                                <div className = "fee-amount">2000</div>
                                            </div>
                                        </div>
                                    
                                    </TournamentInfo>
                                </TournamentView>
                            ))
                        } 

                    </>

                )}
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
    height: 267px;
    background-image: url(${props => props.image});

    .my-tournament{
        font-style: normal;
        font-weight: 800;
        font-size: 35px;
        line-height: 51.98px;
        color: #FFFFFF;
    }

    .height-220 {
        height: 220px;
    }

    .border-bottom {
        border-bottom: 1px solid #4A4A4A;
    }
`;

const CompletedStatus = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 50px 90px;
`;

const OngoingCompleted = styled.div`
    display: flex;
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 36px;
    color: #ffffff;

    .ongoing {
        opacity: ${props=> props?.active === 1 ? "": "0.6"};
    }

    .completed {
        opacity: ${props=> props?.active === 2 ? "": "0.6"};
    }

`;