import './App.css';
import LoginComponent from './components/LoginComponent';
import TrelloComponent from './components/TrelloComponent';
import Dashboard from './components/Dashboard';
import { Router } from "@reach/router";

function App() {
  return (
            <Router>
                <LoginComponent path ="/"/>
                <TrelloComponent path = "/trello" />
                <Dashboard path = "/dashboard" />
            </Router>
  );
}

export default App;
