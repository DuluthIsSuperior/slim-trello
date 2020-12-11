import React, { Component } from 'react'
import taskService from '../../service/taskService'


class NewTaskComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(){
        let task = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
        }

        taskService.addTasks(task)
            .then(this.props.history.push(`/dashboard`))  
    }

    render(){
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "lightblue"}}>
                <h3 style = {{textAlign: "center"}}>Add Task</h3>
                </div>
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>ID:</label>
                                <input className="form-control" type="text" value={this.state.id} disabled></input>
                            </div>
                            <div>
                                <label>name:</label>
                                <input className="form-control" type="text" name="name" onChange={this.handleChange} required></input>
                            </div>
                            <div>
                                <label>Description:</label>
                                <input className="form-control" type="text" name="description" onChange={this.handleChange} required></input>
                            </div>
                            <br/><br/>
                            <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                        </form>
                    </div>
                </div>
        )
}

}


export default NewTaskComponent;