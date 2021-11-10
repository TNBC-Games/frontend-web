import React from 'react';
import styled from 'styled-components';
import LeaderBoardHeader from "../../assets/LeaderboardHeader.png";

function LeaderBoardPage() {
    return (
        <div className ="leaderboard-page">
            <Header image ={LeaderBoardHeader}>
                <div className = "heading">
                    LEADERBOARDS
                </div>


                <div className = "flex mt-5">

                    <div className ="games-filter">
                        <div className ="games-filter-inner">
                            <div className ="games-filter-title"> All Games </div>
                        </div>
                    </div>

                    <div className ="games-filter">
                        <div className ="games-filter-inner">
                            <div className ="games-filter-title"> All Games </div>
                        </div>
                    </div>
                </div>
            </Header>

            <div className ="justify-center">
                <LeaderboardTable>

                </LeaderboardTable>

            </div>



            
        </div>
    )
}

export default LeaderBoardPage

export const Header = styled.div`
    width: 1469px;
    height: 223px;
    margin-top: 90px;
    padding: 40px 90px;
    background-image: url(${props => props.image});
    mix-blend-mode: hard-light;

    .heading {
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 48px;
        color: #FFFFFF;
    }

    .games-filter {
        height:60px;
        width:259px;
        margin-right: 20px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(263.86deg, #FACF5A 0%, #DC0D16 100%);
    }

    .games-filter-inner {
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        height:56px;
        width:98%;
        padding-left: 20px;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #FFFFFF;    
    }
`;

export const LeaderboardTable = styled.div`
    width: 1262px;
    height: 1114px;
    background: #1D1D1D;
    margin-bottom: 100px;

`
export const DateFilter = styled.div`
    width: 100%;
    height:

`
