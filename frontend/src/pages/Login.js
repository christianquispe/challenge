import React from "react";

import "./styles/Login.css";

import LoginForm from "../components/LoginForm";

class Login extends React.Component {
  render() {
    return (
      <div className="container Login__body">
        <div className="row">
          <div className="col-6">
            <img src="" alt="" />
          </div>
          <div className="col-6">
            <LoginForm textButtom="To access" />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
