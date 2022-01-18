import React, { useState } from 'react';
import styled from 'styled-components';
import { ProfileHeader } from '../GamesManagement/GamesHeader';
import gamesImage from "../../assets/chessGame.png";
import { TournamentView } from '../HomePage/ChooseTournament';
import callOfDutyImage from "../../assets/callOfDutyPng.png";

function TournamentManagement() {
    const [view, setView] = useState("info");
    return (
        <div className ="games-profile">
            <ProfileHeader image ={gamesImage}>
            </ProfileHeader>  
            <TournamentHeader TournamentImage = {callOfDutyImage}>
                <div className="image-section">
                    <div className="tourn-fee">Prize: 10,000 TNBC</div>
                </div>
                <div className="toun-info ml-3">
                    <div className="tourn-title mb-3">OCTOBER BLITZ</div>
                    <div className="tourn-extra mb-1"> Type: <span className="content">{"Bracket"}</span> | Participant: <span className="content">{"64"} </span> |  Entry Fee: <span className="content">{"40 TNBC"}</span></div>
                    <div className="tourn-extra mb-1"> Registration Opens: <span className="content">{"30/10/2021"}</span></div>
                </div>
            </TournamentHeader>
            <EnrollSection>
                <div className="yellow-text">Starts in 10d 24hrs 40mins  28secs</div>
                <button className="enroll-btn"> Enroll</button>
            </EnrollSection>
            <TabSection>
                <div className="inner-tab">
                    <div className={`cursor-pointer ${view === "info" && " white"} `} onClick={() => setView("info")}>Info</div>
                    <div className={`cursor-pointer ${view === "rules" && " white"}`} onClick={() => setView("rules")}>Rules</div>
                    <div className={`cursor-pointer ${view === "apply" && " white"}`} onClick={() => setView("apply")}>How to apply</div>
                    <div className={`cursor-pointer ${view === "bracket" && " white"}`} onClick={() => setView("bracket")}>Bracket</div>
                    <div className={`cursor-pointer ${view === "teams" && " white"}`} onClick={() => setView("teams")}>Teams</div>
                    <div className={`cursor-pointer ${view === "faq" && " white"}`} onClick={() => setView("faq")}>FAQ</div>
                </div>
            </TabSection>
            <InfoView>

            </InfoView>

        </div>
    )
}

export default TournamentManagement;

const TournamentHeader = styled.div`
    max-width: 80%;
    max-height: 290px;
    bottom: 60px;
    background: #1D1D1D;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    position:relative;
    margin: auto;
    font-style: normal;
    font-weight: 800;
    color: #FFFFFF;
    .image-section{
        width: 352px;
        min-height: 213px;
        background-image: url(${props => props.TournamentImage});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 5px;
        position: relative;
    }
    .tourn-fee{
        position: absolute;
        width: 100%;
        height: 30px;
        top: -1px;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 5px 5px 0px 0px;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tourn-title{
        font-size: 34px;
        line-height: 50px;
    }
    .tourn-extra{
        font-size: 24px;
        line-height: 36px;
        font-weight: 500;
    }
    .content{
        font-weight: 300;
    }

`;
const EnrollSection = styled.div`
    max-width: 80%;
    min-height: 72px;
    background: #1D1D1D;
    border-radius: 5px;
    padding: 18px 32px;
    margin: auto;
    position: relative;
    bottom: 60px;
    margin-top: 0.5rem!important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .yellow-text{
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 36px;
        color: #FACF5A;
    }
    .enroll-btn{
        width: 105px;
        height: 32px;
        color: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(269.22deg, #FACF5A 0%, #DC0D16 100%);
        border-radius: 5px;
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 30px;
        border: none;
    }

`;
const TabSection = styled.div`
    max-width: calc(80%);
    min-height: 72px;
    background: linear-gradient(269.22deg, #FACF5A 0%, #DC0D16 100%);
    border-radius: 5px;
    margin: auto;
    position: relative;
    bottom: 60px;
    margin-top: 2.5rem!important;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner-tab{
        min-width: calc(100% - 4px);
        min-height: 70px;
        background: #1D1D1D;
        border-radius: 5px;
        padding: 16px 101px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #949191;
    }
    .white{
        color: #ffffff
    }
`;
const InfoView = styled.div`
    max-width: 80%;
    min-height: 554px;
    background: #1D1D1D;
    border-radius: 5px;
    padding: 18px 32px;
    margin: auto;
    position: relative;
    bottom: 60px;
    margin-top: 2.5rem!important;

    

`;