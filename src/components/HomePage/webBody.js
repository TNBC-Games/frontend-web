import React,{useEffect} from 'react'
import Intro from './intro';
import ChooseGames from './ChooseGames';
import ChooseTournament from './ChooseTournament';
import TnbcDetails from './TnbcDetails';
import AchievementPage from './AchievementPage';
import { useHistory } from 'react-router';

function WebBody() {
const history = useHistory()
const queryParams = new URLSearchParams(window.location.search);
const accessToken = queryParams.get('accessToken');

useEffect(() => {
 
    if(accessToken) {
        sessionStorage.setItem("accesstoken", accessToken);
        history.push("/")
    }
   
}, [accessToken])

    return (
        <div className = "tnbc-body fadeInUp animated">
            <div className="width-100">
                <Intro/>
                <ChooseGames/>
                <ChooseTournament/>
                <TnbcDetails/>
                <AchievementPage/>
            </div>
        </div>
        
    )
}

export default WebBody
