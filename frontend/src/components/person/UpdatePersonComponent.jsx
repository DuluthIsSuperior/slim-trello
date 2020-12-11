import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import loginService from '../../service/loginService'

class UpdatePersonComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            jobTitle: this.props.match.params.jobTitle,
            firstName: '',
            lastName: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let person = {
            id: this.state.id,
            jobTitle: values.jobTitle,
            firstName: values.firstName,
            lastName: values.lastName,
        }

        loginService.updatePerson(person)
        .then(() => this.props.history.push('/dashboard`'))
    }

    render() {
        let {id, jobTitle, firstName, lastName} = this.state
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "lightblue"}}>
                <h3 style={{textAlign: "center"}}>Update Person</h3>
                </div>
                <div className="container">
                <Formik
                        initialValues={{id, jobTitle, firstName, lastName}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >{
                        (props) => (
                    <Form>
                        <fieldset className="form-group">
                            <label>Id</label>
                            <Field className="form-control" type="text" name="id" disabled />
                        </fieldset>
                        <fieldset>
                            <label>First Name</label>
                            <Field className="form-control" type="text" name="firstName" />
                        </fieldset>
                        <fieldset>
                            <label>Last Name</label>
                            <Field className="form-control" type="text" name="lastName" />
                        </fieldset>
                        <fieldset>
                            <label>Job Title</label>
                            <Field className="form-control" type="text" name="jobTitle" />
                        </fieldset>
                        <button className="btn btn-success" type="submit">Save</button>
                        </Form>
                    )
                    }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default UpdatePersonComponent
