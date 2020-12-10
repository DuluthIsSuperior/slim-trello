import React, { Component } from 'react'
import taskAssignedService from '../service/taskAssignedService'
import loginService from '../service/loginService'
import taskService from '../service/taskService'

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

    findPersonClicked(event){
        event.preventDefault()
        let num = 1;
        for(var i =0; i <= this.state.taskAssigned.length - 1; i++){
            if(this.state.taskAssigned[i].personId === this.state.people[0].id){
                num++
            } else {
                continue
            }
        }
        console.log(num)
        // console.log(this.state.people[num].firstName + " " + this.state.people[num].lastName)
    }

    findTaskClicked(event){ 
        event.preventDefault()
        let num2 = 0;
        for(var i =0; i <= this.state.taskAssigned.length - 1; i++){
            if(this.state.taskAssigned[i].taskId === this.state.tasks[1].id){
                num2++
            } else {
                continue
            }
        }
        console.log(num2)
        console.log(this.state.tasks[1].name)
    }

    assignTaskClicked(event){ 
        event.preventDefault()
        let perId = this.state.people[1].id;
        
        for(var i =0; i <= this.state.taskAssigned.length - 1; i++){
            if (this.state.taskAssigned[1].personId){

            }
        }
        // for(var i =0; i <= this.state.taskAssigned.length - 1; i++){
        //     if(this.state.taskAssigned[i].taskId === this.state.tasks[1].id){
        //         perId++
        //     } else {
        //         continue
        //     }
        // }
        console.log(perId)
        console.log(this.state.taskAssigned[2])
    }

    mapTaskClicked(event){
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

    handleSubmit(){
        let person = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            jobTitle: this.state.jobTitle
        }
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