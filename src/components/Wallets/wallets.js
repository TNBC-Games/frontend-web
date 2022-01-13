import React,{useState} from 'react';
import styled from 'styled-components';
import CustomButton from '../ReusableComponents/customButton';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar} from "react-chartjs-2";
import {ReactComponent as CopyIcon} from '../../assets/copyIcon.svg'
import TransactionList from '../ReusableComponents/TransactionList';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Wallet() {
    const [walletDisplay, setWalletDisplay] = useState('wallet');
    const [userInfo, setUserInfo] = useState({
        amount: "",
        memo: "",
        accountNo: "",
    });
    const [sameAccountNumber, setSameAccountNumber] = useState(false);
    const [accountNo, setAccountNo] = useState("1100327415")
    const transactionList =[
        {
            debit: false,
            description: "Tournament Win",
            amount: 1000
        },
        {
            debit: false,
            description: "Tournament Win",
            amount: 3000
        },
        {
            debit: true,
            description: "Tournament lose",
            amount: 17000
        },
        {
            debit: false,
            description: "Tournament Win",
            amount: 15000

        },
        {
            debit: true,
            description: "Withdrawal",
            amount: 5000
        },
        {
            debit: false,
            description: "Tournament Win",
            amount: 8000
        },
        {
            debit: true,
            description: "Withdrawal",
            amount: 7000
        },
        {
            debit: false,
            description: "Tournament Win",
            amount: 18000
        }
    ]
    function handleAmountInput(event) {
        event.preventDefault()
        setUserInfo({ ...userInfo, amount: event.target.value });
    }
    function handleMemoInput(event) {
        event.preventDefault()
        setUserInfo({ ...userInfo, memo: event.target.value });
                    
    }
    const WalletInput = ({Title, inputText, Icon, className, amount, onChange, value})=> {
        return (
            <div className={`${className}`}>
                <div className="wallet-title"><p>{Title}</p></div>
                {amount ? (
                    <div className="wallet-input-tnbc">
                        <div className="wallet-acn">
                            <input
                                id = ""
                                className= {`formInput `}
                                placeholder={""}
                                type= {"text"}
                                onChange={onChange}
                                value={value}
                                min={2}
                            />
                        </div>
                        {amount && (
                            <div className="wallet-tnbc">TNBC</div>
                        )}
                    </div>

                ):(
                    <div className="wallet-input">
                        <div className="wallet-acn">
                            <input
                                id = ""
                                className= {`formInput `}
                                placeholder={""}
                                type= {"email"}
                                onChange={onChange}
                                value={value}
                                min={2}
                            />
                        </div>
                        {Icon && (
                            <div className="wallet-icon"><Icon/></div>
                        )}
                    </div>
                )}
                
            </div>
        )
    }
    return (
        <div className ="leaderboard-page fadeInUp animated">
            <WalletView>
                <div className ="wallet-sidebar mx-3">
                    <div className={`action-btn mb-2 ${walletDisplay === "wallet" && "black-bg"}`} onClick= {()=> setWalletDisplay("wallet")}> My Wallet</div>
                    <div className={`action-btn mb-2 ${walletDisplay === "deposit" && "black-bg"}`} onClick= {()=> setWalletDisplay("deposit")}> Deposit</div>
                    <div className={`action-btn mb-2 ${walletDisplay === "withdraw" && "black-bg"}`} onClick= {()=> setWalletDisplay("withdraw")}>Withdraw</div>
                </div>
                <div className="main-session">
                    <div className="balance-session mb-4">
                        <div className="balance">
                            <div className="heading">TNBC Balance</div>
                            <div className="amount">10,000 TNBC</div>
                        </div>
                        <div className="deposit-withdraw">
                            <CustomButton height="50px" width="136.5px" innerH="48px" innerW="98%" addedClass="mr-2" bgColor="#1D1D1D" text="withdraw"/>
                            <CustomButton height="50px" width="136.5px" innerH="48px" innerW="98%" addedClass="ml-2" bgColor="#1D1D1D" text="deposit"/>
                        </div>
                    </div>
                    <div className="info-section">
                        <div className="account-no">
                            <CustomButton height="50px" width="216px" innerH="48px" innerW="98%" addedClass="ml-2" bgColor="#1D1D1D" text="Add Acct Number"/>
                        </div>
                        {walletDisplay === "wallet" && (
                            <div>
                                <div className="chart-session mt-5">
                                    <Bar
                                        data={{
                                            labels: ['May', 'June', "July", "August", "September", "October"],
                                            datasets:[
                                                {
                                                    label: "Deposit",
                                                    data: [120, 190, 300, 50, 200, 350],
                                                    backgroundColor:"#828282",
                                                    barThickness:12,
                                                    borderWidth: 1,
                                                    borderDash:[10, 10]
                                                },
                                                {
                                                    label: "Withdawal",
                                                    data: [100, 150, 200, 250, 400, 150],
                                                    barThickness:12,
                                                    borderDash:[10, 10]
                                                }
                                            ]
                                        }}
                                        height={400}
                                        width={600}
                                        options={{
                                            maintainAspectRatio: false,
                                            scales: {
                                                x:{
                                                    grid:{
                                                        display: false
                                                    }
                                                },
                                                y:{
                                                    grid:{
                                                        drawBorder: false
                                                    }
                                                }
                                            },
                                            plugins: {
                                                legend: {
                                                    display: true,
                                                    labels: {
                                                        boxHeight:8,
                                                        boxWidth:8,
                                                        usePointStyle: true,
                                                        pointStyle: "circle",
                                                    }
                                                }
                                            }
                                        }}

                                    />
                                </div>
                                <div className="recent my-4">
                                    Recent Transaction
                                </div>
                                <div className="transaction-filter mb-5">
                                    Today
                                </div>
                                <div>
                                    <TransactionList transactionList={transactionList}/>
                                </div>
                            </div>
                        )}
                        {walletDisplay === "deposit" && (
                            <div className="flex justify-center mt-5">
                                <div className="account-deposit mt-5">
                                    <div className="red-text"><p>Kindly Send the amount you wish to deposit into the account below using the memo as description</p></div>
                                    <WalletInput Title={"Account Number"} inputText={"43825754423457274089"} Icon={CopyIcon} className="mt-5" onChange={handleAmountInput} value ={userInfo.amount}/>
                                    <WalletInput Title={"Memo"} inputText={"43825754423457274089"} Icon={CopyIcon} className="mt-5" onChange={handleMemoInput} value ={userInfo.memo}/>
                                    <p className="mt-3 small-text">Note: As soon as the deposit is made, it will reflect on your wallet</p>
                                </div>
                               
                            </div>
                        )}
                        {walletDisplay === "withdraw" && (
                            <div className="flex justify-center mt-5">
                                <div className="account-deposit mt-5">
                                    <div className="red-text"><p>Kindly Send the amount you wish to deposit into the account below using the memo as description</p></div>
                                    <WalletInput Title={"Amount"} inputText={"43825754423457274089"} Icon={CopyIcon} className="mt-5" amount={true} onChange={handleAmountInput} value ={userInfo.amount}/>
                                    <WalletInput Title={"Memo"} inputText={"43825754423457274089"} Icon={CopyIcon} className="mt-5" onChange={handleMemoInput} value ={sameAccountNumber? accountNo: userInfo.accountNo}/>
                                    <div className="mt-3 flex align-center" onClick= {()=> setSameAccountNumber(!sameAccountNumber)}>
                                        <div className=" circle mr-2 mt-1">{sameAccountNumber && <div className="inner-circle"></div>}</div>
                                        <div> Use existing account number</div>
                                    </div>
                                </div>
                               
                            </div>
                        )}
                    </div>


                </div>

            </WalletView>

        </div>
    )
}

