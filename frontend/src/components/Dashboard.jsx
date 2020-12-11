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
<<<<<<< HEAD
=======
        this.refreshAssignmentRegistry = this.refreshAssignmentRegistry.bind(this);
        this.refreshTaskRegistry = this.refreshTaskRegistry.bind(this);
        this.cement = this.cement.bind(this);
>>>>>>> main
        // this.deletePeopleClicked = this.deletePeopleClicked.bind(this)
        // this.updatePeopleClicked = this.updatePeopleClicked.bind(this)
        this.addPeopleClicked = this.addPeopleClicked.bind(this)
    }

    componentDidMount(){
        this.refreshPeopleRegistry();
    }

    refreshPeopleRegistry() {
<<<<<<< HEAD
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
=======
      loginService.retrieveAllPeople().then(response => { // get all people loaded in first
          this.setState({people: response.data});
          this.refreshAssignmentRegistry();
>>>>>>> main
        }
      );
    }

<<<<<<< HEAD
=======
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
          this.cement(people);  // each person will tell the server that they have fully received their tasks
        });
      }
    }

    cement(people) {
      this.setState(people);
    }

>>>>>>> main
    addPeopleClicked(){
        console.log('Add Person Clicked')
        this.props.history.push(`/thePerson/-1`)
    }

    addTaskClicked(){
        console.log('Add Task Clicked')
        this.props.history.push(`/theTask/-1`)
    }

    
    render(){
<<<<<<< HEAD
      if (this.state.people.length > 0) {
        console.log(this.state.people[0]);
=======
      const renderTasks = (person) => {
        if (person.tasks !== undefined) {
          let tasks = "";
          person.tasks.forEach(task => {
            tasks = tasks + task.name + " - " + task.description;
          });
          return <td>{tasks}</td>
        } else {
          return <td>?</td>
        }
>>>>>>> main
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
<<<<<<< HEAD
                                      <td>{
                                        person.tasks.forEach(task => {
                                          <strong>task.name</strong>
                                        })
                                      }</td>
=======
                                      {renderTasks(person)}
>>>>>>> main
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