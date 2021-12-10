import React, { useState } from 'react';
import styled from 'styled-components';
import { Portal } from '../../modals/Portal';
import ProfileBackdrop from "../../assets/profilebackdrop.png";
import Image from "../../assets/profileImage.png";
import {ReactComponent as GoldCup} from "../../assets/GoldCup.svg";
import {ReactComponent as SilverCup} from "../../assets/SilverCup.svg";
import {ReactComponent as BronzeCup} from "../../assets/Bronze.svg";
import { useHistory } from 'react-router';
import { ContentBody } from '../HomePage/ChooseGames';


function ProfileManagement() {
    const profileDetails = {
        image: Image,
        profileName: "Gemini",
        userId: 123442,
        profileViews: 100,
        joined: "21/09/2022",
        gameId: 1231,
        points: 100812,
        pointsRank: 2,
        earnings: 2000,
        earningsRank: 20,
        wins: 10,
        loss: 5,
        winRate: 70,
        recentMatches: "W-L-L-W-W",
        gold: 12,
        silver: 5,
        bronze: 6,
    }
    const history = useHistory()

    const achievements = [
        {
            id: 1,
            status: "Survivor",
        },
        {
            id: 2,
            status: "Survivor",
        },
        {
            id: 3,
            status: "Survivor",
        },
        {
            id: 4,
            status: "Survivor",
        },
        {
            id: 5,
            status: "Survivor",
        },
        {
            id: 6,
            status: "Survivor",
        },
        {
            id: 7,
            status: "Survivor",
        },
        {
            id: 8,
            status: "Survivor",
        },     
    ]
    const [showModal, setShowModal]= useState(true);
    const [modalData, setModalData] = useState("");

    function showTrophyModal(e){
        setShowModal(true)

    }
    return (
        <div className = "leaderboard-page fadeInUp animated">
            <Header image = {ProfileBackdrop}>
                <ContentBody>
                    <div className = "profile-info CUR">
                        <ProfileImage image= {profileDetails.image} onClick = {()=> history.push("/setting")}/>
                        <ProfileInfo>
                            <div className = "profile-name">{profileDetails.profileName}</div>
                            <div className = "profile-details" >Profile views : {profileDetails.profileViews}</div>
                            <div className = "profile-details">Joined {profileDetails.joined}</div>
                            <div className = "profile-details">Game IDs: {profileDetails.gameId}</div>
                        </ProfileInfo>
                    </div>
                </ContentBody>
            </Header>
            <ContentBody>
                <GamesDescription>
                
                        <div className = "profile-record">
                            <div className = "record-heading">POINTS</div>
                            <div className = "record-details">{profileDetails.points} TP</div>
                            <div className = "record-rank"> RANKED # {profileDetails.pointsRank}</div>
                        </div>
                        <div className = "profile-record">
                            <div className = "record-heading">EARNINGS</div>
                            <div className = "record-details">{profileDetails.earnings} TP</div>
                            <div className = "record-rank"> RANKED # {profileDetails.earningsRank}</div>
                        </div>
                        <div className = "profile-record">
                            <div className = "record-heading">RECORD</div>
                            <div className = "record-details">{profileDetails.wins} - {profileDetails.loss}</div>
                            <div className = "record-rank"> {profileDetails.winRate}% WIN RATE</div>
                        </div>
                        <div className = "profile-record">
                            <div className = "record-heading">RECENT MATCHES</div>
                            <div className = "record-details"> {profileDetails.recentMatches}</div>
                            <div className = "record-rank invisible">"" </div>
                        </div>
                
                            
                </GamesDescription>
            
            
            <Trophies>
                <div className = "trophies-heading">TOURNAMENT TROPHIES</div>
                <TrophyCarbin>
                    <CupType type = {1} onClick={()=> showTrophyModal(1)}>
                        <div className = "trophy-icon">
                            <GoldCup/>
                        </div>
                        <div className = "trophy-record">
                            <div className = "trophy-type ">GOLD TROPHIES</div>
                            <div className = "trophy-amount">{profileDetails.gold}</div> 
                        </div>
                    </CupType>

                    <CupType type ={2}>
                        <div className = "trophy-icon">
                            <GoldCup/>
                        </div>
                        <div className = "trophy-record">
                            <div className = "trophy-type "> SILVER TROPHIES</div>
                            <div className = "trophy-amount">{profileDetails.silver}</div> 
                        </div>
                    </CupType>

                    <CupType type ={3}>
                        <div className = "trophy-icon">
                            <GoldCup/>
                        </div>
                        <div className = "trophy-record">
                            <div className = "trophy-type ">BRONZE TROPHIES</div>
                            <div className = "trophy-amount">{profileDetails.bronze}</div> 
                        </div>
                    </CupType>

                </TrophyCarbin>

                <div className = "trophies-heading mt-5">ACHIEVEMENTS</div>

                <AchievementCarbin>
                    {achievements &&
                        achievements.map((item,index)=> (
                            <div className ="achievement-card">
                                <div className ="achievement-image">
                                </div>
                            </div>
                            

                        ))
                    }

                </AchievementCarbin>
                
            </Trophies>
            </ContentBody>
            {showModal && (
                <Portal>
                    <div>
                        hiiiiii
                    </div>
                </Portal>
            )}
            
            
        </div>
    )
}

export default ProfileManagement;

