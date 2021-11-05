import React from 'react';
import gamesImage from "../../assets/chessGame.png";
import styled from 'styled-components';

function GamesHeader() {
    return (
        <div className ="games-profile">
            <ProfileHeader image ={gamesImage}>
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
            </ProfileHeader>

            <GamesDescription>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium aliquet id quisque
                    </p>
                </div>
            </GamesDescription>
            
            
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

    p {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #FFFFFF;
        margin: 0;
    }
`;
