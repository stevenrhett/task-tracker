import './index.css';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import NewLoginPage from "./NewLoginPage";


function App() {
    return (<div>
<HeaderComponent/>

    <Outlet/>

  <FooterComponent/>    

        </div>

);
}

export default App;
