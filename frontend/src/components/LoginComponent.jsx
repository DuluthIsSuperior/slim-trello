import React, { Component } from 'react';
// import { navigate } from "@reach/router";
import loginService from '../service/loginService';
import { validateYupSchema } from 'formik';

class LoginComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            //use lastName to iterate through the login

            id: 0,
            lastName: "",
            login: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.getLoginData=this.getLoginData.bind(this)
        this.getUserData=this.getUserData.bind(this)
    }

    componentDidMount(){
        this.getLoginData()
    }

    getLoginData(){
        loginService.retrieveAllPeople()
            .then(value => {
                // this.setState({login: value.data})
                this.setState(prevState => {
                  return {
                    login: value.data
                  }
                });
                console.log(value.data)
            })
        }

    getUserData(event){
        event.preventDefault()
        // console.log(this.state.login);
        // console.log(this.state.login[1]);
        // console.log(this.state.login[1].id);
        // console.log(this.state.login[2].id);
        // console.log(this.state.login[3].id);
        for(var i =0; i <= this.state.login.length - 1; i++){
            if (this.state.lastName !== this.state.login[i].lastName){
                continue;
            } else {
                // this.setState({id: this.state.login[i].id})
                console.log(this.state.lastName);
                this.setState(prevState => {
                  return {
                    id: this.state.login[i].id
                  }
                });
                this.props.history.push('/trello/' + this.state.id);
            }
            
        }
        console.log(false);
    }

    handleChange(event) {
      let nam = event.target.name;
      let val = event.target.value;
      // this.setState({[nam]: val});
      this.setState(prevState => {
        return {
          id: 99,
          lastName: val
        }
      });
    }

    render(){
        return(
            <div>
                <h1>Login to Trello-Lite</h1>
                <form>
                    <div>
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