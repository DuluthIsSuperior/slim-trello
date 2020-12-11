import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import TrelloComponent from './components/TrelloComponent';
import Dashboard from './components/Dashboard';
import NewPersonComponent from './components/person/NewPersonComponent'
import NewTaskComponent from './components/task/NewTaskComponent'
import GetTaskComponent from './components/task/GetTaskComponent'
import AssignPractice from './components/AssignPractice'


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
          <Route path="/TaskList" component={GetTaskComponent}/>

          <Route path="/assignPractice" component={AssignPractice}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
