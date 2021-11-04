import React from 'react';
import {ReactComponent as GameIcon} from "../../assets/GamesIcon.svg";
import {ReactComponent as TournamentIcon} from "../../assets/TournamentIcon.svg";
import {ReactComponent as CoinbagIcon} from "../../assets/CoinbagIcon.svg";

function TnbcDetails() {
    const tnbcDetails = [
        {
            icon: GameIcon,
            title: "Games Played",
            amount: 800000
        },
        {
            icon: TournamentIcon,
            title: "TNBC Won",
            amount: 800000,
        },
        {
            icon: CoinbagIcon,
            title: "Tournaments",
            amount: 800000,
        }
    ]
    return (
        <div className ="tnbc-details">
            {tnbcDetails &&
                tnbcDetails.map((item, index) => (
                    <div className = "card-item">
                        <div className = "card-item-overlay">
                            <item.icon/>
                            <div className = "card-item-amount"> {item.amount}</div>
                            <div className = "card-item-title"> {item.title}</div> 
                        </div>    
                    </div>
                ))
            }
        </div>
    )
}

export default TnbcDetails
