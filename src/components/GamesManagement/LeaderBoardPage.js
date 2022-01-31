import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import LeaderBoardHeader from "../../assets/LeaderboardHeader.png";
import { useHistory } from 'react-router';
import { ContentBody } from '../HomePage/ChooseGames';
import { getLeaderboard, getLeaderboardUser } from '../../redux/actions/tournment.actions';
import { getUser } from '../../redux/actions/signup.actions';


function LeaderBoardPage() {
    const dispatch = useDispatch();
    const [leaderboard, setLeaderboard] = useState("")
    const [count, setCount] = useState(10);
    const [sortBy, setSortBy] = useState("earnings");
    const [loading, setLoading] = useState(false);
    const [timeSpan, setTimeSpan] = useState("All Time");
    const [showMore, setShowMore] = useState(false)
    const { leaderboardNames: leaderboardI, leaderboardCount} = useSelector(state => state.tournamentState)
    console.log(leaderboardI, "yooooooooooooo", leaderboard)
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
    const gotoProfile= ()=>{
        history.push("/")
    }

    const setDate = (timeSpan)=>{
        setTimeSpan(timeSpan)
        getLeaderboardInfo(count, timeSpan)

    }

    const getLeaderboardInfo = async (count, timeSpan)  =>{
        setLoading(true)
        const game = "chess"
        let {status, response} = await dispatch(getLeaderboard(count, sortBy, game, timeSpan))
        console.log(response)
        setLeaderboard(response)
        setLoading(false)
    }

    const getNext = async () =>{
        await setCount(count + 10)
        getLeaderboardInfo(count + 10, timeSpan)
    }

    const getUser = async (id)=>{
        let {status, response} = await dispatch(getLeaderboardUser(id));
        if(status){
            history.push()
        }
        
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
        const date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) 
    }, [])

    useEffect(()=>{
        if(!leaderboard){
            getLeaderboardInfo(count)
        }  
    }, [leaderboard])

    useEffect(() => {
        setLeaderboard(leaderboardI)
        setCount(leaderboardCount)
    }, [leaderboardI, leaderboardCount])

    useEffect(()=>{
        if(leaderboardI.length === leaderboardCount){
            setShowMore(true)
        }
    })
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
                                <div className={`filter-item ${timeSpan === "All Time" && "white"} `} onClick={() => setDate("All Time")}> All TIME</div>
                                <div className= {`filter-item ${timeSpan === "Last 30 days" && "white"}`} onClick={() => setDate("Last 30 days")}> LAST 30 DAYS</div>
                                <div className= {`filter-item ${timeSpan === "Last 7 days" && "white"}`} onClick={() => setDate("Last 7 days")}> LAST 7 DAYS</div>
                            </div>
                            <div className="top-10">
                                showing top {count? count : 10}
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
                        {leaderboard &&
                            leaderboard.map((item, index)=>(
                                <div className="table-head ">
                                    <div className="rank pl-4 cursor-pointer" onClick={()=>getUser(item._id)} >
                                        <div className="align-center">
                                            <span className="RankNo pr-4">{item.rank}</span>
                                            <span className="img mb-2 mr-4 ml-4">

                                            </span>
                                            <span className="username pl-4"> {item.username} </span>

                                        </div>
                                    </div>
                                    <div className="points">
                                        <div className="align-center"> {item.userEarnings.points} </div>
                                    </div>
                                    <div className="points earning">
                                        <div className=" align-end align-center">{`${item.userEarnings.earnings} TNBC`}</div>
                                    </div>
                                    <div className="points">
                                        <div className=" align-center">{item.userEarnings.gold}</div>
                                    </div>
                                    <div className="points">
                                        <div className=" align-center"> {item.userEarnings.silver}</div>
                                    </div>
                                    <div className="points">
                                        <div className=" align-center"> {item.userEarnings.bronze}</div>
                                    </div>
                                </div>

                            )
                        )}

                        {!leaderboard &&
                            LeaderboardItems.map((item, index)=>(
                                <div className="table-head ">
                                    <Skeleton height={"50px"} width={"100%"} baseColor= "#262626" highlightColor="#404040" borderRadius={5} containerClassName="width-100"/>
                                </div>
                            ))
                        }
                        
                        
                        
                        {showMore && (
                            <div className={`table-head bottom-tab ${loading && " form-loading"}`} onClick={getNext}>
                                <span className="load-more cursor-pointer">
                                    Load More
                                </span>

                            </div>
                        )}
                        
                        



                        
  

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
    .white{
        color: #ffffff !important;
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
