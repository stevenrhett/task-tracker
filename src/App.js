import './index.css';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import MeetTheTeam from "./MeetTheTeam";
import WelcomeComponent from "./WelcomeComponent";


function App() {
    return (<div>
            <HeaderComponent/>

            <Outlet/>






                <FooterComponent/>





        </div>
    );}

export default App;
