import React from "react";
import { Link } from "react-router-dom";

import Logo from "../img/logo.svg";

class Company extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.companys.map(company => {
          return (
            <div className="col-3" key={company.id}>
              <article className="card">
                <div className="p-3 text-left ">
                  <div className="card-img-top p-3">
                    <Link to="/">
                        <img className="w-100" src={Logo} alt="" />
                    </Link>
                  </div>
                  <h2 className="h5">{company.nameCompany}</h2>
                  <p>{company.description}</p>
                  <div className="d-flex justify-content-center">
                    <Link to={company.webSite}>Visitar</Link>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Company;
