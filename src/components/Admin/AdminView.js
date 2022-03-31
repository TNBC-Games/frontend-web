import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
// import { useForm } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';
import { WalletView } from '../Wallets/wallets';
import Input from '../input';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import Modal from '../ReusableComponents/modals';
import { getTournament,updateTournament, getGames, createGame, createNewTournament, updateTournamentImage, unpublishGame} from '../../redux/actions/tournment.actions';
import { getHumanDate } from '../../utils/utils';
import { Dropdown } from '../HomePage/ChooseGames';




function AdminView() {
    const dispatch = useDispatch()
    const [view, setView] = useState("games");
    const [tournamentValues, setTournamentValues] = useState({
        name: "",
        prize: "",
        fee: "",
        limit: "",
        date: "",
        info: "",
        type: "",
        rules: "",
        apply: "",
        gamesName: "",
        mainCategory: "",
        game: "",
    });
    const [editSaveButtonDisabled, setEditSaveButtonDisabled] = useState(false)
    const [gameList, setGameList] = useState("");
    const [tournList, setTournList] = useState("")
    const [showEditModal, setShowEditModal] = useState(false);
    const [createTournamentCheck, setCreateTournamentCheck] = useState(false);
    const [createGamesCheck, setCreateGamesCheck] = useState(false);
    const [createGameLoading, setCreateGameLoading] = useState(false);
    const [createTournamentLoading, setCreateTournamentLoading] = useState(false)
    const [showDropDown, setShowDropdown] = useState(false);
    // const [gameId, setGameId] = useState(false);
    // const [imageData, setImageData] = useState('');
    // const [imageUploading, setImageUploading] = useState("")
    const [editItem, setEditItem]=useState({
        name: "",
        prize: "",
        fee: "",
        limit: "",
        date: "",
        info: "",
        type: "",
        rules: "",
        apply: "",
        gamesName: "",
        mainCategory: "",
        image: "",
    })
    const accessToken = sessionStorage.getItem("accesstoken");
    // const { register, handleSubmit } = useForm()

    const handleChange = (event) => {
        setTournamentValues({
            ...tournamentValues,
            [event.target.name]: event.target.value
        })
    }

    const editChange = (event) => {
        const {name, value} = event.target
        setEditItem({
            ...editItem,
            [name]: value
        })
    }

    

    const DeleteTournament = (tourn)=>{
        const filteredList = tournList.filter(
            (item) => item.id !== tourn.id
        );
        setTournList(filteredList)
    }

    const EditTournament =(item)=>{
        setEditItem(item)
        setShowEditModal(true)  
    }

    const DeleteGame = (game)=>{
        const filteredList = gameList.filter(
            (item) => item.id !== game.id
        );
        setGameList(filteredList)
    }

    const EditGame =(item)=>{
        setEditItem(item)
        setShowEditModal(true) 
    }

    const List = ({Index, Name, Prize, Fee, Date, onEdit, onDelete, status, publishItem, unpublishItem}) => {

        return( 
            <div className="list">
                <div className="col">{`${Index + 1}.`}</div>
                <div className="coll">{Name}</div>
                {Prize && (<div className="coll">{Prize}</div>)}
                {Fee &&(<div className="coll">{Fee}</div>)}
                {Date && (<div className="coll">{getHumanDate(Date)}</div>)}
                <div className="coll" onClick={!status? publishItem: unpublishItem}>{status ? "Published": "Publish"}</div>
                <div className="flex">
                    <div className="icons mr-3" onClick={onEdit}><FiEdit2/></div> 
                    <div className="icons ml-3" onClick={onDelete}><AiOutlineDelete/></div>
                </div>
            </div>
        )
    }

    const getListOfTournaments = async () => {
        let {status, response} = await dispatch(getTournament())
        if(status){
            setTournList(response)
        }
        
    }

    const getListOfGames = async () => {
        let {status, response} = await dispatch(getGames())
        if(status) {
            setGameList(response)
        }
       
    }

    const updateSelectedTournament =  async () =>{
        
        const data = editItem._id
        const token = accessToken
        const payload ={
            info: editItem.info,
            rules: editItem.rules,
            howToApply: editItem.howToApply
        }
        // let {status, response} = 
        await dispatch(updateTournament(payload, data, token))
    }

    const createTournament = async ()=>{
        setCreateTournamentLoading(true)
        const token = accessToken
        const payload ={
            name: tournamentValues.name,
            prize: tournamentValues.prize,
            fee: tournamentValues.fee,
            limit: tournamentValues.limit,
            startDate: tournamentValues.date,
            info: tournamentValues.info,
            type: tournamentValues.type,
            rules: tournamentValues.rules,
            howToApply: tournamentValues.apply,
            game: tournamentValues.game
        }
        //let {status, response} = 
        await dispatch(createNewTournament(payload, token))
        setCreateTournamentLoading(false)
    }

    const createAGame = async ()=>{
        setCreateGameLoading(true)
        const payload={
            name: tournamentValues.gamesName,
            mainCategory: tournamentValues.mainCategory,
           // token: accessToken
        }
        const token = accessToken
        //let {status, response} = 
        await dispatch(createGame(payload, token))
        
        setCreateGameLoading(false)
    }

    const filter = (item)=>{
        const {_id, name} = item
        setTournamentValues({
            ...tournamentValues,
            game: _id,
            gamesName: name
        })
        setShowDropdown(false)
    }

    // const publishTournament =async(item)=>{
        
    // }
    const publishGame=async(item)=>{
        const payload = item.name
        //let {status, response} = 
        await dispatch(publishGame(payload))
    }

    const unpublishGameItem=async(item)=>{
        const payload = item.name
        //console.log(item.name, "item")
        //let {status, response} = 
        await dispatch(unpublishGame(payload, accessToken))
    }
    const submitImage = async (event)  =>{
        setEditSaveButtonDisabled(true)
        const id = editItem._id
        const token = accessToken
        // setImageUploading("uploading")
        const formData = new FormData()
        const file = event.target.files[0]
        formData.append("image", file)

       // let {status, response} = 
        await dispatch(updateTournamentImage(formData, id, token))
        
        // setImageData(formData)
        setEditSaveButtonDisabled(false)
        // setImageUploading("")
    }


    useEffect(() => {
        const {rules, info, howToApply } = editItem
        if(!rules || !info || !howToApply) {
            setEditSaveButtonDisabled(true)
        }else{
            setEditSaveButtonDisabled(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editItem])
    useEffect(()=>{
        if(view === "tournamentList" || "gameList"){
            if (view === "tournamentList"){
                getListOfTournaments()
            }
            if (view === "gameList"|| "tournament"){
                getListOfGames()
            }
        }
                // eslint-disable-next-line react-hooks/exhaustive-deps
    },[view])

    useEffect(() => {
        const {name, prize, fee, limit, date, type, info, rules, apply, game} = tournamentValues
        if(!name|| !prize || !fee || !limit || !date || !type || !info || !rules || !apply || !game){
            setCreateTournamentCheck(true)
        }else{
            setCreateTournamentCheck(false)
        }
                // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tournamentValues])

    useEffect(() => {
        const {gamesName, mainCategory} = tournamentValues
        if(!gamesName || !mainCategory) {
            setCreateGamesCheck(true)
        }else{
            setCreateGamesCheck(false)
        }
    }, [tournamentValues])
    return (
        <>
        <div className ="leaderboard-page fadeInUp animated">
            <AdminVieww>
                <div className ="wallet-sidebar mx-3">
                    <div className={`action-btn mb-2 ${view === "tournament" && "black-bg"}`} onClick= {()=> setView("tournament")}>Create Tournament </div>
                    <div className={`action-btn mb-2 ${view === "games" && "black-bg"}`} onClick= {()=> setView("games")}>Create Games </div>
                    <div className={`action-btn mb-2 ${view === "tournamentList" && "black-bg"}`} onClick= {()=> setView("tournamentList")}>List Of Tournaments </div>
                    <div className={`action-btn mb-2 ${view === "gameList" && "black-bg"}`} onClick= {()=> setView("gameList")}>List Of Games </div>
                </div>
                <div className="main-session">
                    <div className="info-section">
                        {view === "tournament" && (
                            <div>
                                <div className ="list-flex">
                                    <Input
                                        className= "formInput mt-2"
                                        placeholder="Tournament Name"
                                        type="text"
                                        onChange={handleChange}
                                        value = {tournamentValues.name}
                                        min={2}
                                        label= {"Name"}
                                        bodyClass={"mr-2 align-start "}
                                        name={"name"}
                                        
                                    />

                                    <Input
                                        className= "formInput mt-2 "
                                        placeholder=" Tournament Prize"
                                        type="number"
                                        onChange={handleChange}
                                        value = {tournamentValues.prize}
                                        min={1}
                                        label= {"Prize"}
                                        bodyClass={"ml-2 align-start "}
                                        name={"prize"}
                                    />
                                </div>

                                <div className ="list-flex">

                                    <Input
                                        className= "formInput mt-2 align-start "
                                        placeholder="Tournament fee"
                                        type="number"
                                        onChange={handleChange}
                                        value = {tournamentValues.fee}
                                        min={1}
                                        label= {"Fee"}
                                        bodyClass={"mr-2 align-start "}
                                        name={"fee"}
                                    />

                                    <Input
                                        className= "formInput mt-2 align-start "
                                        placeholder="Tournament limit"
                                        type="number"
                                        onChange={handleChange}
                                        value = {tournamentValues.limit}
                                        min={1}
                                        label= {"Limit"}
                                        bodyClass={"ml-2 align-start "}
                                        name={"limit"}
                                    />
                                </div>

                                <div className ="list-flex">
                                    <Input
                                        className= "formInput mt-2 align-start "
                                        placeholder="startdate"
                                        type="date"
                                        onChange={handleChange}
                                        value={tournamentValues.date}
                                        min={1}
                                        label={"Start Date"}
                                        bodyClass={"mr-2 align-start "}
                                        name={"date"}
                                    />

                                    <Input
                                        className= "formInput mt-2 align-start"
                                        placeholder="Type"
                                        type="text"
                                        onChange={handleChange}
                                        value = {tournamentValues.type}
                                        min={1}
                                        label={"Type"}
                                        bodyClass={"ml-2 align-start "}
                                        name={"type"}
                                    />

                                   
                                </div>


                                <div className ="list-flex">
                                    <Input
                                        className= "formInput mt-2 align-start"
                                        placeholder="Info"
                                        type="text"
                                        onChange={handleChange}
                                        value = {tournamentValues.info}
                                        min={1}
                                        label= {"Info"}
                                        bodyClass={"align-start mr-2"}
                                        name={"info"}

                                    />
                                    <div class="width-100 relative">
                                        <Input
                                            className= "formInput mt-2 align-start"
                                            placeholder="Choose Games"
                                            type="select"
                                            onClick={() => setShowDropdown(true)}
                                            value = {tournamentValues.gamesName}
                                            min={1}
                                            label= {"Select Game"}
                                            bodyClass={"align-start ml-2 relative"}
                                            autocomplete="off"

                                        />
                                        { showDropDown && (

                                            <GameDropdown>
                                                <div className= "dropdown-inner">
                                                    {gameList &&
                                                        gameList.map((item, index)=>(
                                                            <div className = "dropdown-item" onClick= {() => filter(item)}> {item.name}</div>
                                                        ))}
                                                    
                                                    
                                                </div>

                                            </GameDropdown>
                                        )}
                                    </div>
                                </div>


                                <Input
                                    className= "formInput mt-2 align-start"
                                    placeholder="Rules"
                                    type="text"
                                    onChange={handleChange}
                                    value = {tournamentValues.rules}
                                    min={1}
                                    label= {" Rules "}
                                    bodyClass={"align-start "}
                                    name={"rules"}
                                />

                                <Input
                                    className= "formInput mt-2 align-start"
                                    placeholder="How To Apply"
                                    type="text"
                                    onChange={handleChange}
                                    value = {tournamentValues.apply}
                                    min={1}
                                    label= {"How to Apply "}
                                    bodyClass={"align-start "}
                                    name={"apply"}
                                />

                                
                                <button className= {`${createTournamentCheck ? "grey-disabled ": createTournamentLoading ? "form-loading": ""} save-btn sign-up-btn float-btn`} onClick={createTournament}><span>Save</span></button>
                            </div>
                            
                        )}
                        {view === "games" && (
                            <div>
                                <Input
                                    className= "formInput mt-2 align-start"
                                    placeholder="Name"
                                    type="text"
                                    onChange={handleChange}
                                    value = {tournamentValues.gamesName}
                                    min={1}
                                    label= {"Name"}
                                    bodyClass={"align-start "}
                                    name={"gamesName"}

                                />


                                <Input
                                    className= "formInput mt-2 align-start"
                                    placeholder="Main Category"
                                    type="text"
                                    onChange={handleChange}
                                    value = {tournamentValues.mainCategory}
                                    min={1}
                                    label= {" Main Category "}
                                    bodyClass={"align-start "}
                                    name={"mainCategory"}
                                />

                                <button className= {`${createGamesCheck ? "grey-disabled ": createGameLoading ? "form-loading":""} save-btn sign-up-btn float-btn`} onClick={createAGame}><span>Save</span></button>
                            </div>
                        )}
                        {view === "tournamentList" && (
                            <>
                            <div className="list black">
                                <div className="col hidee">1</div>
                                <div className="coll">Name</div>
                                <div className="coll">Prize</div>
                                <div className="coll">Fee</div>
                                <div className="coll">Start Date</div>
                                <div className="coll">Status</div>
                                <div className="flex hidee">
                                    <div className="icons mr-3"><FiEdit2/></div> 
                                    <div className="icons ml-3"><AiOutlineDelete/></div>
                                </div>
                            </div>
                            {tournList ? tournList.map((item, index)=>(
                                <List 
                                    Index= {index} 
                                    Name={item.name} 
                                    Prize={item.prize} 
                                    Fee={item.fee} 
                                    Date={item.startDate} 
                                    onDelete={()=>  DeleteTournament(item)} 
                                    onEdit = {()=> EditTournament(item)} 
                                    status={item.game.published} 
                                    // publishItem={()=> publishTournament(item)} 
                                    // unpublishItem={()=> unpublishTouranament(item)}
                                />

                            )):(
                                <Skeleton height={50} count={10} baseColor= "#262626" highlightColor="#404040" borderRadius={5} containerClassName="mb-10"/>
                            )}
                            </>
                        )}
                        {view === "gameList" && (
                            <>
                            <div className="list black">
                                <div className="col hidee">1</div>
                                <div className="coll">Name</div>
                                <div className="coll">Status</div>
                                <div className="flex hidee">
                                    <div className="icons mr-3"><FiEdit2/></div> 
                                    <div className="icons ml-3"><AiOutlineDelete/></div>
                                </div>
                            </div>
                            {gameList ? gameList.map((item, index)=>(
                                <List 
                                    Index= {index} 
                                    Name={item.name} 
                                    Prize={item.prize} 
                                    Fee={item.fee} 
                                    Date={item.date} 
                                    onDelete={()=> DeleteGame(item)} 
                                    onEdit = {()=> EditGame(item)} 
                                    status={item.published} 
                                    publishItem={()=> publishGame(item)}
                                    unpublishItem={()=> unpublishGameItem(item)}
                                />

                            )):(
                                <Skeleton height={50} count={10} baseColor= "#262626" highlightColor="#404040" borderRadius={5} containerClassName="mb-10"/>
                            )}
                            </>
                        )}

                    </div>
                </div>
                

            </AdminVieww>
            
        </div>
        <Modal showModal={showEditModal} setShowModal={()=> setShowEditModal(false)} >
            <ModalContent>
                <Input
                    className= "formInput mt-2 "
                    placeholder="Game Info"
                    type="text"
                    onChange={editChange}
                    value = {editItem.info}
                    min={1}
                    label= {"Info"}
                    bodyClass={"align-start "}
                    name={"info"}
                />

                <Input
                    className= "formInput mt-2 "
                    placeholder="Game Rules"
                    type="text"
                    onChange={editChange}
                    value = {editItem.rules}
                    min={1}
                    label= {"Rules"}
                    bodyClass={"align-start "}
                    name={"rules"}
                />
                

                <Input
                    className= "formInput mt-2 align-start "
                    placeholder="How to Apply"
                    type="text"
                    onChange={editChange}
                    value = {editItem.howToApply}
                    min={1}
                    label= {"How to Apply"}
                    bodyClass={"align-start "}
                    name={"howToApply"}
                   
                />

                <Input
                    className= "formInput mt-2 align-start"
                    placeholder="How To Apply"
                    type="file"
                    onChange={submitImage}
                    //value = {editItem.image}
                    min={1}
                    label= {"Upload Tournament Image"}
                    bodyClass={"align-start "}
                    name={"picture"}
                /> 

                <button className= {`${editSaveButtonDisabled ? "grey-disabled ": ""} save-btn sign-up-btn float-btn`} onClick={updateSelectedTournament}><span>Save</span></button>
            </ModalContent>
        </Modal>
        
    </>
    
)}

export default AdminView;
const AdminVieww = styled(WalletView)`
    margin: auto;
    .formInput {
        display: flex;
        justify-content: center;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        padding: 15px 0px 15px 0px;
        padding-left: 30px;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        color: rgba(255, 255, 255, 0.5);
    }
    .form-section{
        width: 100%
    }

    input:focus {
        outline: none !important;
        border-color: #d5d0cc;
    }
    .list-flex{
        display: flex;
        justify-content:space-between;
    }
    .align-start{
        align-items: flex-start !important;
    }
    .list{
        min-height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-radius: 10px;
        margin-bottom: 10px;
        padding: 10px;
        .col{
            max-width: 10%;
        }
        .coll{
            display: flex;
            align-items: flex-start;
            min-width: 137px;
        }
    }
    .black{
        background: #000000;
    }
    .hidee{
        opacity: 0;
    }

    .save-btn{
        height: 50px;
        width: 168px;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #000000;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        //background: grey;
        border-radius: 5px;
        margin-top: 40px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .relative{
        position: relative;
    }
    @media only screen and (max-width: 962px) {
        .wallet-sidebar{
            flex-direction: column !important;
            .action-btn{
                max-width: 100%;
            }
        }
        .list-flex{
            flex-direction: column !important;
        }

        .list{
            min-width: 796px !important;
        }
        .info-section{
            overflow-x:scroll ;
        }
    }
`;

const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    .align-start{
        align-items: flex-start !important;
    }
    .formInput{
        width: 100%;
    }
    .form-section{
        width: 60%;
        @media only screen and (max-width: 962px) {
            width: 100%;
        }
    }
    .save-btn{
        height: 50px;
        width: 168px;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #000000;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        //background: grey;
        border-radius: 5px;
        margin-top: 40px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

`

const GameDropdown = styled(Dropdown)`
    position: absolute;
    top: 120px;
    margin-left: 0.5rem !important;
    width: 100%;
    height: auto;
    .dropdown-inner {
        width: 99%;
        height: auto;
    }
`
