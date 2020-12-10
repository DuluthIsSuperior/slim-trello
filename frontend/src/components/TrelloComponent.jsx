import React, { Component } from 'react'


class TrelloComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            lastName: "",
            persons: []
        }
    // this.refreshTasksRegistry = this.refreshTasksRegistry.bind(this)
    // this.deleteTaskClicked = this.deleteTasksClicked.bind(this)
    this.updateTasksClicked = this.updateTasksClicked.bind(this)
    // this.addTaskClicked = this.addTaskClicked.bind(this)
    }

    componentDidMount(){
        // this.refreshTasksRegistry();
    }

    // refreshTasksRegistry() {
    //     TasksDataService.retrieveTasks()
    //     .then(
    //         response => {
    //             this.setState({
    //                 tasks: response.data,
    //             })
    //         }
    //     )
    // }

    // deleteTasksClicked(id, firstName, lastName) {
    //     console.log('Delete Tasks Clicked')
    //     TasksDataService.deleteTasks(id)
    //     .then(
    //         response => {
    //             this.setState({message: `Deleted Tasks: ${firstName} ${lastName}`})
    //             alert(this.state.message)
    //             this.refreshTasksRegistry();
    //         }
    //     )
    // }

    updateTasksClicked(id) {
        console.log('Update Tasks Clicked')
        this.props.history.push(`/trello/`)
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
                                    <th>Name</th>
                                    <th>Tasks</th>
                                    <th>Completed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                        <tr style={{textAlign: "center"}}>
                                            <td></td>
                                            <td></td>
                                            {/* <td>{}</td>
                                            //user.tasksAssigned
                                            <td><button className="btn btn-dark" onClick={() => this.deleteTasksClicked(tasks.id, tasks.firstName, tasks.lastName)}>-</button></td>
                                            <td><button className="btn btn-info" onClick={() => this.updateTasksClicked(tasks.id, tasks.jobTitle)}>Update</button></td> */}
                                        </tr>
                                }
                            </tbody>
                        </table>
                        <div className="row">
                            <br />
                            <br/>
                            <button className="btn btn-success">Add Tasks</button>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            )
        }
}

export default TrelloComponent