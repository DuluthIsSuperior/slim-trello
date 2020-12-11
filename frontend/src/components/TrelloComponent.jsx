import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import taskAssignedService from '../service/taskAssignedService';
import loginService from '../service/loginService';
import taskService from '../service/taskService';

class TrelloComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            jobTitle: '',
            tasks: [],
            taskAssigned: []
        }
    this.getUserRegistry = this.getUserRegistry.bind(this)
    this.showTasks = this.showTasks.bind(this)
    this.finishTasks = this.finishTasks.bind(this)
    this.getTaskData = this.getTaskData.bind(this)
    this.getTaskAssignedData = this.getTaskAssignedData.bind(this)
    // console.log(this.props.match.params.id)
    }

    componentDidMount(){
        this.getUserRegistry();
        this.getTaskData();
        this.getTaskAssignedData();
        this.showTasks();
    }

    getUserRegistry() {
        let person = this.props.match.params.id;
        loginService.retrieveAllPeople()
        .then(
            response => {
                for(var i =0; i <= response.data.length - 1; i++){
                    // console.log(response.data[i].id)
                    // console.log(person)
                    if (person == response.data[i].id){
                        // console.log(true)
                        this.setState({
                            firstName: response.data[person].firstName,
                            lastName: response.data[person].lastName,
                            jobTitle: response.data[person].jobTitle                            
                            })
                        } else {
                            continue
                        }
                    }
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
            }
        )
    }

    finishTasks(event) {
        
    }

    handleFinish = () => {
        this.setState(state =>{
            return {
                name: <span color="red">state.taskService.name</span>,
                description: <span color="red">state.taskService.description</span>
            }
        })
    }

    showTasks(){
        let num = this.props.match.params.id;
        console.log(num)
        let count = 0;
        for(var i =0; i <= this.state.taskAssigned.length - 1; i++){
            if(this.state.taskAssigned[i].personId === num){
                console.log(this.state.taskAssigned)
                count++
                // console.log(this.state.tasks[this.state.taskAssigned[i].taskId].name + " " + this.state.tasks[this.state.taskAssigned[i].taskId].description);
                return this.state.tasks[this.state.taskAssigned[i].taskId].name + " " + this.state.tasks[this.state.taskAssigned[i].taskId].description;
            } else {
                continue
            }
        }
        console.log(count)
    }

    updateTasksClicked(id) {
        console.log('Update Tasks Clicked')
        this.props.history.push(`/trello/`)
    }

    render(){
            return(
                <div className="container">
                    <h1 style={{textAlign:"center"}}>Tasks of {this.state.firstName} {this.state.lastName}</h1>
                    <h2 style={{textAlign:"center"}}>{this.state.jobTitle}</h2>
                    <div className="jumbotron" style={{backgroundColor: "lightblue", color: "black"}}>
                        <table className="table">
                            <thead>
                                <tr style={{textAlign: "center", color: "black"}}>
                                    <th>Tasks</th>
                                    <th>Completed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                        <tr style={{textAlign: "center"}}>
                                            <td></td>
                                            <td><div></div></td>
                                        </tr>
                                    
                                }
                            </tbody>
                        </table>
                        <div className="row">
                            <br />
                            <br/>
                            <Link to="/TaskList"><button className="btn btn-success">Add Tasks</button></Link>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            )
        }
}

export default TrelloComponent