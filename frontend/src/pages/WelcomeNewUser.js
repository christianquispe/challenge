import React from "react";

import "./styles/WelcomeNewUser.css";

import Company from "../components/Company";

class WelcomeNewUser extends React.Component {
  state = {
    data: [
      {
        id: "1ab3gh2jt1ab3gh2jt5kce-0-02g-45kce-0-02g-4",
        nameCompany: "Chemifabrik SAC",
        rucCompany: "32537585674",
        description: "Un texto de prueba en español",
        webSite: "/companys"
      },
      {
        id: "1ab3gh2jt1ab3gh2jt5kce-0-02g-45kce-0-02g-5",
        nameCompany: "Partequipos SAC",
        rucCompany: "32537585674",
        description: "Un texto de prueba en español",
        webSite: "/companys"
      },
      {
        id: "1ab3gh2jt1ab3gh2jt5kce-0-02g-45kce-0-02g-6",
        nameCompany: "Aquatec SAC",
        rucCompany: "32537585674",
        description: "Un texto de prueba en español",
        webSite: "/companys"
      },
      {
        id: "1ab3gh2jt1ab3gh2jt5kce-0-02g-45kce-0-02g-7",
        nameCompany: "Aquatec Chemi SAC",
        rucCompany: "32537585674",
        description: "Un texto de prueba en español",
        webSite: "/companys"
      }
    ]
  };
  render() {
    return (
      <div className="container Welcome__body">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="h5">
              Welcome new user! <br />{" "}
              <span className="h2">choose the company you belong to</span>
            </h2>
          </div>
          <div className="col-lg-5 d-flex justify-content-end align-items-center">
            <a href="/create/new/company" className="btn btn-primary">
              Create new company
            </a>
          </div>
          <div className="col-lg-12 mt-5">
            <div className="row">
                <Company companys={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WelcomeNewUser;
