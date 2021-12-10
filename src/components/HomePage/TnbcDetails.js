import React from 'react';
import {ReactComponent as GameIcon} from "../../assets/GamesIcon.svg";
import {ReactComponent as TournamentIcon} from "../../assets/TournamentIcon.svg";
import {ReactComponent as CoinbagIcon} from "../../assets/CoinbagIcon.svg";
import { ContentBody } from './ChooseGames';
import styled from 'styled-components';

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
            <TnbcDetailContentBody>
                {tnbcDetails &&
                    tnbcDetails.map((item, index) => (
                        <div className = "card-item">
                            <div className = "card-item-overlay">
                                <div className="icon-item" ><item.icon/></div>
                                
                                <div className = "card-item-amount"> {item.amount}</div>
                                <div className = "card-item-title"> {item.title}</div> 
                            </div>    
                        </div>
                    ))
                }
            </TnbcDetailContentBody>
        </div>
    )
}

export default TnbcDetails

export const TnbcDetailContentBody = styled(ContentBody)`
    display: flex;
    justify-content: space-around;
    .icon-item{
        width:75px;
        display:flex;
    }

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        align-items:center;
    }
`;
