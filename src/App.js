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

            return (
            <div>
                <HeaderComponent/>

                <MeetTheTeam/>
                <FooterComponent/>
            </div>


            <PublicLoginPage/>
            <FooterComponent/>


            <FooterComponent/>
            {/*main*/}
        </div>
    );
}


export default App;
