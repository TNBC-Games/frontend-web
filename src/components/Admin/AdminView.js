import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { WalletView } from '../Wallets/wallets';
import Input from '../input';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import Modal from '../ReusableComponents/modals';



function AdminView() {
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
    });
    const [editSaveButtonDisabled, setEditSaveButtonDisabled] = useState(false)
    const gamesList = [
        {
            id: 1,
            name: "Dayo",
            prize: 100,
            fee: 50,
            date: "13/2/2022",
            info: "yes",
            rules: "hi",
            howToApply: "no"
        },
        {
            id: 2,
            name: "Tayo",
            prize: 100,
            fee: 50,
            date: "13/2/2022",
            info: "yes",
            rules: "hi",
            howToApply: "no"
        },
        {
            id: 3,
            name: "Ore",
            prize: 100,
            fee: 50,
            date: "13/2/2022",
            info: "yes",
            rules: "hi",
            howToApply: "no",
        },
        {
            id: 4,
            name: "Femi",
            prize: 100,
            fee: 50,
            date: "13/2/2022",
            info: "yes",
            rules: "hi",
            howToApply: "no"
        },

    ]
    const [gameList, setGameList] = useState(gamesList);
    const [showEditModal, setShowEditModal] = useState(false);
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
    })

    const handleChange = (event) => {
        setTournamentValues({
            ...tournamentValues,
            [event.target.name]: event.target.value
        })
    }

    const editChange = (event) => {
        console.log(event,"---------")
        const {name, value} = event.target
        console.log(name, value,"iiiiiiiiiiiiiiiiiiiiiiiii")
        setEditItem({
            ...editItem,
            [name]: value
        })
    }

    

    const DeleteGame = (game)=>{
        const filteredList = gameList.filter(
            (item) => item.id !== game.id
        );
        setGameList(filteredList)
    }

    const EditGmae =(item)=>{
        setEditItem(item)
        setShowEditModal(true)
        
        
    }
    console.log(editItem,"[[[[[[[[[[[[[[[[[")

    const List = ({Index, Name, Prize, Fee, Date, onEdit, onDelete}) => {
        return( 
            <div className="list">
                <div className="col">{`${Index + 1}.`}</div>
                <div className="coll">{Name}</div>
                <div className="coll">{Prize}</div>
                <div className="coll">{Fee}</div>
                <div className="coll">{Date}</div>
                <div className="list-flex">
                    <div className="icons mr-3" onClick={onEdit}><FiEdit2/></div> 
                    <div className="icons ml-3" onClick={onDelete}><AiOutlineDelete/></div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        const {rules, info, howToApply } = editItem
        if(!rules || !info || !howToApply) {
            setEditSaveButtonDisabled(true)
        }else{
            setEditSaveButtonDisabled(false)
        }
        
    }, [editItem])
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


                                <Input
                                    className= "formInput mt-2 align-start"
                                    placeholder="Info"
                                    type="text"
                                    onChange={handleChange}
                                    value = {tournamentValues.info}
                                    min={1}
                                    label= {"Info"}
                                    bodyClass={"align-start "}
                                    name={"info"}

                                />


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
                                    value = {tournamentValues.rules}
                                    min={1}
                                    label= {" Main Category "}
                                    bodyClass={"align-start "}
                                    name={"mainCategory"}
                                />
                            </div>
                        )}
                        {view === "tournamentList" && (
                            <>
                            <div className="list black">
                                <div className="col hidee">1</div>
                                <div className="coll">Name</div>
                                <div className="coll">Prize</div>
                                <div className="coll">Fee</div>
                                <div className="coll">Date</div>
                                <div className="list-flex hidee">
                                    <div className="icons mr-3"><FiEdit2/></div> 
                                    <div className="icons ml-3"><AiOutlineDelete/></div>
                                </div>
                            </div>
                            {gameList && gameList.map((item, index)=>(
                                <List Index= {index} Name={item.name} Prize={item.prize} Fee={item.fee} Date={item.date} onDelete={()=> DeleteGame(item)} onEdit = {()=> EditGmae(item)}/>

                            ))}
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

                <button className= {`${editSaveButtonDisabled ? "grey-disabled ": ""} save-btn sign-up-btn float-btn`}><span>Save</span></button>
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
            width: 103px;
        }
    }
    .black{
        background: #000000;
    }
    .hidee{
        opacity: 0;
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
