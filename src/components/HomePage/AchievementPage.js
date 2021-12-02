import React from 'react';
import AchievmentCard from './AchievementCard';
import firstPerson from "../../assets/firstPositionImg.png";
import SecondPerson from "../../assets/secondPositionImg.png";
import  ThirdPerson from "../../assets/thirdPositionImg.png";
import { ContentBody } from './ChooseGames';


function AchievementPage() {
    return (
        <div className ="achievement-page">
           
                <div className ="dark-overlay">
                    <ContentBody>
                        <div className ="achievement-header">
                            <div className ="achievement-title">
                                Players of the Week
                            </div>
                            <div className ="achievement-subtitle">
                                <p>Placement reset every Sunday at 12AM UTC</p>
                            </div>
                        </div>

                        <div className =" player-position-section achievement-cards mr-30 ml-30 mt-30">
                            <AchievmentCard position = {2} image = {SecondPerson}/>
                            <AchievmentCard position = {1} image = {firstPerson}/>
                            <AchievmentCard position = {3} image = {ThirdPerson}/>
                        </div>
                    </ContentBody>
                </div>
           

            
        </div>
    )
}

export default AchievementPage
