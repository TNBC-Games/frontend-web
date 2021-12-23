import React, { useEffect } from 'react';
import styled from 'styled-components';
import LeaderBoardHeader from "../../assets/LeaderboardHeader.png";
import { useHistory } from 'react-router';
import { ContentBody } from '../HomePage/ChooseGames';

function LeaderBoardPage() {
    const LeaderboardItems = [
        {
            rank: 1,
            name: "WeirdGuy1542",
            points: "3500",
            earnings:"30000",
            gold: "10",
            silver: "5",
            bronze: "4"
        },
        {
            rank: 2,
            name: "WeirdGuy1542",
            points: "3500",
            earnings:"30000",
            gold: "10",
            silver: "5",
            bronze: "4"
        },
        {
            rank: 3,
            name: "WeirdGuy1542",
            points: "3500",
            earnings:"30000",
            gold: "10",
            silver: "5",
            bronze: "4"
        },
        {
            rank: 4,
            name: "WeirdGuy1542",
            points: "3500",
            earnings:"30000",
            gold: "10",
            silver: "5",
            bronze: "4"
        },
        {
            rank: 5,
            name: "WeirdGuy1542",
            points: "3500",
            earnings:"30000",
            gold: "10",
            silver: "5",
            bronze: "4"
        },
        
    ]
    const history = useHistory();
    function gotoProfile() {
        history.push("/")
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
        const date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)  
        console.log(date.getTime())
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
                                    <div className ="mr-4 align-center">
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
                                    <div className ="mr-4 align-center">
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
                    <div className ="child">
                    <LeaderboardTable >
                        <div className = "table-head filter-heading">
                            <div className="flex">
                                <div className= "filter-item"> All TIME</div>
                                <div className= "filter-item"> LAST 30 DAYS</div>
                                <div className= "filter-item"> LAST 7 DAYS</div>
                            </div>
                            <div className="top-10">
                                showing top 10
                            </div>
                        </div>
                      

                        <div className="table-head head-bg">
                            <div className="rank  pl-4">
                                <div className=""> Rank </div>
                            </div>
                            <div className="points">
                                <div className=""> Points </div>
                            </div>
                            <div className="points earning">
                                <div className=" align-end">Earnings</div>
                            </div>
                            <div className="points">
                                <div className="">Gold</div>
                            </div>
                            <div className="points">
                                <div className=""> Silver</div>
                            </div>
                            <div className="points">
                                <div className=""> Bronze</div>
                            </div>
                        </div>
                        <div className="table-head ">
                            <div className="rank pl-4">
                                <div className="align-center">
                                    <span className="RankNo pr-4">1</span>
                                    <span className="img mb-2 mr-4 ml-4">

                                    </span>
                                    <span className="username pl-4"> WeirdGuy1542 </span>

                                </div>
                            </div>
                            <div className="points">
                                <div className="align-center"> 3500 </div>
                            </div>
                            <div className="points earning">
                                <div className=" align-end align-center">30,000 TNBC</div>
                            </div>
                            <div className="points">
                                <div className=" align-center">7</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 10</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 3</div>
                            </div>
                        </div>
                        <div className="table-head ">
                            <div className="rank pl-4">
                                <div className="align-center">
                                    <span className="RankNo pr-4">2</span>
                                    <span className="img mb-2 mr-4 ml-4">

                                    </span>
                                    <span className="username pl-4"> WeirdGuy1542 </span>

                                </div>
                            </div>
                            <div className="points">
                                <div className="align-center"> 3500 </div>
                            </div>
                            <div className="points earning">
                                <div className=" align-end align-center">30,000 TNBC</div>
                            </div>
                            <div className="points">
                                <div className=" align-center">7</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 10</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 3</div>
                            </div>
                        </div>
                        <div className="table-head ">
                            <div className="rank pl-4">
                                <div className="align-center">
                                    <span className="RankNo pr-4">3</span>
                                    <span className="img mb-2 mr-4 ml-4">

                                    </span>
                                    <span className="username pl-4"> WeirdGuy1542 </span>

                                </div>
                            </div>
                            <div className="points">
                                <div className="align-center"> 3500 </div>
                            </div>
                            <div className="points earning">
                                <div className=" align-end align-center">30,000 TNBC</div>
                            </div>
                            <div className="points">
                                <div className=" align-center">7</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 10</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 3</div>
                            </div>
                        </div>
                        <div className="table-head ">
                            <div className="rank pl-4">
                                <div className="align-center">
                                    <span className="RankNo pr-4">4</span>
                                    <span className="img mb-2 mr-4 ml-4">

                                    </span>
                                    <span className="username pl-4"> WeirdGuy1542 </span>

                                </div>
                            </div>
                            <div className="points">
                                <div className="align-center"> 3500 </div>
                            </div>
                            <div className="points earning">
                                <div className=" align-end align-center">30,000 TNBC</div>
                            </div>
                            <div className="points">
                                <div className=" align-center">7</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 10</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 3</div>
                            </div>
                        </div>
                        <div className="table-head ">
                            <div className="rank pl-4">
                                <div className="align-center">
                                    <span className="RankNo pr-4">5</span>
                                    <span className="img mb-2 mr-4 ml-4">

                                    </span>
                                    <span className="username pl-4"> WeirdGuy1542 </span>

                                </div>
                            </div>
                            <div className="points">
                                <div className="align-center"> 3500 </div>
                            </div>
                            <div className="points earning">
                                <div className=" align-end align-center">30,000 TNBC</div>
                            </div>
                            <div className="points">
                                <div className=" align-center">7</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 10</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 3</div>
                            </div>
                        </div>
                        <div className="table-head ">
                            <div className="rank pl-4">
                                <div className="align-center">
                                    <span className="RankNo pr-4">6</span>
                                    <span className="img mb-2 mr-4 ml-4">

                                    </span>
                                    <span className="username pl-4"> WeirdGuy1542 </span>

                                </div>
                            </div>
                            <div className="points">
                                <div className="align-center"> 3500 </div>
                            </div>
                            <div className="points earning">
                                <div className=" align-end align-center">30,000 TNBC</div>
                            </div>
                            <div className="points">
                                <div className=" align-center">7</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 10</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 3</div>
                            </div>
                        </div>
                        <div className="table-head ">
                            <div className="rank pl-4">
                                <div className="align-center">
                                    <span className="RankNo pr-4">7</span>
                                    <span className="img mb-2 mr-4 ml-4">

                                    </span>
                                    <span className="username pl-4"> WeirdGuy1542 </span>

                                </div>
                            </div>
                            <div className="points">
                                <div className="align-center"> 3500 </div>
                            </div>
                            <div className="points earning">
                                <div className=" align-end align-center">30,000 TNBC</div>
                            </div>
                            <div className="points">
                                <div className=" align-center">7</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 10</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 3</div>
                            </div>
                        </div>
                        <div className="table-head ">
                            <div className="rank pl-4">
                                <div className="align-center">
                                    <span className="RankNo pr-4">8</span>
                                    <span className="img mb-2 mr-4 ml-4">

                                    </span>
                                    <span className="username pl-4"> WeirdGuy1542 </span>

                                </div>
                            </div>
                            <div className="points">
                                <div className="align-center"> 3500 </div>
                            </div>
                            <div className="points earning">
                                <div className=" align-end align-center">30,000 TNBC</div>
                            </div>
                            <div className="points">
                                <div className=" align-center">7</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 10</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 3</div>
                            </div>
                        </div>
                        <div className="table-head ">
                            <div className="rank pl-4">
                                <div className="align-center">
                                    <span className="RankNo pr-4">9</span>
                                    <span className="img mb-2 mr-4 ml-4">

                                    </span>
                                    <span className="username pl-4"> WeirdGuy1542 </span>

                                </div>
                            </div>
                            <div className="points">
                                <div className="align-center"> 3500 </div>
                            </div>
                            <div className="points earning">
                                <div className=" align-end align-center">30,000 TNBC</div>
                            </div>
                            <div className="points">
                                <div className=" align-center">7</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 10</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 3</div>
                            </div>
                        </div>
                        <div className="table-head ">
                            <div className="rank pl-4">
                                <div className="align-center">
                                    <span className="RankNo pr-3">10</span>
                                    <span className="img mb-2 mr-4 ml-4">

                                    </span>
                                    <span className="username pl-4"> WeirdGuy1542 </span>

                                </div>
                            </div>
                            <div className="points">
                                <div className="align-center"> 3500 </div>
                            </div>
                            <div className="points earning">
                                <div className=" align-end align-center">30,000 TNBC</div>
                            </div>
                            <div className="points">
                                <div className=" align-center">7</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 10</div>
                            </div>
                            <div className="points">
                                <div className=" align-center"> 3</div>
                            </div>
                        </div>
                        <div className="table-head bottom-tab">
                            <div className="load-more">
                                Load More
                            </div>

                        </div>
                        



                        
  

                    </LeaderboardTable>
                    </div>
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
    @media only screen and (max-width: 1000px) {
        padding: 40px 30px;
        height: auto;
    }

    .heading {
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 48px;
        color: #FFFFFF;
        @media only screen and (max-width: 800px) {
            font-weight: 700;
            font-size: 20px;
            line-height: 15px;
        }
            
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
        @media only screen and (max-width: 800px) {
            height:40px;
            width:120px;
        }
    }

    .games-filter-inner {
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        height:58px;
        width:98%;
        padding-left: 20px;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #FFFFFF; 
        @media only screen and (max-width: 800px) {
            height:38px;
            width:118px;
            font-weight: 300;
            font-size: 14px;
            color: #FFFFFF;
            padding-left: 10px;
            .mr-4 {
                margin-right: 10px
            }
        }   
    }
    .dropdown-section {
        height: 70px;
    }

    .hii {
        width: 100%;
    }
`;

const LeaderboardTable = styled.div`
    width: 100%;
    background: #1D1D1D;
    margin-bottom: 100px;
    @media only screen and (max-width: 800px) {
        width: 900px;
        
    }


    .table {
        width: 100%;
        height: 1262px;
        
    }
    .width-200{
        width:88vw;
    }
    .table-head {
        width:100%;
        max-height: 60px;
        display:flex;
        border:none;
        box-sizing: border-box;
        color: rgba(255, 255, 255, 0.7);
        border-bottom: 0.5px solid #777777;
    }
    .head-bg{
        background: rgba(255, 255, 255, 0.2) !important;
    }
    .rank {
        width: 45%;
        display:flex;
        justify-content: flex-start;
        align-items: center;
    }
    .points{
        width: 13%;
        height:60px;
        display:flex;
        justify-content:center;
        align-items:center;
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
        height: 30px;
        width: 30px;
        border-radius: 100%;
        background: white;
    }
    .align-center{
        display: flex;
        align-items: center;
    }
    .filter-heading{
        height:78px;
        display: flex;
        align-items:center;
        padding: 0px 31px;
        justify-content: space-between;
    }
    .top-10{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.7);
    }
    .filter-item{
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 30px;
        color: rgba(255, 255, 255, 0.6);
        margin-right: 39px;
    }
    .load-more{
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 30px;
        color: #F4A54C;
    }
    .bottom-tab{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 78px;
        border-bottom: none !important
    }
`
const DateFilter = styled.div`
    width: 100%;
    height:

`
const TD = styled.div`
    display:flex;
    height: 78px;
    width: 100%;
`;
