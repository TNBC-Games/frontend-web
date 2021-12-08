import React,{useState} from 'react';
import styled from 'styled-components';
import callOfDutyImage from "../../assets/callOfDutyPng.png";
import { ProgressBar } from 'react-bootstrap';
import { ContentBody, Dropdown } from './ChooseGames';
import Slider from "react-slick"

function ChooseTournament() {
    const [showDropDown,setShowDropDown] = useState(false);
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

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
    }
    console.log(showDropDown,"ooooo")
    return (
        <div className = "choose-tournament">
            <ContentBody>

                <div className = "choose-games-header">
                    <div className ="choose-games-title"><p>Upcoming Tournament</p></div>
                    <div>
                        <div className ="games-filter">
                            <div className ="games-filter-inner">
                                <div className ="games-filter-title" onClick= {()=> setShowDropDown(!showDropDown)}> All Games </div>
                                <div className ="mr-4">
                                    <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 0L10.2631 6H0.73686L5.5 0Z" fill="white"/>
                                        <path d="M5.5 16L0.73686 10H10.2631L5.5 16Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        { showDropDown && (
                            <Dropdown>
                                <div className = "dropdown-item" onClick= {()=> setShowDropDown(false)}> Chess</div>
                                <div className = "dropdown-item" onClick= {()=> setShowDropDown(false)}> COD</div>
                                <div className = "dropdown-item" onClick= {()=> setShowDropDown(false)}> FIFA</div>
                                <div className = "dropdown-item" onClick= {()=> setShowDropDown(false)}> FORTNITE</div>
                                <div className = "dropdown-item" onClick= {()=> setShowDropDown(false)}> MINECRAFT</div>
                                <div className = "dropdown-item" onClick= {()=> setShowDropDown(false)}> BLACKOPS</div>

                            </Dropdown>
                        )}
                    </div>
                </div>
                
                <div className = "choose-games-section">
                {games &&
                    games.map((item, index) => (
                        <TournamentView key-={index}>
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
            </ContentBody>
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

