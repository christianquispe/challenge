import React from "react";

import "./styles/Register.css"


import Img from "../img/banner-principal.svg"
import RegisterForm from '../components/RegisterForm';

class Register extends React.Component {
  render() {
    return (
        <div className="container Register__body">
            <div className="row">
                <div className="col-6">
                    <RegisterForm textButtom="To access"/>
                </div>  
                <div className="col-6">
                <img className="Register__img" src={Img} alt="Banner principal" />
                </div>
            </div>
        </div>
            );
  }
}

export default Register;
