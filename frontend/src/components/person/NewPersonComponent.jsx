import React, { Component } from 'react'
import loginService from '../../service/loginService'

class NewPersonComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            jobTitle: '',
            firstName: '',
            lastName: '',
            email: ''
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
        let person = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            jobTitle: this.state.jobTitle
        }

        loginService.addPerson(person)
            .then(this.props.history.push(`/dashboard`))  
    }

    render(){
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "lightblue"}}>
                <h3 style = {{textAlign: "center"}}>Add Everett</h3>
                </div>
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>ID:</label>
                                <input className="form-control" type="text" value={this.state.id} disabled></input>
                            </div>
                            <div>
                                <label>First Name:</label>
                                <input className="form-control" type="text" name="firstName" onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <label>Last Name:</label>
                                <input className="form-control" type="text" name="lastName" onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <label>Job Title:</label>
                                <input className="form-control" type="text" name="jobTitle" onChange={this.handleChange}></input>
                            </div>
                            <br/><br/>
                            <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                        </form>
                    </div>
                </div>
        )
    }
}

export default NewPersonComponent;