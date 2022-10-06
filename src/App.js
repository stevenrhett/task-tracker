import './index.css';
import PublicLoginPage from "./PublicLoginPage";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import {Outlet} from "react-router-dom";
import MeetTheTeam from "./MeetTheTeam";
import DisplayAllTasks from "./DisplayAllTasks";


function App() {

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <DisplayAllTasks/>





                <FooterComponent/>





        </div>
    );}
export default App;
