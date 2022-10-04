import SignUpPage from "./SignUpPage";
import LogInForm from "./LogInForm";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import {Outlet} from "react-router-dom"

{/*feature/log-in-sign-up*/}


function App() {
  return(
  <div>
      <HeaderComponent/>
      <Outlet/>


<FooterComponent/>
      {/*main*/}
  </div>
  );
}

export default App;
