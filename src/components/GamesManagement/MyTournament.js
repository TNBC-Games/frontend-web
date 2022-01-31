import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import callOfDutyImage from "../../assets/callOfDutyPng.png";
import Culture from "../../assets/Culture.png";
import Fifa2 from "../../assets/Fifa2.png";
import Fifa3 from "../../assets/Fifa3.png";
import Fifa4 from "../../assets/Fifa4.png";
import Fifa5 from "../../assets/Fifa5.png";
import myTournamentImage from "../../assets/myTournamentImage.png";
import { TournamentView } from '../HomePage/ChooseTournament';
import { ProfileHeader } from './GamesHeader';
import { ProgressBar } from 'react-bootstrap';
import { TournamentInfo } from '../HomePage/ChooseTournament';
import { ContentBody } from '../HomePage/ChooseGames';
import { getMyTournament } from '../../redux/actions/tournment.actions';




function MyTournament() {
    const dispatch = useDispatch();
    const [active, setActive] = useState(1);
    const [completedList, setCompletedList] = useState("");
    const [ongoingList, setOngoingList] = useState("");
    const myTournament = useSelector(state => state.tournamentState.myTournament);
    const accessToken = sessionStorage.getItem("accesstoken");
    const games = [
        {
            gameType: "CHESS",
            image: callOfDutyImage,
            completedTournament: 24,
            totalTournament: 24,
            completedPercent: 40,
            fee: "2h 30m 10s",
            completed: true,
        },
        {
            gameType: "COD",
            image: Culture,
            completedTournament: 2,
            totalTournament: 34,
            completedPercent: 40,
            fee: "5h 10m 20s",
            completed: true,
        },
        {
            gameType: "COD - BLACK OPS",
            image: Fifa3,
            completedTournament: 5,
            totalTournament: 34,
            completedPercent: 30,
            fee: "3h 30m 20s",
            completed: true,
        },
        {
            gameType: "FIFA",
            image: Fifa2,
            completedTournament: 7,
            totalTournament: 14,
            completedPercent: 20,
            fee: "8h 40m 5s",
            completed: true,
        },
        {
            gameType: "FORTNITE",
            image: Fifa4,
            completedTournament: 23,
            totalTournament: 34,
            completedPercent: 32,
            fee: "1h 30m 20s",
            completed: false,
        },
        {
            gameType: "CHESS",
            image: callOfDutyImage,
            completedTournament: 24,
            totalTournament: 24,
            completedPercent: 40,
            fee: "9h 50m 20s",
            completed: false,
        },
        {
            gameType: "COD",
            image: Fifa5,
            completedTournament: 2,
            totalTournament: 34,
            completedPercent: 40,
            fee: "5h 30m 10s",
            completed: false,
        },
        {
            gameType: "COD - BLACK OPS",
            image: callOfDutyImage,
            completedTournament: 5,
            totalTournament: 34,
            completedPercent: 30,
            fee: "2h 20m 20s",
            completed: false,
        },
        {
            gameType: "FIFA",
            image: Fifa4,
            completedTournament: 7,
            totalTournament: 14,
            completedPercent: 20,
            fee: "2h 40m 50s",
            completed: true,
        },
        {
            gameType: "FORTNITE",
            image: Culture,
            completedTournament: 23,
            totalTournament: 34,
            completedPercent: 32,
            fee: "1h 20m 20s",
            completed: false,
        },
        {
            gameType: "FORTNITE",
            image: callOfDutyImage,
            completedTournament: 23,
            totalTournament: 34,
            completedPercent: 32,
            fee: "5h 30m 10s",
            completed: true,

        },
        {
            gameType: "MINECRAFT",
            image: Fifa2,
            completedTournament: 12,
            totalTournament: 34,
            completedPercent: 24,
            fee: "6h 10m 10s",
            completed: false,
        },
        {
            gameType: "CHESS",
            image: Fifa3,
            completedTournament: 24,
            totalTournament: 24,
            completedPercent: 40,
            fee: "1h 10m 10s",
            completed: false,
        },
        {
            gameType: "COD",
            image: callOfDutyImage,
            completedTournament: 2,
            totalTournament: 34,
            completedPercent: 40,
            fee: "5h 30m 10s",
            completed: false,
        },
        {
            gameType: "COD - BLACK OPS",
            image: Culture,
            completedTournament: 5,
            totalTournament: 34,
            completedPercent: 30,
            fee: "5h 30m 10s",
            completed: false,
        },
        {
            gameType: "FIFA",
            image: Fifa3,
            completedTournament: 7,
            totalTournament: 14,
            completedPercent: 20,
            fee: "5h 30m 10s",
            completed: false,
        },
        {
            gameType: "FORTNITE",
            image: Fifa5,
            completedTournament: 23,
            totalTournament: 34,
            completedPercent: 32,
            fee: "5h 30m 10s",
            completed: false,

        },
        {
            gameType: "FORTNITE",
            image: Culture,
            completedTournament: 23,
            totalTournament: 34,
            completedPercent: 32,
            fee: "5h 30m 10s",
            completed: false,

        },

    ]

    const getMyTournaments = async () =>{
        const token = accessToken
        let {status, response} = await dispatch(getMyTournament(token))
    }

    useEffect(() => {
        const completedList = games.filter(
            (item) => item.completed === true
        );

        const ongoing = games.filter(
            (item) => item.completed === false
        );

        setCompletedList(completedList);
        setOngoingList(ongoing)

    }, [active])

    useEffect(() => {
        if(!myTournament){
           // getMyTournaments()
        }
    }, [myTournament])

    return (
        <div className="leaderboard-page fadeInUp animated">
            <MyTournamentHeader image={myTournamentImage}>
                <ContentBody>
                    <div className="my-tournament">
                        MY TOURNAMENTS
                    </div>
                </ContentBody>
            </MyTournamentHeader>

            <CompletedStatus>
                <ContentBody>
                    <OngoingCompleted active={active} >
                        <div className="ongoing mr-4" onClick={() => setActive(1)}>
                            Ongoing
                        </div>
                        <div className="completed ml-4" onClick={() => setActive(2)}>
                            Completed
                        </div>

                    </OngoingCompleted>
                </ContentBody>

            </CompletedStatus>

            <ContentBody>
                <div className="choose-games-section my-tournaments py-5">
                    {active === 1 ? (
                        <>
                            {ongoingList &&
                                ongoingList.map((item, index) => (

                                    <TournamentView key={index}>

                                        <div className="upcoming-tornament-name">{item?.gameType}
                                        </div>
                                        <div>
                                            <img src={item?.image? item.image :Culture} alt={item?.gameType}></img>
                                        </div>
                                        <TournamentInfo>
                                            <div className="tourn-name">{item?.gameType}</div>
                                            <ProgressBar now={item?.completedPercent} />
                                            <div className="tourn-completed mt-2">{item?.completedTournament} of {item?.totalTournament}</div>
                                            <div className="fee"> Starts in </div>
                                            <div className="justify-space " >
                                                <div className="fee-amount">{item?.fee}</div>
                                                <div className="join-free float-btn">
                                                    View
                                                </div>
                                            </div>

                                        </TournamentInfo>

                                    </TournamentView>

                                ))
                            }
                        </>

                    ) : (
                        <>
                            {completedList &&
                                completedList.map((item, index) => (
                                    <TournamentView key={index} grey={true}>
                                        <div className="upcoming-tornament-name">{item?.gameType}
                                        </div>
                                        <div>
                                            <img src={item?.image} alt={item?.gameType}></img>
                                        </div>
                                        <TournamentInfo>
                                            <div className="height-220">
                                                <div className="tourn-name mb-0 pb-3 border-bottom">{item?.gameType}</div>

                                                <div className="justify-space mb-10 mt-3" >
                                                    <div className="fee justify-center align-items-center">Earnings</div>
                                                    <div className="fee-amount">{item?.fee} TNBC</div>
                                                </div>

                                                <div className="justify-space mb-10" >
                                                    <div className="fee justify-center align-items-center">Trophy</div>
                                                    <div className="fee-amount">Gold</div>
                                                </div>

                                                <div className="justify-space mb-10" >
                                                    <div className="fee justify-center align-items-center">Points</div>
                                                    <div className="fee-amount">2000</div>
                                                </div>
                                            </div>

                                        </TournamentInfo>
                                    </TournamentView>
                                ))
                            }

                        </>

                    )}

                </div>
            </ContentBody>

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
    @media only screen and (max-width: 1000px) {
        padding: 30px 10px 0px 30px;
    }
`;

const CompletedStatus = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 90px;

    @media only screen and (max-width: 1000px) {
        padding: 30px 10px 0px 30px;
    }
`;

const OngoingCompleted = styled.div`
    display: flex;
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 36px;
    color: #ffffff;

    .ongoing {
        cursor: pointer;
        opacity: ${props => props?.active === 1 ? "" : "0.6"};
    }

    .completed {
        cursor: pointer;
        opacity: ${props => props?.active === 2 ? "" : "0.6"};
    }

`;