import './index.css';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import MeetTheTeam from "./MeetTheTeam";
import WelcomeComponent from "./WelcomeComponent";
import {Outlet} from "react-router-dom";
import CreateTaskB from "./CreateTaskB";
import ContactUsPageC from "./ContactUsPageC";



function App() {
    return (<div>
            <HeaderComponent/>

            <Outlet/>

            <ContactUsPageC/>




                <FooterComponent/>





        </div>
    );}

export default App;
