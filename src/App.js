import Navbarr from "./components/NavBar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./styles/Global";
import "./styles/tnbc.css";
import "./styles/misc.css";
import "./styles/media.css";
import "./styles/index.css";
import "./styles/animation.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import WebBody from "./components/HomePage/webBody";
import SignUp from "./components/Authentication/SignUp";
import SignIn from "./components/Authentication/SignIn";
import GamesProfile from "./components/GamesManagement/GamesProfile";
import LeaderBoardPage from "./components/GamesManagement/LeaderBoardPage";
import ProfileManagement from "./components/ProfileManagement.js/ProfileManagement";
import MyTournament from "./components/GamesManagement/MyTournament";
import { Provider } from 'react-redux';
import FaqPage from "./components/HomePage/Faq";
import SettingsPage from "./components/HomePage/Settings";
import PrivateRoute from "./auth/RouteComponents/privateRoute";
import Wallet from "./components/Wallets/wallets";
import TransactionView from "./components/Wallets/transactionView";
import TournamentManagement from "./components/TournamentManagement/TournamentManagement";
import AdminView from "./components/Admin/AdminView";




function App() {
  return (
    <>   
      <GlobalStyles/>
      <BrowserRouter>
        <Navbarr/>
        <Switch>
          <Route exact path = "/" component = {WebBody} />
          <Route exact path = "/signup" component = {SignUp}/>
          <Route exact path = "/login" component = {SignIn}/>
          <PrivateRoute exact path = "/game-management" component ={GamesProfile}/>
          <Route exact path = "/leaderboard" component = {LeaderBoardPage}/>
          <PrivateRoute exact path = "/profile" component = {ProfileManagement}/>'
          <PrivateRoute exact path = "/my-tournament" component = {MyTournament}/>
          <Route exact path = "/faq" component ={FaqPage}/>
          <PrivateRoute exact path = "/setting" component ={SettingsPage}/>
          <Route exact path ="/my-wallet" component = {Wallet}/>
          <Route exact path ="/wallet-transactions" component = {TransactionView}/>
          <Route exact path ="/tournaments" component = {TournamentManagement}/>
          <Route exact path ="/admin" component = {AdminView}/>
        </Switch>
          
      </BrowserRouter>
    </>
  );
}

export default App;
