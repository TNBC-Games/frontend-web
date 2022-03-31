import React from 'react';


function AchievmentCard({position, image, }) {
    return (
        <div className = {`${position === 1 ? "red" : position === 2? "yellow": position ===3 ? "grey": ""} justify-center`}>
            <div className = {`${position === 1 ? "red-top adjust-first" : position === 2 ? "yellow-top": "grey-top"} achievement-card`}>
                <div className ="width-100 height-70 justify-center">
                    <div className = "user-image">
                        <img src = {image} alt={"user"} ></img>
                        <div className ={`${position === 1 ? "red-background" : position === 2 ? "yellow-background": "grey-background"} user-position`}>{position}</div>
                    </div>
                </div>

                <div class= "achievement-info">
                
                    <div className ="player-name justify-center pt-3">Anonymous</div>
                    <div className =" earning-text justify-center pt-3"> 3000 TP earned 09/20 - 09/27 </div>
                    <div className =" green-earnings justify-center">+5,000 TNBC earned </div>
                    <div className ="justify-center mt-40">
                    <div className = "join-freer float-btn justify-center p-2">View Profile</div>
                    </div>
                    
                    
                </div>   
            </div>
        </div>
    )
}

export default AchievmentCard
