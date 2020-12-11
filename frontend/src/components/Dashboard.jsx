import React, { Component } from 'react';
import loginService from '../service/loginService';
import taskAssignedService from '../service/taskAssignedService';
import taskService from '../service/taskService';

class Dashboard extends Component {
    constructor (props){
        super(props)
        this.state = {
            people: []
        }
        this.refreshPeopleRegistry = this.refreshPeopleRegistry.bind(this);
        this.refreshAssignmentRegistry = this.refreshAssignmentRegistry.bind(this);
        this.refreshTaskRegistry = this.refreshTaskRegistry.bind(this);
        this.cement = this.cement.bind(this);
        // this.deletePeopleClicked = this.deletePeopleClicked.bind(this)
        // this.updatePeopleClicked = this.updatePeopleClicked.bind(this)
        this.addPeopleClicked = this.addPeopleClicked.bind(this)
    }

    componentDidMount(){
        this.refreshPeopleRegistry();
    }

    refreshPeopleRegistry() {
      loginService.retrieveAllPeople().then(response => { // get all people loaded in first
          this.setState({people: response.data});
          this.refreshAssignmentRegistry();
        }
      );
    }

    refreshAssignmentRegistry() {
      let people = this.state.people;
      for (let i = 0; i < people.length; i++) { // then get their assigned task ids
        taskAssignedService.retrieveTasksAssignedByPerson(people[i].id).then(response => {
          people[i].assignments = response.data;
          people[i].tasks = [];
          this.refreshTaskRegistry(people, i);  // each person will get their task names and descriptions
        });
      }
    }

    refreshTaskRegistry(people, personIndex) {
      let assignments = people[personIndex].assignments;
      for (let i = 0; i < assignments.length; i++) {
        taskService.retrieveTask(assignments[i].taskId).then(response => {
          people[personIndex].tasks[i] = response.data;
          people[personIndex].tasks[i].completed = assignments[i].completed;
          this.cement(people);  // each person will tell the server that they have fully received their tasks
        });
      }
    }

    cement(people) {
      this.setState(people);
    }

    addPeopleClicked(){
        console.log('Add Person Clicked')
        this.props.history.push(`/thePerson/-1`)
    }

    addTaskClicked(){
        console.log('Add Task Clicked')
        this.props.history.push(`/theTask/-1`)
    }

    
    render(){
      // console.log(this.state.people);
      const renderTasks = (person) => {
        if (person.tasks !== undefined) {
          let tasks = "";
          person.tasks.forEach(task => {
            tasks = tasks + task.name + " - " + task.description + "\n";
          });

          const App = () => // renders each line as a span with a line break
          tasks.split('\n').map((value, index) => {
            return (
              <span key={index}>
                {value}
                <br />
              </span>
            );
          });

          return <td>{App()}</td>
        } else {
          return <td>?</td>
        }
      };
      const renderStatus = (person) => {
        if (person.tasks !== undefined) {
          let tasks = "";
          person.tasks.forEach(task => {
            tasks = tasks + task.completed + "\n";
          });

          const App = () => // renders each line as a span with a line break
          tasks.split('\n').map((value, index) => {
            return (
              <span key={index}>
                {value}
                <br />
              </span>
            );
          });

          return <td>{App()}</td>
        } else {
          return <td>?</td>
        }
      };
      return(
          <div className="container">
              <h1 style={{textAlign:"center"}}>Trello-Lite</h1>
              <br/>
              <div className="jumbotron" style={{backgroundColor: "lightblue", color: "black"}}>
                  <table className="table">
                      <thead>
                          <tr style={{textAlign: "center", color: "black"}}>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Tasks</th>
                              <th>Completed</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              this.state.people.map (person =>   
                                  <tr style={{textAlign: "center"}} key={person.id}>
                                      <td>{person.id}</td>
                                      <td><br/>
                                        <strong>{person.firstName} {person.lastName}</strong>
                                        <br />
                                        <br />
                                        <em>{person.jobTitle}</em>
                                        <br />
                                        <br />
                                      </td>
                                      {renderTasks(person)}
                                      {renderStatus(person)}
                                      {/* <td>{}</td>
                                      //user.tasksAssigned
                                      <td><button className="btn btn-dark" onClick={() => this.deleteTasksClicked(tasks.id, tasks.firstName, tasks.lastName)}>-</button></td>
                                      <td><button className="btn btn-info" onClick={() => this.updateTasksClicked(tasks.id, tasks.jobTitle)}>Update</button></td> */}
                                  </tr>
                              )
                          }
                      </tbody>
                  </table>
                  <div className="row">
                      <br />
                      <br/>
                      <button className="btn btn-success" onClick={this.addPersonClicked}>Add Person</button>
                      <br />
                      <br/>
                      <button className="btn btn-success" onClick={this.addTaskClicked}>Add Task</button>
                      <br/>
                      <br/>
                  </div>
              </div>
          </div>
      )
    }
}

export default Dashboard;