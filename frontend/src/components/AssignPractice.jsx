import React, { Component } from 'react';
import taskAssignedService from '../service/taskAssignedService';
import loginService from '../service/loginService';
import taskService from '../service/taskService';

class Dashboard extends Component {
    constructor (props){
        super(props)
        this.state = {
            people: [],
            tasks: [],
            taskAssigned: []
        }
        this.getPeopleData = this.getPeopleData.bind(this)
        this.getTaskData = this.getTaskData.bind(this)
        this.getTaskAssignedData = this.getTaskAssignedData.bind(this)
        this.findPersonClicked = this.findPersonClicked.bind(this)
        this.findTaskClicked = this.findTaskClicked.bind(this)
        this.assignTaskClicked = this.assignTaskClicked.bind(this)
        this.mapTaskClicked = this.mapTaskClicked.bind(this)
        // this.refreshTaskAssignRegistry = this.refreshTaskAssignRegistry.bind(this)
        // this.refreshTaskRegistry = this.refreshTaskRegistry.bind(this)
        // this.refreshPeopleRegistry = this.refreshPeopleRegistry.bind(this)
    }

    componentDidMount(){
        this.getPeopleData()
        this.getTaskData()
        this.getTaskAssignedData()
    }

    getPeopleData() {
        loginService.retrieveAllPeople()
        .then(
            value => {
                this.setState({
                    people: value.data,
                })
                console.log(value.data)
            }
        )
    }

    getTaskData() {
        taskService.retrieveAllTasks()
        .then(
            value => {
                this.setState({
                    tasks: value.data,
                })
                console.log(value.data)
            }
        )
    }

    getTaskAssignedData() {
        taskAssignedService.retrieveAllTaskAssigned()
        .then(
            value => {
                this.setState({
                    taskAssigned: value.data,
                })
                console.log(value.data)
            }
        )
    }

    // find a person that does not have a task
    findPersonClicked(event){
        event.preventDefault();
        for (var i = 0; i < this.state.people.length; i++) {
          let taskFound = false;
          let person = this.state.people[i];
          for (var j = 0; j < this.state.taskAssigned.length; i++) {
            if (this.state.taskAssigned[j].personId === this.state.people[i].id) {
              taskFound = true;
              break;
            }
          }
          if (!taskFound) {
            console.log(person);
            this.setState({personFound: person});
            break;
          }
        }
        // let num = 0;
        // console.log(this.state.taskAssigned);
        // for(var i =0; i <= this.state.taskAssigned.length - 1; i++){
        //     if(this.state.taskAssigned[i].personId === this.state.people[0].id){
        //         num++
        //     } else {
        //         continue
        //     }
        // }
        // console.log(num)
        // console.log(this.state.people[0].firstName + " " + this.state.people[0].lastName + " - " + this.state.people[0].jobTitle)
    }

    findTaskClicked(event){ 
        event.preventDefault();
        let personFound = this.state.personFound;
        if (personFound === undefined) {
          alert("No person without a task found");
          return;
        }
        console.log(this.state.tasks[0]);
        this.setState({taskFound: this.state.tasks[0]});
        // let num2 = 0;
        // for(var i =0; i <= this.state.taskAssigned.length - 1; i++){
        //     if(this.state.taskAssigned[i].taskId === this.state.tasks[1].id){
        //         num2++
        //     } else {
        //         continue
        //     }
        // }
        // console.log(num2)
        // console.log(this.state.tasks[1].name + " : " + this.state.tasks[1].description)
        
    }

    assignTaskClicked(event){ 
        event.preventDefault();
        if (this.state.taskFound === undefined) {
          alert("No task for a person set");
          return;
        }
        let assignment = {
          "personId": this.state.personFound.id,
          "taskId": this.state.tasks[0].id
        };
        taskAssignedService.updateTaskAssigned(assignment);
        this.getTaskAssignedData();
        // let perId = this.state.people[1].id;
        
        // for(var i =0; i <= this.state.taskAssigned.length - 1; i++){
        //     if (this.state.taskAssigned[1].personId){

        //     }
        // }
        // for(var i =0; i <= this.state.taskAssigned.length - 1; i++){
        //     if(this.state.taskAssigned[i].taskId === this.state.tasks[1].id){
        //         perId++
        //     } else {
        //         continue
        //     }
        // }
        // console.log(perId)
        // console.log(this.state.taskAssigned[2])
    }

    mapTaskClicked(event){
        event.preventDefault();
        this.state.taskAssigned.forEach(assignment => {
          let person = this.state.people[assignment.personId - 1];
          let task = this.state.tasks[assignment.taskId - 1];
          console.log(person);
          console.log(task);
        });
        // let num = this.state.people[1].id;
        // let count = 0;
        // for(var i =0; i <= this.state.taskAssigned.length - 1; i++){
        //     if(this.state.taskAssigned[i].personId === num){
        //         console.log(count++)
        //         console.log(this.state.tasks[this.state.taskAssigned[i].taskId].name)
        //         console.log(this.state.tasks[this.state.taskAssigned[i].taskId].description)
        //         // this.state.taskAssigned[i].personId;
        //         // console.log(this.state.tasks[i].name)
        //         // console.log(this.state.tasks[i].description)
        //     } else {
        //         continue
        //     }
        // }
        // console.log(count)
    }

    taskDoneClicked(event){
        event.preventDefault()
        let num = this.state.people[1].id;
        let count = 0;
        for(var i =0; i <= this.state.taskAssigned.length - 1; i++){
            if(this.state.taskAssigned[i].personId === num){
                console.log(count++)
                console.log(this.state.tasks[this.state.taskAssigned[i].taskId].name)
                console.log(this.state.tasks[this.state.taskAssigned[i].taskId].description)
                // this.state.taskAssigned[i].personId;
                // console.log(this.state.tasks[i].name)
                // console.log(this.state.tasks[i].description)
            } else {
                continue
            }
        }
        console.log(count)
    }
    
    render(){
        return(
            <div className="container">
                <h1 style={{textAlign:"center"}}>Trello-Lite</h1>
                <br/>
                <div className="jumbotron" style={{backgroundColor: "lightblue", color: "black"}}>
                    <div className="row">
                        <br />
                        <br/>
                        <button className="btn btn-success" onClick={this.findPersonClicked}>Find Person</button>
                        <br />
                        <br/>
                        <button className="btn btn-success" onClick={this.findTaskClicked}>Find Task</button>
                        <br/>
                        <br/>
                        <button className="btn btn-success" onClick={this.assignTaskClicked}>Assign Task</button>
                        <br/>
                        <br/>
                        <button className="btn btn-success" onClick={this.mapTaskClicked}>Map Task</button>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;