export default Wallet;

const WalletView = styled.div`
    max-width: 95vw;
    display: flex;

    .wallet-sidebar{
        width: 37%;
        display: flex;
        flex-direction: column;

        .action-btn{
            width: 100%;
            height: 72px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #6A6A6A;
            border-radius: 4px;
            font-style: normal;
            font-weight: 800;
            font-size: 20px;
            line-height: 30px;
            color: #FFFFFF;
            cursor: pointer;
        }
        .black-bg{
            background: transparent;
        }
    }
    .main-session{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%
    }
    
    .balance-session{
        min-width: 100%;
        min-height: 218px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 28px;
        background: #1D1D1D;
        border-radius: 17px;
        
        .balance{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 30px;
            color: #FFFFFF;
            .heading{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .amount{
                display: flex;
                justify-content: center;
                align-items: center;
                font-style: normal;
                font-weight: 800;
                font-size: 35px;
                line-height: 52px;
                color: #FFFFFF;

            }
        }
        .deposit-withdraw{
            display: flex;
            justify-content: center;
            align-items: center;    
        }
    }
    .info-section{
        width: 100%;
        height: 1785px;
        background: #1D1D1D;
        border: 1px solid rgba(196, 196, 196, 0.21);
        box-sizing: border-box;
        border-radius: 19px;
        padding: 38px 28px;
        .account-no{
            display: flex;
            justify-content: flex-end
        }
        .chart-session{
            max-width: 82%;
            padding: 50px 23px;
            height: 546px;
            margin: auto;
            background: #ffffff;
            border-radius: 17px;
        }
        .recent{
            font-style: normal;
            font-weight: 600;
            font-size: 29px;
            line-height: 52px;
            color: #FFFFFF;
        }
        .transaction-filter{
            height: 40px;
            width: 179px;
            display: flex;
            align-items: center;
            background: #F4F4F4;
            border-radius: 2px;
        }
    }
    .account-deposit{
        width: 603px;
        height: 824px;
        background: #C4C4C4;
        border-radius: 5px;
        padding: 43px 50px;
        .red-text{
            display: flex;
            align-items: center;
            justify-content: center;
            
            font-style: normal;
            font-weight: 800;
            font-size: 20px;
            line-height: 157.69%;
            text-align: center;
            letter-spacing: 0.035em;
            color: #DC0D16;
        }
    }
    .small-text{
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 15px;
        text-align: center;
        color: #000000;
    }
    .formInput{
        width: 100% !important;
        background: transparent !important;
        border: none !important;
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 30px;
        color: #828282;

    }
    .circle{
        height: 19px;
        width: 19px;
        border-radius: 100%;
        border: 1px solid #000000 ;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .inner-circle{
        height: 8px;
        width: 8px;
        border-radius: 100%;
        background: #000000;
    }

`;
