import React from 'react';


import { Link } from "react-router-dom";

class RegisterForm extends React.Component{

    constructor(){
        super();
        this.state = {
            names: "",
            email: "",
            password: "",
            passwordConfirmation: "",
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
                <h2>Acces to platform  <br/> <span>Register</span> </h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={this.handleChange} name="names" type="text" className="form-control" value={this.state.names}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleChange} name="email" type="email" className="form-control" value={this.state.email}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={this.handleChange} name="password" type="password" className="form-control" value={this.state.password}/>
                    </div>
                    <div className="form-group">
                        <label>Password Confirmation</label>
                        <input onChange={this.handleChange} name="passwordConfirmation" type="password" className="form-control" value={this.state.passwordConfirmation}/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">{this.props.textButtom}</button>
                    <Link to="/welcome/new/user">To Acces </Link>
                </form>
            </div>
        );
    }
}


export default RegisterForm;