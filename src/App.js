import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./styles/Global";
import "./styles/tnbc.css";
import "./styles/misc.css";
import "./styles/media.css";
import "./styles/index.css";
import "./styles/animation.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import WebBody from "./components/HomePage/webBody";
import SignUp from "./components/Authentication/SignUp";
import SignIn from "./components/Authentication/SignIn";
import GamesProfile from "./components/GamesManagement/GamesProfile";
import LeaderBoardPage from "./components/GamesManagement/LeaderBoardPage";


function App() {
  return (
    <>   
      <GlobalStyles/>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path = "/" component = {WebBody} />
          <Route path = "/signup" component = {SignUp}/>
          <Route path = "/login" component = {SignIn}/>
          <Route path = "/game-management" component ={GamesProfile}/>
          <Route path = "/leaderboard" component = {LeaderBoardPage}/>
        </Switch>
          
      </BrowserRouter>
    </>
  );
}

export default App;
