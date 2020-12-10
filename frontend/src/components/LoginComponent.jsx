import React, { Component } from 'react';
import loginService from '../service/loginService';

class LoginComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            //use last_name to iterate through the login
            id: "",
            last_name: "",
            login: []
        }

        this.getLoginData=this.getLoginData.bind(this)
        this.getUserData=this.getUserData.bind(this)
    }

    componentDidMount(){
        this.getLoginData()
    }

    getLoginData(){
        console.log("Hello World!")
        loginService.retrieveAllPeople()
            .then(value => {
                this.setState({login: value.data})
                console.log("!", value.data)
            })
    }

    getUserData(event){
        event.preventDefault()
        console.log(this.state.login);
        for(var i =0; i <= this.state.login.length - 1; i++){
            if (this.state.last_name !== this.state.login[i].last_name){
                continue;
            } 
            else if (this.state.last_name === this.state.login[i].last_name){
                console.log(true);
                this.props.history.push('/dashboard');
                return;
            }
            
        }
        console.log(false);
    }

    handleChange = (event) =>{
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
                        <label>Enter Last Name</label>
                        <input 
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={this.state.last_name} 
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