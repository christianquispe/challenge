import React from "react";
import RegisterForm from '../components/RegisterForm';

class Register extends React.Component {
  render() {
    return (
        <div className="container">
            <div className="row">
            <div className="col-6">
                <img src="" alt="" />
            </div>
            <div className="col-6">
                <RegisterForm textButtom="To access"/>
            </div>
            </div>
        </div>
            );
  }
}

export default Register;