const Header = styled.div`
    width: 100vw;
    height: 400px;
    margin-top: 90px;
    padding: 40px 90px;
    background-image: url(${props => props.image? props.image : ""});
    display: flex;
    align-items: center;
    .img {
        object-fit: contain;
    }
    .profile-info {
        display: flex;
        justify-content: left;
        align-items: center;
    }
    @media only screen and (max-width: 1000px) {
        padding: 30px;
        height: 276px;
    }
`;




const ProfileImage = styled.div`
    width: 150px;
    height: 150px;
    border: 1px solid white;
    border-radius: 100%;
    margin-right: 30px;
    background-image: url(${props => props.image? props.image : ""});
    background : ${props => props.image? "" : "#ffffff"};
    cursor:pointer;
    @media only screen and (max-width: 1000px) {
        width: 70px;
        height: 70px;
        margin-right: 10px;
    }
`;

const ProfileInfo = styled.div`
    color: white;

    .profile-name {
        font-style: normal;
        font-weight: 800;
        font-size: 36px;
        line-height: 53px;
        color: #FFFFFF;
        @media only screen and (max-width: 1000px) {
            font-size: 20px;
            line-height: 19px;
            margin-bottom: 10px;
        }
    }

    .profile-details{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
        @media only screen and (max-width: 1000px) {
            font-size: 14px;
            line-height: 20px;
            font-weight: 300;
        }
    }

`
const GamesDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:auto;
    max-width: 1140px;
    height: 163px;
    position: relative;
    top: -55px;
    background: #1D1D1D;
    border-radius: 5px;
    @media only screen and (max-width: 1000px) {
        height: auto;
        width: 82vw;
    }

    .profile-record {
        width: 285px;
        height: 120px;
        border-right: 1px solid rgba(255, 255, 255, 0.15);
        margin: 24px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media only screen and (max-width: 1000px) {
            height: auto;
        }

        .record-heading {
            display: flex;
            justify-content: center;
            font-style: normal;
            font-weight: 800;
            font-size: 22px;
            line-height: 33px;
            color: #FACF5A;
            @media only screen and (max-width: 1000px) {
                font-style: normal;
                font-weight: 500;
                font-size: 9px;
                line-height: 10px;
            }
        }
        .record-details {
            display: flex;
            justify-content: center;
            font-style: normal;
            font-weight: 800;
            font-size: 30px;
            line-height: 45px;
            color: #FFFFFF;
            @media only screen and (max-width: 1000px) {
                font-style: normal;
                font-weight: 500;
                font-size: 9px;
                line-height: 10px;
            }
        }

        .record-rank {
            display: flex;
            justify-content: center;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            color: rgba(255, 255, 255, 0.6);
            @media only screen and (max-width: 1000px) {
                font-style: normal;
                font-weight: 500;
                font-size: 9px;
                line-height: 10px;
            }
        }
        .invisible {
            opacity: 0
        }
    }
`
const Trophies = styled.div`
    width: 82vw;
    margin:auto;

    .trophies-heading {
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 42px;
        color: #FFFFFF;
        @media only screen and (max-width: 1000px) {
            font-size: 15px;
            line-height: 19px;
            margin-bottom: 10px;
        }
    }

`;

const TrophyCarbin =styled.div`
    display: flex;
    padding: 30px 55px;
    justify-content: space-around;
    @media only screen and (max-width: 1000px) {
        padding: 10px 55px;
    }

`;

const  CupType = styled.div`
    display: flex;
    height: 115px;
    width: 330px;
    @media only screen and (max-width: 1000px) {
        height: auto;
    }

    .trophy-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 113px;
        height: 115px;
        left: 1px;
        top: 0px;
        background: #1D1D1D;
        border-radius: 4px;
        @media only screen and (max-width: 1000px) {
            width: 40px;
            height: 50px;
            padding:10px;
        }
    }

    .trophy-record {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 216px;
        height: 115px;
        background: rgba(49, 48, 48, 0.4);
        border-radius: 5px;
        padding-left: 20px;
        @media only screen and (max-width: 1000px) {
            width: 90px;
            height: 50px;
            padding-left: 5px;
        }
    }

    .trophy-type {
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.04em;
        text-transform: uppercase;
        color: ${props=> props.type === 1? "#FACF5A" :  props.type === 2 ? "#CCCDCF" : props.type === 3 ? "#9B6E43" : "" };
        @media only screen and (max-width: 1000px) {
            font-weight: 500;
            font-size: 10px;
            line-height: 10px;
            margin-bottom: 10px;
            white-space:nowrap
        }
    }
    .trophy-amount {
        font-style: normal;
        font-weight: 800;
        font-size: 40px;
        line-height: 59px;
        color: #FFFFFF;
        @media only screen and (max-width: 1000px) {
            font-weight: 500;
            font-size: 10px;
            line-height: 10px;
        }
    }
`;

const AchievementCarbin = styled.div`
    display: flex;
    flex-wrap: wrap;

    .achievement-card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 0 20%; 
        margin: 20px;
        height: 100px;
        background-color: blue;
        width: 300px;
        height: 272px;
        left: 654px;
        background: #1D1D1D;
        @media only screen and (max-width: 1000px) {
            width: 100px;
            height: 100px;
            margin:10px;
        }
    }
    .achievement-image {
        width: 139px;
        height: 139px;
        border-radius: 100%;
        background: #C4C4C4;
        @media only screen and (max-width: 1000px) {
            width: 50px;
            height: 50px;
        }
    }

`;
