import "./App.css";
import { Dashboard, Error, Login } from "./pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Dashboard></Dashboard>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
    </Router>
  );
}

export default App;
