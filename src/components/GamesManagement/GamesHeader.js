import React from 'react';
import gamesImage from "../../assets/chessGame.png";
import styled from 'styled-components';
import {ReactComponent as LeaderIcon} from "../../assets/LeaderboardIcon.svg";
import {ReactComponent as GameRules} from "../../assets/GameRulesIcon.svg";
import callOfDutyImage from "../../assets/callOfDutyPng.png";
import { ProgressBar } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { ContentBody } from '../HomePage/ChooseGames';

function GamesHeader() {
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
    const history = useHistory()
    return (
        <div className ="games-profile">
           
                <ProfileHeader image ={gamesImage}>
                    <GamesContentBody>
                        <GameName>
                            CHESS
                        </GameName>
                        <LiveMatch>
                            <RoundDot/>
                            LIVE MATCHES

                            <LiveMatchCount>
                                5
                            </LiveMatchCount>
                        </LiveMatch>
                    </GamesContentBody>
                </ProfileHeader>
            

                <GamesDescription>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium aliquet id quisque
                        </p>
                    </div>
                </GamesDescription>

                <ContentBody>
                    <RulesLeaderboard>
                        <div className ="pr-4 cursor-pointer" onClick={()=> history.push("/leaderboard")}>
                            <LeaderIcon className ="mr-15px cursor-pointer"/>
                            Leaderboard
                        </div>
                        <div>
                            <GameRules className ="mr-15px"/>
                            Game rules
                        </div>

                    </RulesLeaderboard>
                </ContentBody>

                <ContentBody>

                    <UpcomingTournamentHead>
                        <div className ="upcomingTournament">
                            UPCOMING TOURNAMENTS
                        </div>
                        
                        <div className = "tournament-category">
                            <div className = "tournament-type">
                                <div className ="checkbox"></div>
                                Blitz
                            </div>

                            <div className = "tournament-type">
                                <div className ="checkbox"></div>
                                Rapid
                            </div>

                            <div className = "tournament-type">
                                <div className ="checkbox"></div>
                                Bullet
                            </div>
                        </div>
                    </UpcomingTournamentHead>

                    <div className = "choose-games-section">
                    {games &&
                        games.map((item, index) => (
                            <div key ={index} className ="tourn-item">
                                <div className = "upcoming-tornament-name">
                                    <p className ="pl-4">{item?.gameType}</p>
                                </div>
                                <div>
                                    <img src={item?.image} alt={item?.gameType}></img>
                                </div>
                                <div className ="tourn-more-info">
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
                                
                                </div>
                                
                            </div>
                        ))
                    }
                    </div>
                </ContentBody>
            


            
            
        </div>
    )
}

export default GamesHeader

export const ProfileHeader = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 90px 100px;
    width:100vw;
    height: 354px;
    background-image: url(${props => props.image})
`;

export const GameName = styled.div`
    font-style: normal;
    font-weight: 800;
    font-size: 64px;
    line-height: 95px;
    color: #FFFFFF;
`

export const LiveMatch = styled.div`
    height: 43px;
    display: flex;
    align-content: center;
    padding: 9px;
    width: 220px;
    background: #000000;
    font-weight: 800px;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff
`;
export const RoundDot = styled.div`
    height:25px;
    width:25px;
    margin-right: 10px;
    border-radius: 100%;
    background: #EB0831;

`;
export const LiveMatchCount = styled.div`
    height:43px;
    display: flex;
    justify-content: center;
    align-items: center;
    width:34px;
    color: white;
    weight: 800px;
    style: normal;
    size: 20px;
    line height: 23px;
    background: rgba(49,49,49);
    position: relative;
    top: -10px;
    left: 16px;
    
`;
export const GamesDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:auto;
    width: 906px;
    height: 100px;
    position: relative;
    top: -55px;
    background: linear-gradient(263.86deg, #FACF5A 0%, #DC0D16 100%);
    border-radius: 5px;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin:auto;
        width: 904px;
        height: 98px;
        position: relative;
        background: #000000;
        border-radius: 5px;

    };

    p{
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #FFFFFF;
        margin: 0;
    }
`;

export const RulesLeaderboard = styled.div`
    display: flex;
    justify-content: flex-end;
    padding:20px 0px;
    align-items: center;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 36px;
    color: #FFFEFE;
`;

export const UpcomingTournamentHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 70px 0px;

    .upcomingTournament{
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        height:40px;
        line-height: 36px;
        color: #FFFEFE;
    }
    .tournament-category {
        display: flex;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
        color: #FFFEFE;
        height: 24px;
    }

    .tournament-type {
        display: flex;
        margin-right: 30px;
        height: 24px;
        align-ites: center;
        justify-content:center;

    }
    .checkbox {
        width: 24.77px;
        height: 24px;
        border: 2px solid #FFFFFF;
        box-sizing: border-box;
        margin-right: 15px
    }
`;

export const GamesContentBody = styled(ContentBody)`
    display: flex;
    justify-content:space-between;
`
