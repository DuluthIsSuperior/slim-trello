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
        this.refreshAssignRegistry = this.refreshAssignRegistry.bind(this)
        // this.deletePeopleClicked = this.deletePeopleClicked.bind(this)
        // this.updatePeopleClicked = this.updatePeopleClicked.bind(this)
    }

    componentDidMount(){
        this.refreshAssignRegistry();
    }

    refreshTaskAssignedRegistry() {
        taskAssignedService.retrieveAllTaskAssigned()
        .then(
            response => {
                this.setState({
                    taskAssigned: response.data,
                })
            }
        )
    }

    findPersonClicked(){
        for(var i =0; i <= this.state.taskAssigned.length - 1; i++){
           console.log(taskAssignedService[i].person_id)
    }
}

    findTaskClicked(){
        for(var i =0; i <= this.state.taskAssigned.length - 1; i++){
            console.log(taskAssignedService[i].task_id)
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;