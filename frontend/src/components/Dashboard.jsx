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
        // this.deletePeopleClicked = this.deletePeopleClicked.bind(this)
        // this.updatePeopleClicked = this.updatePeopleClicked.bind(this)
        this.addPeopleClicked = this.addPeopleClicked.bind(this)
    }

    componentDidMount(){
        this.refreshPeopleRegistry();
    }

    refreshPeopleRegistry() {
      loginService.retrieveAllPeople().then(response => { // get all people from the database
          let people = response.data;
          people.forEach(person => {
            person.tasks = [];
            taskAssignedService.retrieveTasksAssignedByPerson(person.id).then(response2 => {  // get tasks assigned to each person from the database
              let assignments = response2.data; // returns task ids associated with this person
              let tasks = [];
              for (let i = 0; i < assignments.length; i++) {  // gets the specific task given the task id
                taskService.retrieveTask(assignments[i].taskId).then(response3 => {
                  tasks[i] = response3.data;
                });
              }
              person.tasks = tasks;
            });
          });
          this.setState({
              people: people
          });
        }
      );
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
      if (this.state.people.length > 0) {
        console.log(this.state.people[0]);
      }
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
                                      <td>{
                                        person.tasks.forEach(task => {
                                          <strong>task.name</strong>
                                        })
                                      }</td>
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