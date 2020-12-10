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

    handleChange = (event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    findPersonClicked(event){
        event.preventDefault()
        console.log(this.state.people.id[2])
    }

    findTaskClicked(event){ 
        event.preventDefault()
        console.log(this.state.person_id[2])
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;