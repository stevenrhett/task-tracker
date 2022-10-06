import './index.css';
import HeaderComponent from "./HeaderComponent";
import LogInForm from "./LogInForm";
import FooterComponent from "./FooterComponent";
import MeetTheTeam from "./MeetTheTeam";
import WelcomeComponent from "./WelcomeComponent";

function App() {
    return (
        <div>
            <HeaderComponent/>
           <WelcomeComponent/>
            <FooterComponent/>
        </div>

    );
}

export default App;
