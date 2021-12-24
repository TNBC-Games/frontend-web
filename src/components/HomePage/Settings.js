import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { ContentBody } from './ChooseGames';
import Input from '../input';

function SettingsPage() {
    const[activeTab, setActiveTab] = useState(1)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className ="leaderboard-page fadeInUp animated">
            <ContentBody>
                <FaqForm>
                    <div className ="faq">Settings</div>
                    <div className="child">
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
                                <ProfileView>
                                    <div className="profile-heading">
                                        PROFILE
                                    </div>
                                    <div className="input-session ">
                                        <div className="input-field mr-2">
                                            <div className="input-label">First Name</div>
                                            <Input
                                                className= "formInput mt-30"
                                                
                                                type= "text"
                                                //onChange ={handleInputEmailChange}
                                                //value = {userInfo.email}
                                                min={2}
                                            />
                                        </div>
                                        <div className="input-field ml-2">
                                            <div className="input-label">Last Name</div>
                                            <Input
                                                className= "formInput mt-30"
                                               
                                                type= "text"
                                               // onChange ={handleInputEmailChange}
                                                //value = {userInfo.email}
                                                min={2}
                                            />
                                        </div>

                                    </div>

                                    <div className="input-session bb-1">
                                        <div className="input-field mr-2">
                                            <div className="input-label">Email</div>
                                            <Input
                                                className= "formInput mt-30"
                                                
                                                type= "email"
                                                //onChange ={handleInputEmailChange}
                                                //value = {userInfo.email}
                                                min={2}
                                            />
                                        </div>
                                        <div className="input-field ml-2 ">
                                            <div className="input-label">Disord</div>
                                            <Input
                                                className= "formInput mt-30"
                                                
                                                type= "text"
                                                //onChange ={handleInputEmailChange}
                                                //value = {userInfo.email}
                                                min={2}
                                            />
                                        </div>

                                    </div>
                                    <div className="align-end mt-4">
                                        <div className =  "join-free  float-btn ">Save Changes </div>
                                    </div>


                                </ProfileView>

                            )}

                        </div>
                        
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
    @media only screen and (max-width:1350px){
        width: 95%;
        margin: auto;

    }



    .faq{
        width: 100%;
        height: 98px;
        font-style: normal;
        font-weight: 800;
        font-size: 28px;
        color: #FFFFFF;
        margin-bottom: 47px;
       
    }
    .faq-page{
        width: 100%;
        background: #1D1D1D;
        border-radius: 5px;
        min-height: 800px;
        height: auto;
        display: flex;
        @media only screen and (max-width:1350px){
            width: 1000px;
    
        }

        .panel-details{
            height: 100%;
            width: 88%;
            background: #1D1D1D;
        }

        .side-panel {
            display: flex;
            align-items: center;
            flex-direction: column;
            height: auto;
            width: 30%;
            background:rgba(74, 74, 74, 0.4);
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            padding: 42px 18px 10px 18px;
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
                font-size: 16px;
                line-height: 30px;
                display: flex;
                align-items: center;
                padding:20px;
                margin-bottom: 50px;
                color: #FFFFFF;
                border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
                min-width: 150px;
            }
            .profile-tab {
                display: flex;
                align-items: center;
                border-radius: 5px;
                height: 57px;
                width:95%;
                color: white;
                font-style: normal;
                padding: 10px 20px 10px 20px;
                font-weight: 500;
                font-size: 16px;
                line-height: 27px;
                white-space: nowrap;
            }
            .active-tab {
                background: #6A6A6A;
            }
        }
    }
    .child{
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        
    }

   

`;
const ProfileView = styled.div`
    padding:31px 107px 31px 31px;
    .profile-heading{
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 42px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        padding:0px 32px 32px;
        border-bottom: 0.8px solid rgba(255, 255, 255, 0.1);
    }
    .bb-1{
        padding-bottom: 50px;
        border-bottom: 0.8px solid rgba(255, 255, 255, 0.1);
    }
    .align-end{
        display: flex;
        justify-content: flex-end;
        .join-free{
            min-width: 154px;
            min-height: 50px;
            padding: 10px;
            white-space: nowrap;
        }
    }
    .input-session{
        display: flex;
        justify-content: space-between;
        padding-top:31px
        width: 100%;
        .input-field{
            width: 40%;
            padding:31px 10px 31px 5px;
            .formInput{
                width: 100%;
                background-color:transparent;
                padding: 6px 0px 6px 13px;
            }
        }
        .input-label{
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 27px;
            display: flex;
            align-items: center;
            color: #FFFFFF;
        }

    }


`;
