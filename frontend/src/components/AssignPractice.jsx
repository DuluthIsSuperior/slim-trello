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
        this.refreshTaskAssignRegistry = this.refreshTaskAssignRegistry.bind(this)
        this.refreshTaskRegistry = this.refreshTaskRegistry.bind(this)
        this.refreshPeopleRegistry = this.refreshPeopleRegistry.bind(this)
        // this.deletePeopleClicked = this.deletePeopleClicked.bind(this)
        // this.updatePeopleClicked = this.updatePeopleClicked.bind(this)
    }

    componentDidMount(){
        this.refreshTaskAssignRegistry();
        this.refreshPeopleRegistry();
        this.refreshTaskRegistry();
    }

    refreshTaskAssignRegistry() {
        taskAssignedService.retrieveAllTaskAssigned()
        .then(
            response => {
                this.setState({
                    taskAssigned: response.data,
                })
                console.log(response.data)
            }
        )
    }

    refreshTaskRegistry() {
        taskService.retrieveAllTasks()
        .then(
            response => {
                this.setState({
                    tasks: response.data,
                })
                console.log(response.data)
            }
        )
    }

    refreshPeopleRegistry() {
        loginService.retrieveAllPeople()
        .then(
            response => {
                this.setState({
                    people: response.data
                })
                console.log(response.data)
            }
        )
    }

    findPerson1Clicked(){
        if (this.state.people[1]){
            console.log()
        }
        let peep = this.state.people.id[2]
        console.log(peep)
}

    findTaskClicked(){
        let teet = this.state.person_id[2]
        console.log(teet)
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