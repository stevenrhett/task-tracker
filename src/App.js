import './App.css';
import SignUpPage from "./SignUpPage";
import LogInForm from "./LogInForm";
import AboutUsPageB from "./AboutUsPageB";
import TaskCardB from "./TaskCardB";
import DisplayAllTasks from "./DisplayAllTasks";

function App() {
  return(
  <div>
      <DisplayAllTasks/>
      <AboutUsPageB/>
      <LogInForm/>
      <SignUpPage/>
  </div>
  );
}

export default App;
