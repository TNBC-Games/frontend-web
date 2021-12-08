import React, { useEffect } from 'react';
import styled from 'styled-components';
import LeaderBoardHeader from "../../assets/LeaderboardHeader.png";
import { useHistory } from 'react-router';
import { ContentBody } from '../HomePage/ChooseGames';

function LeaderBoardPage() {
    const history = useHistory();
    function gotoProfile() {
        history.push("/")
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="leaderboard-page fadeInUp animated">
            <Header image={LeaderBoardHeader}>
                <ContentBody>
                    <div className = "heading">
                        LEADERBOARDS
                    </div>

                    <div className = "dropdown-section">



                        <div className = "hii flex mt-4">

                            <div className ="games-filter mr-4">
                                <div className ="games-filter-inner">
                                    <div className ="games-filter-title"> All Games </div>
                                    <div className ="mr-4">
                                        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 0L10.2631 6H0.73686L5.5 0Z" fill="white"/>
                                            <path d="M5.5 16L0.73686 10H10.2631L5.5 16Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className ="games-filter ml-4">
                                <div className ="games-filter-inner">
                                    <div className ="games-filter-title"> All Games </div>
                                    <div className ="mr-4">
                                        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 0L10.2631 6H0.73686L5.5 0Z" fill="white"/>
                                            <path d="M5.5 16L0.73686 10H10.2631L5.5 16Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </ContentBody>
            </Header>

            <div className="justify-center">
                <ContentBody>
                    <LeaderboardTable onClick={() => history.push("/profile")} >
                        <table className="table cursor-pointer ">
                            <div className="table-head head-bg">
                                <div className="table-head">
                                    <th className="rank pl-4">
                                        <div className="mt-2"> Rank </div>
                                    </th>
                                    <th className="point">
                                        <div className="mt-2"> Points </div>
                                    </th>
                                    <th className="points earning">
                                        <div className="mt-2 align-end">Earnings</div>
                                    </th>
                                    <th className="points">
                                        <div className="mt-2">Gold</div>
                                    </th>
                                    <th className="points">
                                        <div className="mt-2"> Silver</div>
                                    </th>
                                    <th className="points">
                                        <div className="mt-2"> Bronze</div>
                                    </th>
                                </div>
                            </div>
                            <div className="table-head width-200">
                                <TD className="width-100 white-text">
                                    <td className="rank pl-4">
                                        <div className="mt-2 align-center">
                                            <span className="RankNo pr-4">1</span>
                                            <span className="img mb-2 mr-4 ml-4">

                                            </span>
                                            <span className="username pl-4"> WeirdGuy1542 </span>

                                        </div>
                                    </td>
                                    <td className="point">
                                        <div className="mt-3 align-center"> 3500 </div>
                                    </td>
                                    <td className="points earning">
                                        <div className="mt-3 align-end align-center">30,000 TNBC</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center">7</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 10</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 3</div>
                                    </td>
                                </TD>
                                <TD className="width-100 white-text">
                                    <td className="rank pl-4">
                                        <div className="mt-2 align-center">
                                            <span className="RankNo pr-4">1</span>
                                            <span className="img mb-2 mr-4 ml-4">

                                            </span>
                                            <span className="username pl-4"> WeirdGuy1542 </span>

                                        </div>
                                    </td>
                                    <td className="point">
                                        <div className="mt-3 align-center"> 3500 </div>
                                    </td>
                                    <td className="points earning">
                                        <div className="mt-3 align-end align-center">30,000 TNBC</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center">7</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 10</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 3</div>
                                    </td>
                                </TD>

                                <TD className="width-100 white-text">
                                    <td className="rank pl-4">
                                        <div className="mt-2 align-center">
                                            <span className="RankNo pr-4">1</span>
                                            <span className="img mb-2 mr-4 ml-4">

                                            </span>
                                            <span className="username pl-4"> WeirdGuy1542 </span>

                                        </div>
                                    </td>
                                    <td className="point">
                                        <div className="mt-3 align-center"> 3500 </div>
                                    </td>
                                    <td className="points earning">
                                        <div className="mt-3 align-end align-center">30,000 TNBC</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center">7</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 10</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 3</div>
                                    </td>
                                </TD>

                                <TD className="width-100 white-text">
                                    <td className="rank pl-4">
                                        <div className="mt-2 align-center">
                                            <span className="RankNo pr-4">1</span>
                                            <span className="img mb-2 mr-4 ml-4">

                                            </span>
                                            <span className="username pl-4"> WeirdGuy1542 </span>

                                        </div>
                                    </td>
                                    <td className="point">
                                        <div className="mt-3 align-center"> 3500 </div>
                                    </td>
                                    <td className="points earning">
                                        <div className="mt-3 align-end align-center">30,000 TNBC</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center">7</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 10</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 3</div>
                                    </td>
                                </TD>


                                <TD className="width-100 white-text">
                                    <td className="rank pl-4">
                                        <div className="mt-2 align-center">
                                            <span className="RankNo pr-4">1</span>
                                            <span className="img mb-2 mr-4 ml-4">

                                            </span>
                                            <span className="username pl-4"> WeirdGuy1542 </span>

                                        </div>
                                    </td>
                                    <td className="point">
                                        <div className="mt-3 align-center"> 3500 </div>
                                    </td>
                                    <td className="points earning">
                                        <div className="mt-3 align-end align-center">30,000 TNBC</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center">7</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 10</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 3</div>
                                    </td>
                                </TD>


                                <TD className="width-100 white-text">
                                    <td className="rank pl-4">
                                        <div className="mt-2 align-center">
                                            <span className="RankNo pr-4">1</span>
                                            <span className="img mb-2 mr-4 ml-4">

                                            </span>
                                            <span className="username pl-4"> WeirdGuy1542 </span>

                                        </div>
                                    </td>
                                    <td className="point">
                                        <div className="mt-3 align-center"> 3500 </div>
                                    </td>
                                    <td className="points earning">
                                        <div className="mt-3 align-end align-center">30,000 TNBC</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center">7</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 10</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 3</div>
                                    </td>
                                </TD>


                                <TD className="width-100 white-text">
                                    <td className="rank pl-4">
                                        <div className="mt-2 align-center">
                                            <span className="RankNo pr-4">1</span>
                                            <span className="img mb-2 mr-4 ml-4">

                                            </span>
                                            <span className="username pl-4"> WeirdGuy1542 </span>

                                        </div>
                                    </td>
                                    <td className="point">
                                        <div className="mt-3 align-center"> 3500 </div>
                                    </td>
                                    <td className="points earning">
                                        <div className="mt-3 align-end align-center">30,000 TNBC</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center">7</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 10</div>
                                    </td>
                                    <td className="points">
                                        <div className="mt-3 align-center"> 3</div>
                                    </td>
                                </TD>

                            </div>
                        </table>

                    </LeaderboardTable>
                </ContentBody>

            </div>




        </div>
    )
}

