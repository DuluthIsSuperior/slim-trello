import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import TrelloComponent from './components/TrelloComponent';
import Dashboard from './components/Dashboard';
import AssignPractice from './components/AssignPractice'

import GetPersonComponent from './components/person/GetPersonComponent'
import NewPersonComponent from './components/person/NewPersonComponent'
import UpdatePersonComponent from './components/person/UpdatePersonComponent'

import NewTaskComponent from './components/task/NewTaskComponent'
import GetTaskComponent from './components/task/GetTaskComponent'
import UpdateTaskComponent from './components/task/UpdateTaskComponent'




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginComponent}/>
          <Route path="/trello/:id" component={TrelloComponent}/>
          <Route path="/dashboard" component={Dashboard}/>

          <Route path="/thePerson/:id" component={NewPersonComponent}/>
          <Route path="/person/:id/:jobTitle" component={UpdatePersonComponent}/>
          <Route path="/PersonList" component={GetPersonComponent}/>

          <Route path="/theTask/:id" component={NewTaskComponent}/>
          <Route path="/task/:id/:name" component={UpdateTaskComponent}/>
          <Route path="/TaskList" component={GetTaskComponent}/>

          <Route path="/assignPractice" component={AssignPractice}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
