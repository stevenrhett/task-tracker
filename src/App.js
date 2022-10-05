import './index.css';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogInForm from "./LogInForm";
import PublicLoginPage from "./PublicLoginPage";
import PublicUserLogin from "./PublicUserLogin";

function App() {
    return (<div>

        <HeaderComponent/>
        <LogInForm/>
        <PublicLoginPage/>
        <PublicUserLogin/>
        <FooterComponent/>

    </div>);
}

export default App;