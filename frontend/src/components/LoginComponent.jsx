import React, { Component } from 'react';
import loginService from '../service/loginService';

class LoginComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            //use lastName to iterate through the login

            id: 0,
            firstName: "",
            lastName: "",
            login: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.getLoginData = this.getLoginData.bind(this)
        this.getUserData = this.getUserData.bind(this)
    }

    componentDidMount(){
      this.getLoginData()
    }

    getLoginData(){
        loginService.retrieveAllPeople()
            .then(value => {
                this.setState({login: value.data})
                console.log(value.data)
            })
        }

    getUserData(event){
        event.preventDefault();
        for (var i =0; i <= this.state.login.length - 1; i++){
          let {firstName, lastName, login} = this.state;
          if (firstName !== login[i].firstName && lastName !== login[i].lastName) {
            continue;
          } else {
            this.props.history.push('/trello/' + this.state.login[i].id);
            return;
          }
            
        }
        alert("Invalid login");
    }

    handleChange(event) {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }

    render(){
        return(
            <div>
                <h1>Login to Trello-Lite</h1>
                <form>
                    <div>
                        <label>Enter First Name</label>
                        <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} required/><br/>
                        <label>Enter Last Name</label>
                        <input 
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName} 
                        onChange={this.handleChange} 
                        required
                        />
                    </div>
                    <div>
                    <button onClick={this.getUserData} type="submit" variant="contained" color="primary">Submit</button>
                    </div>
                </form>
                
            </div>
        )

    }
}
export default LoginComponent