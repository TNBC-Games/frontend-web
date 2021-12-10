import React,{useEffect} from 'react'
import Intro from './intro';
import ChooseGames from './ChooseGames';
import ChooseTournament from './ChooseTournament';
import TnbcDetails from './TnbcDetails';
import AchievementPage from './AchievementPage';

function WebBody() {
    
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('oauth');
console.log(id,"yooooo");

useEffect(() => {
    

}, [])

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
