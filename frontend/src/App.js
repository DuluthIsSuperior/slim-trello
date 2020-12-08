import './App.css';
import LoginComponent from './components/LoginComponent';
import TrelloComponent from './components/TrelloComponent';
import { Router, Link } from "@reach/router";

function App() {
  return (
            <Router>
                <LoginComponent path ="/"/>
                <TrelloComponent path = "/trello//${lastName}" />
            </Router>
  );
}

export default App;
