import React, { Component } from 'react'
import loginService from '../service/loginService'
import taskService from '../service/taskService'
import taskAssignedService from '../service/taskAssignedService'

class NewAssignTaskComponent extends Component {
    constructor (props){
        super(props)
        this.state = {
            people: []
        }
        this.getPeopleData = this.getPeopleData.bind(this)
        this.getTaskData = this.getTaskData.bind(this)
        // this.deletePeopleClicked = this.deletePeopleClicked.bind(this)
        // this.updatePeopleClicked = this.updatePeopleClicked.bind(this)
        this.addPeopleClicked = this.addPeopleClicked.bind(this)
    }

    componentDidMount(){
        this.getPeopleData();
    }

    getPeopleData() {
        loginService.retrieveAllPeople()
        .then(
            value => {
                this.setState({
                    people: value.data,
                })
            }
        )
    }

    addPeopleClicked(){
        console.log('Add Person Clicked')
        this.props.history.push(`/thePerson/-1`)
    }

    addTaskClicked(){
        console.log('Add Task Clicked')
        this.props.history.push(`/theTask/-1`)
    }

    handleSubmit(){
        let taskAssign = {
            id: this.state.id,
            taskId: this.state.taskId,
            personId: this.state.personId,
        }
    }

    
    render(){
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
                                this.state.people.map (
                                    people =>   
                                    <tr style={{textAlign: "center"}}>
                                        <td>{people.id}</td>
                                        <td><br/>
                                        <strong>{people.firstName} {people.lastName}</strong>
                                        <br />
                                        <br />
                                        <em>{people.jobTitle}</em>
                                        <br />
                                        <br />
                                        </td>
                                        {/* <td>{}</td>
                                        <option key={i} value={item.id}>{item.name}</option>
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

export default NewAssignTaskComponent;