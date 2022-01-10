import React from 'react';
import {ReactComponent as WithdrawalIcon} from "../../assets/withdrawalSymbol.svg";
import {ReactComponent as PaymentIcon} from "../../assets/paymentSymbol.svg";
import {ReactComponent as DeleteIcon} from "../../assets/deleteSymbol.svg";
import {ReactComponent as MoreIcon} from "../../assets/moreSymbol.svg";
import styled from 'styled-components';

function TransactionList({transactionList}) {

    return (
        <ListPage>
            {transactionList &&
                transactionList.map((item, index) => (
                    <div className="item">
                        <div className="item-title">
                            <div className ="icon mr-2">
                                {item.debit? <WithdrawalIcon/>:<PaymentIcon/>}
                            </div>
                            {item.description}
                        </div>
                        <div className="amount-session">
                            <div className={`${item.debit? "red-color " : "green-color " }amount`}>
                                {item.debit ? `-${item.amount}`: `+${item.amount}` }
                            </div>
                            <div className="delete mr-2"><DeleteIcon/></div>
                            <div className="more"><MoreIcon/></div>

                        </div>

                    </div>
                ))
            }
        </ListPage>
    )
}

export default TransactionList;

const ListPage = styled.div`
    width: 100%;
    .item{
        padding:40px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-style: normal;
        border-bottom: 1px solid rgba(196, 196, 196, 0.35);
        .item-title{
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
        }
        .amount-session{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .amount{
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 27px;
            margin-right: 10px;
        }
        .red-color{
            color: #B10910;
        }
        .green-color{
            color: #098406;
        }
    }


`;
