import React from 'react';
import styled from 'styled-components';
import { ProfileHeader } from '../GamesManagement/GamesHeader';
import gamesImage from "../../assets/chessGame.png";

function TournamentManagement() {
    return (
        <div className ="games-profile">
               
            <ProfileHeader image ={gamesImage}>
                <TournamentHeader>
                <div className ="tourn-item">
                    <div className = "upcoming-tornament-name">{'item?.gameType'}
                    </div>
                    <div>
                        <img src={gamesImage} alt={"item?.gameType"}></img>
                    </div>
                </div>

                </TournamentHeader>
            </ProfileHeader>
        </div>
    )
}

export default TournamentManagement;

const TournamentHeader = styled.div`
    min-width: 100%;
    height: 290px;
    left: 143px;
    top: 271px;
    background: #1D1D1D;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    align-items: center;
    .div{

    }

`;
