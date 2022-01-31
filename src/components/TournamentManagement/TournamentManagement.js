import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { ProfileHeader } from '../GamesManagement/GamesHeader';
import gamesImage from "../../assets/chessGame.png";
import { getHumanDate } from '../../utils/utils';
import { enrollIntoTournament } from '../../redux/actions/tournment.actions';


function TournamentManagement() {
    const dispatch = useDispatch();
    const history = useHistory()
    const [view, setView] = useState("info");
    const accessToken = sessionStorage.getItem("accesstoken");
    const tournament = useSelector(state => state.tournamentState.tournamentInView);
    const myTournament = useSelector(state => state.tournamentState.myTournament);
    const [enrolState, setEnrolState] = useState("unenrolled")

    const enrollToTournament = async ()=>{
        setEnrolState("enrolling")
        const token = accessToken
        const id = tournament?._id
        let {status, response} = await dispatch(enrollIntoTournament(token, id))
        if(status){
            setEnrolState("enroled")
        }else{
            setEnrolState("enrol")
        }
        
    }

    
    useEffect(()=>{

        const filteredList = myTournament?.filter(
            (item) => item?.tournament === tournament?._id
        );
        if(filteredList.length >=1 ){
            setEnrolState("enroled")
        }
    },[tournament, myTournament])

    useEffect(()=>{
        if(!tournament){
            history.push("/")
            return
        } 
    },[tournament])
    return (
        
        <div className ="games-profile">
            <ProfileHeader image ={gamesImage}>
            </ProfileHeader>  
            <TournamentHeader TournamentImage = {tournament?.image}>
                <div className="image-section">
                    <div className="tourn-fee">Prize: {tournament?.prize} TNBC</div>
                </div>
                <div className="toun-info ml-3">
                    <div className="tourn-title mb-3">{tournament?.name}</div>
                    <div className="tourn-extra mb-1"> Type: <span className="content">{tournament?.type}</span> | Participant: <span className="content">{"64"} </span> |  Entry Fee: <span className="content">{tournament?.fee}</span></div>
                    <div className="tourn-extra mb-1"> Registration Opens: <span className="content">{getHumanDate(tournament?.startDate)}</span></div>
                </div>
            </TournamentHeader>
            <EnrollSection>
                <div className="yellow-text">Starts in 10d 24hrs 40mins  28secs</div>
                <button className={`enroll-btn ${enrolState === "enrolling" ? "form-loading" : "grey-disabled"}`} onClick={enrollToTournament}><span>{enrolState === "enroled" ? "Enrolled" : "Enrol"}</span></button>
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
                {view === "info" && (
                    <div className="content"> {tournament?.info}
                    </div>
                )}
                {view === "rules" && (
                    <div className="content"> {tournament?.rules}
                    </div>
                )}

                {view === "apply" && (
                    <div className="content"> {tournament?.howToApply}
                    </div>
                )}

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
    min-height: 174px;
    background: #1D1D1D;
    border-radius: 5px;
    padding: 18px 32px;
    margin: auto;
    position: relative;
    bottom: 60px;
    margin-top: 2.5rem!important;
    margin-bottom: 2.5rem!important;

    .content{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        display: flex;
        align-items: center;
        text-align: justify;

        color: #FFFFFF;
    }

    

`;