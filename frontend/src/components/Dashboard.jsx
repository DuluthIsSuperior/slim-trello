import React, { Component } from 'react';
import loginService from '../service/loginService';


class Dashboard extends Component {
    constructor (props){
        super(props)
        this.state = {
            people: []
        }
        this.refreshPeopleRegistry = this.refreshPeopleRegistry.bind(this)
        // this.deletePeopleClicked = this.deletePeopleClicked.bind(this)
        // this.updatePeopleClicked = this.updatePeopleClicked.bind(this)
        this.addPeopleClicked = this.addPeopleClicked.bind(this)
    }

    componentDidMount(){
        this.refreshPeopleRegistry();
    }

    refreshPeopleRegistry() {
        loginService.retrieveAllPeople()
        .then(
            response => {
                this.setState({
                    people: response.data,
                })
            }
        )
    }

    addPeopleClicked(){
        console.log('Add Person Clicked')
        this.props.history.push(`/thePerson/-1`)
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
                                        //user.tasksAssigned
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
                        <button className="btn btn-success">Add Tasks</button>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;