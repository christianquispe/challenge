import React from 'react';

import { Link } from "react-router-dom";

class LoginForm extends React.Component{

    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleClick = (e) => {
        console.log( "Bottom was click!");
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <h2>Acces to platform  <br/> <span>Login</span> </h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleChange} name="email" type="email" className="form-control" value={this.state.email}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={this.handleChange} name="password" type="password" className="form-control" value={this.state.password}/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">{this.props.textButtom}</button>
                    <p>Do not you have an account yet? <Link to="/register">Click here</Link> to register</p>
                </form>
            </div>
        );
    }
}


export default LoginForm;