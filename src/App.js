
import './index.css';
import PublicLoginPage from "./PublicLoginPage";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogInForm from "./LogInForm";

function App() {
    return (
        <div>

            <HeaderComponent/>
            <LogInForm/>
            <PublicLoginPage/>
            <FooterComponent/>

        </div>
    );
}


export default App;
