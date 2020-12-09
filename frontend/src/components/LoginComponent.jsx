import React, { Component } from 'react';
import { navigate } from "@reach/router";

class LoginComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            //use userlastName & password to iterate through the login
            id: "",
            lastName: "",
            login: []
        }

        // this.getLoginData=this.getLoginData.bind(this)
        // this.getUserData=this.getUserData.bind(this)
    }

    // componentDidMount(){
    //     this.getLoginData()
    // }

    // getLoginData(){
    //     loginService.getAllUsers()
    //         .then(value => {
    //             this.setState({login: value.data})
    //         })
    // }

    getUserData(event){
        event.preventDefault()
        console.log(this.state.login);
        console.log(this.state.lastName);
        for(var i =0; i <= this.state.login.length - 1; i++){
            if (this.state.lastName !== this.state.login[i].lastName){
                continue;
            } 
            else if (this.state.lastName === this.state.login[i].lastName){
                console.log(true);
                navigate(`/trello/${this.state.lastName}`);
                return navigate(`/trello/${this.state.lastName}`);
            }
            
        }
        console.log(false);
    }

    handleChange = (event) =>{
            let nam = event.target.lastName;
            let val = event.target.value;
            this.setState({[nam]: val});
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
                        lastName="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName} 
                        onChange={this.handleChange} 
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