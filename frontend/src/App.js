import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import TrelloComponent from './components/TrelloComponent';
import Dashboard from './components/Dashboard';
import NewPersonComponent from './components/NewPersonComponent'
import NewTaskComponent from './components/NewTaskComponent'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginComponent}/>
          <Route path="/trello/:id" component={TrelloComponent}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/thePerson/:id" component={NewPersonComponent}/>
          <Route path="/theTask/:id" component={NewTaskComponent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
