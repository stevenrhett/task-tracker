import './index.css';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import MeetTheTeam from "./MeetTheTeam";
import WelcomeComponent from "./WelcomeComponent";
import {Outlet} from "react-router-dom";
import CreateTaskB from "./CreateTaskB";



function App() {
    return (<div>
            <HeaderComponent/>

            <Outlet/>

            <CreateTaskB/>




                <FooterComponent/>





        </div>
    );}

export default App;