export default LeaderBoardPage

export const Header = styled.div`
    width: 100%;
    height: 243px;

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
        position: relative !important;
        right: 0px !important;
        height:60px;
        width:259px;
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
        height:58px;
        width:99%;
        padding-left: 20px;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #FFFFFF;    
    }
    .dropdown-section {
        height: 70px;
    }

    .hii {
        width: 100%;
        height: 150px;
    }
`;

const LeaderboardTable = styled.div`
    width: 100%;
    height: 606px;
    background: #1D1D1D;
    margin-bottom: 100px;
    .table {
        width: 100%;
        height: 1262px;
        >tr {
            height: 59px;
        }
        
    }
    .width-200{
        width:88vw;
    }
    .table-head {
        width:auto;
        height: 59px;
        border:none;
        box-sizing: border-box;
        color: rgba(255, 255, 255, 0.7);
    }
    .head-bg{
        background: rgba(255, 255, 255, 0.2) !important;
    }
    .rank {
        width: 45%;
        justify-content: flex-start;
        align-items: center;
    }
    .points{
        width: 13%;
        height:59px;
    }
    .earning{
        width: 14% !important;
        background: rgba(255, 255, 255, 0.2);
    }
    .align-end {
        display: flex;
        justify-content: flex-end;
        width: 161px;
        padding-right: 26px;
    }
    .white-text {
        font-size: 18px;
        text-align: right;
        color: #FFFFFF;
    }
    .img{
        height: 43px;
        width: 43px;
        border-radius: 100%;
        background: white;
    }
    .align-center{
        display: flex;
        align-items: center;
    }
`
const DateFilter = styled.div`
    width: 100%;
    height:

`
const TD = styled.tr`
    display: block;
    flex-direction: column;
    height: 78px;
    width: 100%;
`;
