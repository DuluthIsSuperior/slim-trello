import React, { Component } from 'react'
import peopleervice from '../../service/peopleervice'


class GetTaskComponent extends Component {
    constructor(props){
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
                //after setting state, making a call to the task service.  Then make a call to the task assign service.  Then you can match those up.
            }
        )
    }

    addPeopleClicked(){
        console.log('Add Person Clicked')
        this.props.history.push(`/thePerson/-1`)
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
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Job Title</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.people.map (
                                    people =>
                                    <tr style={{textAlign: "center"}} key={people.id}>
                                        <td>{persons.id}</td>
                                        <td><strong>{people.firstName}</strong></td>
                                        <td><strong> {people.lastName}</strong></td>
                                        <td>{people.jobTitle}</td>
                                        <td><button className="btn btn-dark" onClick={() => this.deletePersonClicked(people.id, people.firstName, people.lastName)}>Delete</button></td>
                                        <td><button className="btn btn-info" onClick={() => this.updatePersonClicked(people.id)}>Update</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <br />
                        <button className="btn btn-success" onClick={this.addPersonClicked}>Add task</button>
                        <br/>
                        <br/>
                    </div>
                    </div>
                </div>
        )
}

}


export default GetTaskComponent;