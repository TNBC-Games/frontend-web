import React from 'react'
import Intro from './intro';
import ChooseGames from './ChooseGames';
import ChooseTournament from './ChooseTournament';
import TnbcDetails from './TnbcDetails';
import AchievementPage from './AchievementPage';

function WebBody() {
    return (
        <div className = "tnbc-body fadeInUp animated">
            <div>
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
