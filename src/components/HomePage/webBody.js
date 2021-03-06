import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Intro from './intro';
import ChooseGames from './ChooseGames';
import ChooseTournament from './ChooseTournament';
import TnbcDetails from './TnbcDetails';
import AchievementPage from './AchievementPage';
import { getUser } from '../../redux/actions/signup.actions';
import { getMyTournament } from '../../redux/actions/tournment.actions';


function WebBody() {
    const history = useHistory();
    const dispatch = useDispatch();
    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get('accessToken');
    const token = sessionStorage.getItem("accesstoken");
    const userDetails = useSelector(state => state.signupState.userDetails);
    const myTournament = useSelector(state => state.tournamentState.myTournament);


    const getUserDetails = async (token)=>{
        await dispatch(getUser(token))
    }

    const getMyTournaments = async () =>{
        // const token = token
        await dispatch(getMyTournament(token))
    }

    useEffect(() => {
        if(accessToken) {
            sessionStorage.setItem("accesstoken", accessToken);
            history.push("/")
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken])


    useEffect(()=>{
        if(token && !userDetails){
            getUserDetails(token)
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, userDetails])

    useEffect(() => {
        if(!myTournament){
            getMyTournaments()
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myTournament])

    return (
        <div className = "tnbc-body fadeInUp animated">
            <div className="width-100">
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
