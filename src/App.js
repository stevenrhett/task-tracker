import './index.css';
import PublicLoginPage from "./PublicLoginPage";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import {Outlet} from "react-router-dom";
import MeetTheTeam from "./MeetTheTeam";


function App() {

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>






                <FooterComponent/>





        </div>
    );}
export default App;
