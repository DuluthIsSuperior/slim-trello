import React, { Component } from 'react'
import taskService from '../../service/taskService'


class GetTaskComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            tasks: []
        }
        this.refreshTaskRegistry = this.refreshTaskRegistry.bind(this)
        this.deleteTaskClicked = this.deleteTaskClicked.bind(this)
        this.updateTaskClicked = this.updateTaskClicked.bind(this)
        this.addTaskClicked = this.addTaskClicked.bind(this)
    }

    componentDidMount() {
        this.refreshTaskRegistry();
    }

    refreshTaskRegistry() {
        taskService.retrieveAllTasks()
        .then(
            response => {
                this.setState({
                    tasks: response.data,
                })
            }
        )
    }

    deleteTaskClicked(id, name, description){
        console.log('Delete Task Clicked')
        taskService.deleteTask(id)
        .then(
            response => {
                this.setState({message: `Deleted Task: ${name} ${description}`})
                alert(this.state.message)
                this.refreshTaskRegistry();
            }
        )
    }

        updateTaskClicked(id, name){
            console.log('Update Task Clicked')
            this.props.history.push(`/task/${id}/${name}`)
        }

        addTaskClicked(){
            this.props.history.push(`/theTask/-1`)
        }
            

    render(){
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "lightblue"}}>
                <h3 style = {{textAlign: "center"}}>Add Task</h3>
                </div>
                    <div className="container">
                    <table className="table">
                        <thead>
                            <tr style={{textAlign: "center", color: "black"}}>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map (
                                    tasks =>
                                    <tr style={{textAlign: "center"}} key={tasks.id}>
                                        <td>{tasks.id}</td>
                                        <td><strong>{tasks.name}</strong></td>
                                        <td><em>{tasks.description}</em></td>
                                        <td><button className="btn btn-dark" onClick={() => this.deleteTaskClicked(tasks.id, tasks.name, tasks.description)}>Delete</button></td>
                                        <td><button className="btn btn-info" onClick={() => this.updateTaskClicked(tasks.id, tasks.name)}>Update</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <br />
                        <button className="btn btn-success" onClick={this.addtaskClicked}>Add task</button>
                        <br/>
                        <br/>
                    </div>
                    </div>
                </div>
        )
}

}


export default GetTaskComponent;