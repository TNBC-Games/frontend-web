import React, {useState} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import callOfDutyImage from "../../assets/callOfDutyPng.png";
import Culture from "../../assets/Culture.png";
import Fifa2 from "../../assets/Fifa2.png";
import Fifa3 from "../../assets/Fifa3.png";
import Fifa4 from "../../assets/Fifa4.png";
import Fifa5 from "../../assets/Fifa5.png";
import Slider from "react-slick";
import { Carousel } from 'react-bootstrap';
import { DummySlider } from './ChooseTournament';

function ChooseGames() {
    const [showDropDown,setShowDropDown] = useState(false);
    
    const games = [
        {
            gameType: "CHESS",
            image: Fifa5
        },
        {
            gameType: "COD",
            image: Culture

        },
        {
            gameType: "COD - BLACK OPS",
            image: Fifa2
        },
        {
            gameType: "FIFA",
            image: Fifa3
        },
        {
            gameType: "FORTNITE",
            image: Fifa4
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
                <div className ="choose-games-title">Choose your Games</div>
                <div className = "align-center flex-column">
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
                    {games.map((item, index) => (
                        
                            <div className ="games-item mt-4 cursor-pointer" onClick={setGamesPage} key={index}>
                                <img src={item.image} alt ={item.gameType}></img>
                                <div className = "games-name-box">
                                    <div className ="pl-4 pnl-4">{item.gameType}</div>
                                </div>
                            </div>
                            
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

export default ChooseGames

export const Dropdown = styled.div`
        height:298px;
        width:257px;
        display:flex;
        justify-content: center;
        align-items:center;
        position: relative;
        top: 20px;
        z-index: 5;
        border-radius:5px;
        background: linear-gradient(263.86deg, #FACF5A 0%, #DC0D16 100%);
        @media only screen and (max-width: 1000px) {
            width: 200px;
            height: 296px
        }
    .dropdown-inner{
        height: 296px;
        width: 255px;
        position: relative;
        background-color: black;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        border-radius:5px;
        @media only screen and (max-width: 1000px) {
            width: 198px;
            height: 294px
        }
    }
    .dropdown-item{
        padding: 10px 0px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height:50px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
        line-height: 27px;
        cursor: pointer;
        padding-left:25px;

        :hover{
            background-color:#FACF5A
        }

    }

`;

export const ContentBody = styled.div`
    width: 72vw;
    margin: auto;
    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`;
