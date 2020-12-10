import React, { Component } from 'react'

class Dashboard extends Component {
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

export default Dashboard
