import React,{ useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import callOfDutyImage from "../../assets/callOfDutyPng.png";
import Culture from "../../assets/Culture.png";
import Fifa2 from "../../assets/Fifa2.png";
import Fifa3 from "../../assets/Fifa3.png";
import Fifa4 from "../../assets/Fifa4.png";
import Fifa5 from "../../assets/Fifa5.png";
import { ProgressBar } from 'react-bootstrap';
import { ContentBody, Dropdown } from './ChooseGames';
import { getTournament, setTournament } from '../../redux/actions/tournment.actions';
import Skeleton from 'react-loading-skeleton';

function ChooseTournament() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showDropDown,setShowDropDown] = useState(false);
    const [tournList, setTournList] = useState("");
    const tournamentList = useSelector(state => state.tournamentState.tournamentsList);
    const [filteredTournamentList, setFilteredTournamentList] = useState(tournamentList)
    const tournaments = [
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

    const getListOfTournaments = async () => {
        let { response} = await dispatch(getTournament())
        setFilteredTournamentList(response)
    }

    const setTournToView = (data) =>{
        dispatch(setTournament(data))
        history.push("/tournaments")
    }

    const filter = (data) => {
        const filteredList = tournamentList.filter(
            (item) => item.name === data
        );
        setFilteredTournamentList(filteredList)
        setShowDropDown(false)
        
    }

    const reset = () => {
        setFilteredTournamentList(tournamentList)
        setShowDropDown(!showDropDown)
    }

    useEffect(() => {
        if(!tournamentList ){
            getListOfTournaments()
        }else {
            setTournList(tournamentList)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tournList])

    return (
        <div className = "choose-tournament">
            <ContentBody>

                <div className = "choose-games-header">
                    <div className ="choose-games-title">Upcoming Tournament</div>
                    <div className="align-center flex-column">
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
                        { showDropDown && (
                            <Dropdown>
                                <div className= "dropdown-inner">
                                    {tournamentList &&
                                        tournamentList.map((item, index) => (
                                        <div className = "dropdown-item" onClick= {()=> filter(item.name)}> {item.name}</div>
                                    ))}
                                </div>

                            </Dropdown>
                        )}
                    </div>
                </div>
                
                <div className = "choose-games-section">
                    {filteredTournamentList &&
                        filteredTournamentList.map((item, index) => (
                            <TournamentView key-={index}>
                                <div className = "upcoming-tornament-name">{item?.name}
                                </div>
                                <div>
                                    <img src={item?.image? item.image :Culture} alt={item?.name} class="max-100"></img>
                                </div>
                                <TournamentInfo>
                                    <div className ="tourn-name">{item?.name}</div>            
                                    <ProgressBar now={((item?.noOfPlayers/ item?.limit)* 100)}/>
                                    <div className = "tourn-completed mt-2">{item?.noOfPlayers} of {item?.limit}</div>
                                    <div className = "fee mb-10"> Fee </div>
                                    <div className = "justify-space " >
                                        <div className = "fee-amount">{item?.fee} TNBC</div>
                                        <div className = "join-free float-btn" onClick = {()=> setTournToView(item)}>
                                            View
                                        </div>
                                    </div>
                                
                                </TournamentInfo>
                            </TournamentView>
                        ))
                    }
                    {!tournamentList && (
                        tournaments.map((item, index) => (
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

export default ChooseTournament

export const TournamentView = styled.div`
    width: 31.5%;
    filter: ${props => props.grey? "grayscale(100%)": ""};

    .max-100{
        height: 233px
    }
    >img{
        height: auto !important;
    }

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
    @media only screen and (max-width: 1350px) {
        width: 48%;
    }
    @media only screen and (max-width: 600px) {
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
            font-size: 15px;
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
            font-size: 17px;
            line-height: 18px;
        }
    }

    .fee-amount {
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 40px;
        color: #FFFFFF;
        @media only screen and (max-width: 800px) {
            font-size: 15px;
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
            height:30px;
            width: 80px;
            font-size: 18px;
            font-weight:500;
           
        }
    }

`;

