import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { ContentBody } from './ChooseGames';

function SettingsPage() {
    const[activeTab, setActiveTab] = useState("")
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className ="leaderboard-page fadeInUp animated">
            <ContentBody>
                <FaqForm>
                    <div className ="faq">Settings</div>
                    <div className ="faq-page">
                        <div className ="side-panel">
                            <div className ="profile-image"></div>
                            <div className ="profile-name">Mr Stranger</div>
                            <div className ={`${activeTab === 1 && "active-tab "} profile-tab`} onClick={()=> setActiveTab(1)}>Profile</div>
                            <div className ={`${activeTab === 2 && "active-tab "} profile-tab`}  onClick={()=> setActiveTab(2)}>Active</div>
                            <div className ={`${activeTab === 3 && "active-tab "} profile-tab`} onClick={()=> setActiveTab(3)}>Game</div>
                            <div className ={`${activeTab === 4 && "active-tab "} profile-tab`} onClick={()=> setActiveTab(4)}>Payment Method</div>
                            <div className ={`${activeTab === 5 && "active-tab "} profile-tab`} onClick={()=> setActiveTab(5)}>Privacy</div>
                            <div className ={`${activeTab === 6 && "active-tab "} profile-tab`} onClick={()=> setActiveTab(6)}> Notifications</div>

                        </div>
                        <div className ="panel-details">
                            {activeTab === 1 &&(
                                <ProfileView/>

                            )}

                        </div>
                        
                    </div>
                </FaqForm>
            </ContentBody>
        </div>
    )
}

export default SettingsPage;

const FaqForm = styled.div`
    height: 100vh;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 122px;
    .faq{
        width: 100%;
        height: 98px;
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        color: #FFFFFF;
        margin-bottom: 47px;
    }
    .faq-page{
        width: 100%;
        background: #1D1D1D;
        border-radius: 5px;
        padding: 15px;
        min-height: 800px;
        height: auto;

        .side-panel {
            display: flex;
            align-items: center;
            flex-direction: column;
            height: auto;
            width: 22%;
            border-right: 1px solid grey;
            padding: 20px;
            .profile-image {
    
                height: 152px;
                width: 152px;
                background: grey;
                border-radius: 100%;
            }
            .profile-name {
                display: flex;
                justify-content: center;
                align-items: center;
                font-style: normal;
                font-weight: 800;
                font-size: 20px;
                line-height: 30px;
                display: flex;
                align-items: center;
                padding:20px;
                margin-bottom: 50px;
                color: #FFFFFF;
                border-bottom: 0.5px solid #777777
            }
            .profile-tab {
                display: flex;
                justify-conten: center;
                border-radius: 5px;
                height: 57px;
                width:95%;
                color: white;
                font-style: normal;
                padding: 10px 20px 10px 20px;
                font-weight: 500;
                font-size: 18px;
                line-height: 27px;
            }
            .active-tab {
                background: #6A6A6A;
            }
        }
    }
   

`;
const ProfileView = styled.div`


`;
