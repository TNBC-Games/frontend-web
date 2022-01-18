import React, {useState} from 'react';
import { Bubble } from 'react-chartjs-2';
import styled from 'styled-components';
import {ReactComponent as ArrowIcon} from "../../assets/BigArrowIcon.svg";
import {ReactComponent as RightArrowIcon} from "../../assets/RightArrowIcon.svg";
import {ReactComponent as DeleteIcon} from "../../assets/DeleteIcon.svg";
import {ReactComponent as EditIconA} from "../../assets/EditIconA.svg";
import {ReactComponent as CreateAccountIcon} from "../../assets/CreateAccountIcon.svg";

function TransactionView() {
    const [activeTab, setActiveTab] = useState(1);
    const CreateIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48609 0 0 4.48609 0 10C0 15.5143 4.48609 20 10 20C15.5143 20 20 15.5143 20 10C20 4.48609 15.5143 0 10 0ZM5 10C5 9.44771 5.44772 9 6 9H9V6C9 5.44772 9.44771 5 10 5C10.5523 5 11 5.44772 11 6V9H14C14.5523 9 15 9.44771 15 10C15 10.5523 14.5523 11 14 11H11V14C11 14.5523 10.5523 15 10 15C9.44771 15 9 14.5523 9 14V11H6C5.44772 11 5 10.5523 5 10Z" fill="white"/>
    </svg>
    
    `
    
    const TransactionList = ({type, amount, fee, date}) => {
        const dotColor =(e)=>{
            switch (e){
                case e === 1:
                    return "blue";
                case e === 2:
                    return "orange";
                case e === 3:
                    return "green";
                default : 
                    return "blue";

            }
        }
        
        return (
            <List>
                <div className= "flex align-center">
                    <div className = {`dot ${dotColor(type)} mr-4`}></div>
                    <div className="column">
                        <div className="heading">Withdraw</div>
                        <div className="content">{amount}</div>
                    </div>
                </div>

                <div className="column">
                    <div className="heading">Fee</div>
                    <div className="content">{fee}</div>
                </div>

                <div className="column">
                    <div className="heading">Date</div>
                    <div className="content">{date}</div>
                </div>

                <div className="dropdown-icon"> <RightArrowIcon/> </div>
                

            </List>
        )

    }
    const AccountList = ({name, accountNo}) => {
        const formatNo = (accountNo) => {
            const firstFour = accountNo.slice(0, 4)
            const secondFour = accountNo.slice(4, 8)
            const lastFour = accountNo.slice(-4)
            const preLastFour = accountNo.slice(-8, -4)

            return `${firstFour} ${secondFour} ... ${preLastFour} ${lastFour}`

        }
        return (
            <List account>
                <div className="column">
                    <div className="content">{name}</div>
                </div>
                <div className="column">
                    <div className="content">{formatNo(accountNo)}</div>
                </div>
                <div className="flex"> 
                    <div className="flex justify-center align-center mr-2 opacity-47"> <EditIconA/> </div>
                    <div className="flex justify-center align-center ml-2"> <DeleteIcon/> </div>
                </div>
            </List>
        )
    }
    return (
        <div className ="leaderboard-page fadeInUp animated">
            <Transaction>
                <div className="side-bar">
                    <div className="balance-session">
                        <div className="balance mr-4">
                            <div className="mb-2">
                                <div className="title mb-1">Your balance</div>
                                <div className="amount">100,000</div>
                            </div>
                            <div className=" mt-4">
                                <div className="title mb-1">Unlocked Balance</div>
                                <div className="amount">30,000</div>
                            </div>
                        </div>
                        <div className="icon"><ArrowIcon/></div>
                    </div>
                    <div className={`transact-tab mt-3 ${activeTab === 1 && " active-tab"}`} onClick={()=>setActiveTab(1)}>
                        <div className="flex align-center">
                            <div className="blue dot mr-2"></div> Tranasctions
                        </div>
                        <div><RightArrowIcon/></div>
                    </div>
                    <div className={`transact-tab ${activeTab === 2 && " active-tab"}`} onClick={()=>setActiveTab(2)}>
                        <div className="flex align-center">
                            <div className="orange dot mr-2"> </div>Deposit
                        </div>
                        <div><RightArrowIcon/></div>
                    </div>
                    <div className={`transact-tab ${activeTab === 3 && "active-tab"}`} onClick={()=>setActiveTab(3)}>
                        <div className="flex align-center">
                            <div className="green dot mr-2"></div>Withdraw
                        </div>
                        <div><RightArrowIcon/></div>
                    </div>
                    <div className={`transact-tab ${activeTab === 4 && "active-tab"}`} onClick={()=>setActiveTab(4)}>
                        <div className="flex align-center" >
                            <div className="blue dot mr-2"></div>Account
                        </div>
                        <div><RightArrowIcon/></div>
                    </div>

                </div>
                <div className="transactions-view">
                    {activeTab === 4 ? (
                        <div>
                            <div className="transactions-heading mb-3">
                                <div className="big-text align-center">Account</div>
                            </div>
                            <AccountList name ={"Peter parker"} accountNo= {"78547882348427837q723744724727989329279r279r92"}/>
                            <div className = "flex create-account column pt-4">
                                <div className="flex  align-center "> 
                                    <div className="mr-2"> <CreateAccountIcon/> </div>
                                    <div className="heading"> Create Account</div>
                                </div>
                            </div>

                        </div>
                        
                    ):(
                        <div>
                            <div className="transactions-heading">
                                <div className="big-text align-center">Tranasctions</div>
                                <div className="small-text align-center">{`sort & filter`}
                                    <div className="rotate-90 ml-3 align-center justify-center"><RightArrowIcon/></div> 
                                </div>
                            </div>
                            <div className="transactions-heading pb-4">
                                <div className="small-text align-center">45 transactions total</div>
                                <div className="small-text align-center">Page 1 0f 3 
                                    <div className="rotate-180 ml-3 mr-2 align-center justify-center"><RightArrowIcon/></div> 
                                    <div className="align-center justify-center"><RightArrowIcon/></div>
                                </div>
                            </div>
                            <TransactionList amount="1000" fee="0.006437" date="yesterday" type={3}/>
                        </div>
                    )}

                </div>

            </Transaction>
            
        </div>
    )
}

export default TransactionView

const List = styled.div`
    min-height: 78px;
    margin: ${props => props.account ? "0px 60px" : "0px 10px"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  ${props => props.account ? "16px 0px" : "16px"};
    border-top: 1px solid rgba(255,255,255,0.2);
    .opacity-47 {
        opacity: 47%;
    }
    .column{
        display: flex;
        flex-direction: column;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: ${props => props.account ? "49px" : "16px"};
        .heading{
            color: #C0C0C0;
        }
        .content{
            color: #ffffff
        }
    }
    .dot{
        height: 8px;
        width: 8px;
        border-radius:100%;
    }
    .blue{
        background: #00ABFF;
    }
    .green{
        background: #A7FFB9;
    }
    .orange{
        background: #FA6800;
    }
    

`;

const Transaction = styled.div`
    max-width: 95vw;
    margin: auto;
    display: flex;
    .side-bar{
        width: 29%;
        margin-right: 30px;
        .balance-session{
            width: 100%;
            height: 250px;
            display: flex;
            align-items:center;
            justify-content: space-around; 
            background:black;
            padding: 20px;
            border: 1px solid  rgba(255,255,255,0.2);
            .balance {
                .title{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 16px;
                    color: #FFFFFF;
                }
                .amount{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 30px;
                    line-height: 35px;
                    letter-spacing: 3.5px;
                    color: #FFFFFF;
                }
            }

        }
        .transact-tab{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
            padding: 10px 20px;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 44px;
            color: #FFFFFF;
            cursor: pointer;
    
            
            .dot{
                height: 8px;
                width: 8px;
                border-radius:100%;
                z-index: 100;
            }
            .blue{
                background: #00ABFF;
            }
            .green{
                background: #A7FFB9;
            }
            .orange{
                background: #FA6800;
            }
            .align-center{
                display: flex;
                align-items: center;
            }
            
        }
        .active-tab{
            background: linear-gradient(to right, #000000, rgba(255, 255, 255, 0.1 ));
            mix-blend-mode: normal; 
        }
    }
    .transactions-view{
        width: 60%;
        min-height: 1586px;
        background: #1D1D1D;
        padding: 40px 0px 0px;
        .transactions-heading{
            padding: 10px 63px;
            font-style: normal;
            color: #FFFFFF;
            display: flex;
            justify-content: space-between;
            .big-text{
                font-weight: normal;
                font-size: 32px;
                line-height: 37px;
            }
            .small-text{
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
            }
        }
        .rotate-90{
            transform: rotate(-90deg);
        }
        .rotate-180{
            
            transform: rotate(-180deg)
        }
    }
    .create-account{
        border-top: 1px solid rgba(255,255,255,0.2);
        margin: 1px 60px
    }

    .column{
        display: flex;
        flex-direction: column;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: ${props => props.account ? "49px" : "16px"};
        .heading{
            color: #C0C0C0;
        }
        .content{
            color: #ffffff
        }
    }


`;
