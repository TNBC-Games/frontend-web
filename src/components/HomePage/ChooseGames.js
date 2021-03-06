import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router';
import styled from 'styled-components';
import callOfDutyImage from "../../assets/callOfDutyPng.png";
import Culture from "../../assets/Culture.png";
import Fifa2 from "../../assets/Fifa2.png";
import Fifa3 from "../../assets/Fifa3.png";
import Fifa4 from "../../assets/Fifa4.png";
import Fifa5 from "../../assets/Fifa5.png";
// import Slider from "react-slick";
// import { Carousel } from 'react-bootstrap';
import { DummySlider } from './ChooseTournament';
import { getGames, getGame } from '../../redux/actions/tournment.actions';
import Skeleton from 'react-loading-skeleton';

function ChooseGames() {
    const history = useHistory();
    const dispatch = useDispatch()
    const [showDropDown,setShowDropDown] = useState(false);
    const [loading, setLoading] = useState(false);
    const listOfGames = useSelector(state => state.tournamentState.gamesList);
    const [filteredGamesList, setFilteredGamesList] = useState(listOfGames);
    // const [gamesList, setGamesList] = useState(listOfGames);
    
    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     speed: 500,
    //     rows: 2,
    //     slidesPerRow: 2
    // };


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
    
    
    const setGamesPage = async(item) =>{
        await dispatch(getGame(item.name))
        history.push("/game-management")
    }
    const getListOfGames = async () => {
        setLoading(true)
        let { response} = await dispatch(getGames())
        setTimeout(()=>{
            setFilteredGamesList(response)
        },1500)
        //
    }
    const filter = (data) => {
        const filteredList = listOfGames.filter(
            (item) => item.name === data
        );
        setFilteredGamesList(filteredList)
        setShowDropDown(false)
        
    }

    const reset = () => {
        setFilteredGamesList(listOfGames)
        setShowDropDown(!showDropDown)
    }
    useEffect(() => {
        if (!listOfGames){
            getListOfGames()
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listOfGames])
    return (
        <div className = "choose-games">
            
            <ContentBody>
                <div className = "choose-games-header">
                    <div className ="choose-games-title">Choose your Games</div>
                    <div className = "align-center flex-column">
                        <div className ="games-filter cursor-pointer">
                            <div className ="games-filter-inner" onClick= {reset}>
                                <div className ="games-filter-title"> All Games </div>
                                <div className ="mr-2">
                                    <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 0L10.2631 6H0.73686L5.5 0Z" fill="white"/>
                                        <path d="M5.5 16L0.73686 10H10.2631L5.5 16Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {showDropDown && (
                            <Dropdown>
                                <div className= "dropdown-inner">
                                    {listOfGames &&
                                        listOfGames.map((item, index) => (
                                            <div className = "dropdown-item" onClick= {() => filter(item.name)}> {item.name}</div>
                                    
                                        ))
                                    }
                                </div>
                            </Dropdown>
                        )}
                    </div>
                </div>

                <div className = "choose-games-section">
                    {filteredGamesList && (
                        filteredGamesList.map((item, index) => (
                            <div className ="games-item mt-4 cursor-pointer" onClick={() => setGamesPage(item)} key={index}>
                                <img src={item.image? item.image: Fifa2} alt ={item.name}></img>
                                <div className = "games-name-box">
                                    <div className ="pl-4 pnl-4">{item.name}</div>
                                </div>
                            </div>
                        ))
                    )}
                    {!filteredGamesList && (
                        games.map((item, index) => (
                            <div className ="games-item mt-4 cursor-pointer" key={index}>
                                <Skeleton height={"100%"} width={"100%"} baseColor= "#262626" highlightColor="#404040" borderRadius={5}/>
                            </div>
                        ))
                    )}
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
        width:257px;
        height: auto !important;
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
        height: 99% !important;
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
            background-color:#FACF5A;
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
