import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import taskService from '../../service/taskService'

class UpdateTaskComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let task = {
            id: this.state.id,
            name: values.name,
            description: values.description
        }

        taskService.updateTasks(task)
        .then(() => this.props.history.push('/dashboard`'))
    }

    render() {
        let {id, name, description} = this.state
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "lightblue"}}>
                <h3 style={{textAlign: "center"}}>Update Person</h3>
                </div>
                <div className="container">
                <Formik
                        initialValues={{id, name, description}}
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
                            <label>Name</label>
                            <Field className="form-control" type="text" name="name" />
                        </fieldset>
                        <fieldset>
                            <label>Description</label>
                            <Field className="form-control" type="text" name="description" />
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

export default UpdateTaskComponent
