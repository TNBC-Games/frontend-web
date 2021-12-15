import React,{useState} from 'react';
import styled from 'styled-components';
import callOfDutyImage from "../../assets/callOfDutyPng.png";
import Culture from "../../assets/Culture.png";
import Fifa2 from "../../assets/Fifa2.png";
import Fifa3 from "../../assets/Fifa3.png";
import Fifa4 from "../../assets/Fifa4.png";
import Fifa5 from "../../assets/Fifa5.png";
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
            image: Culture,
            completedTournament:2,
            totalTournament: 34,
            completedPercent: 40,
            fee: 70,
        },
        {
            gameType: "COD - BLACK OPS",
            image: Fifa2,
            completedTournament:5,
            totalTournament: 34,
            completedPercent: 30,
            fee: 55,
        },
        {
            gameType: "FIFA",
            image: Fifa3,
            completedTournament:7,
            totalTournament: 14,
            completedPercent: 20,
            fee: 24,
        },
        {
            gameType: "FORTNITE",
            image: Fifa4,
            completedTournament:23,
            totalTournament: 34,
            completedPercent: 32,
            fee: 55,
        },
        {
            gameType: "MINECRAFT",
            image: Fifa5,
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

    return (
        <div className = "choose-tournament">
            <ContentBody>

                <div className = "choose-games-header">
                    <div className ="choose-games-title"><p>Upcoming Tournament</p></div>
                    <div className="align-center flex-column">
                        <div className ="games-filter cursor-pointer">
                            <div className ="games-filter-inner" onClick= {()=> setShowDropDown(!showDropDown)}>
                                <div className ="games-filter-title"> All Games </div>
                                <div className ="mr-2">
                                    <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 0L10.2631 6H0.73686L5.5 0Z" fill="white"/>
                                        <path d="M5.5 16L0.73686 10H10.2631L5.5 16Z" fill="white"/>
                                    </svg>
                                </div>
                                
                            </div>
                            
                        </div>
                        { showDropDown && (
                            <Dropdown>
                            <div className= "dropdown-inner">
                                <div className = "dropdown-item" onClick= {()=> setShowDropDown(false)}> Chess</div>
                                <div className = "dropdown-item" onClick= {()=> setShowDropDown(false)}> COD</div>
                                <div className = "dropdown-item" onClick= {()=> setShowDropDown(false)}> FIFA</div>
                                <div className = "dropdown-item" onClick= {()=> setShowDropDown(false)}> FORTNITE</div>
                                <div className = "dropdown-item" onClick= {()=> setShowDropDown(false)}> MINECRAFT</div>
                                <div className = "dropdown-item" onClick= {()=> setShowDropDown(false)}> BLACKOPS</div>
                            </div>

                        </Dropdown>
                        )}
                    </div>
                </div>
                
                <div className = "choose-games-section">
                {games &&
                    games.map((item, index) => (
                        <TournamentView key-={index}>
                            <div className = "upcoming-tornament-name">{item?.gameType}
                            </div>
                            <div>
                                <img src={item?.image} alt={item?.gameType}></img>
                            </div>
                            <TournamentInfo>
                                <div className ="tourn-name">{item?.gameType}</div>            
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
                <div className="flex justify-center hght100"> 
                    <DummySlider>
                            <div className="box-sm blue-bg"></div>
                            <div className="box-sm"></div>
                            <div className="box-sm"></div>
                    </DummySlider>
                </div>
            </ContentBody>
           
        </div>
    )
}

export default ChooseTournament

export const TournamentView = styled.div`
    width: 31.5%;
    filter: ${props => props.grey? "grayscale(100%)": ""};

    .upcoming-tornament-name {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        height: 30px;
        position: relative;
        top: 30px;
        z-index: 1;
        background: rgba(0, 0, 0, 0.6);
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 15px;

        @media only screen and (max-width: 800px){
            font-size:15px;
            padding-top: 0px;
        }
    }
    @media only screen and (max-width: 1000px) {
        width: 48%;
    }
    @media only screen and (max-width: 800px) {
        width:100%;
        height:auto;
        
    }

`;
export const DummySlider = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 150px;
    min-height:100px;
    margin-top:40px;
    .box-sm{
        width: 40px;
        height: 10px;   
        background: rgba(255, 255, 255, 0.7);
    }
    .blue-bg{
        background: #477CAD !important;
    }

`;

export const TournamentInfo = styled.div`
    background: #1D1D1D;\
    padding: 16px;
    @media only screen and (max-width: 800px) {
        padding: 5px 10px 10px
    }

    .tourn-name {
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 30px;
        color: #FFFFFF;
        margin-bottom: 1rem!important;
        
        @media only screen and (max-width: 800px) {
            font-weight: 500;
            font-size: 13px;
            margin-bottom: 5px !important;
            line-height: 18px;
        }
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
        @media only screen and (max-width: 800px) {
            font-size: 12px;
            font-weight: 300;
            line-height: 15px;
        }
    }

    .fee {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.7);
        @media only screen and (max-width: 800px) {
            font-size: 12px;
            line-height: 15px;
        }
    }

    .fee-amount {
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 40px;
        color: #FFFFFF;
        @media only screen and (max-width: 800px) {
            font-size: 13px;
            font-weight:400;
            line-height: 10px;
        }
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

        @media only screen and (max-width: 800px) {
            height:20px;
            width: 50px;
            font-size: 12px;
            font-weight:500;
        }
    }

`;

