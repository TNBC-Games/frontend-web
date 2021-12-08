import React, {useState} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import callOfDutyImage from "../../assets/callOfDutyPng.png";
import Slider from "react-slick";
import { Carousel } from 'react-bootstrap';

function ChooseGames() {
    const [showDropDown,setShowDropDown] = useState(false);
    
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
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 3,
        slidesPerRow: 3
    }
    const history = useHistory();
    function setGamesPage(){
        history.push("/game-management")
    }
    return (
        <div className = "choose-games">
            
            <ContentBody>

            <div className = "choose-games-header">
                <div className ="choose-games-title"><p>Choose your Games</p></div>
                <div>
                    <div className ="games-filter">
                        <div className ="games-filter-inner" onClick= {()=> setShowDropDown(!showDropDown)}>
                            <div className ="games-filter-title"> All Games </div>
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

            <div className = "choose-games-section mb-5">
                    {games.map((item, index) => (
                        
                            <div className ="games-item mt-4 cursor-pointer" onClick={setGamesPage} key={index}>
                                <img src={item.image} alt ={item.gameType}></img>
                                <div className = "games-name-box">
                                    <p className ="pl-4">{item.gameType}</p>
                                </div>
                            </div>
                            
                        ))
                    }
            </div>
            </ContentBody>
            
        </div>
    )
}

export default ChooseGames

export const Dropdown = styled.div`
    height: 300px;
    width: 259px;
    position: relative;
    top: 20px;
    background-color: black;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    .dropdown-item{
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        height:50px;
        border-bottom: 0.5px solid grey;
        color: #ffffff;
        width: 80%;
        font-size: 14px;
        font-weight: 500;
        line-height: 27px;
        cursor: pointer;
    }

`;

export const ContentBody = styled.div`
    width: 72vw;
    margin: auto;
`;
