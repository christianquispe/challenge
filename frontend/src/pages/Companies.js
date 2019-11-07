import React from "react";
import { Link } from "react-router-dom";

import imgCompany from "../img/company.jpg";

import { dataCompanys } from "../json/companys.json";

class Companies extends React.Component {
  constructor() {
    super();
    this.state = {
      dataCompanys: dataCompanys
    };
  }
  render() {
    const companys = this.state.dataCompanys.map(company => {
      return (
        <div className="col-12 col-md-6 col-lg-3 mb-4" key={company.id}>
          <article className="card" key={company.id}>
            <div className="p-3 text-left ">
              <img className="card-img-top" src={imgCompany} alt=""/>
              <h2 className="text-center h5">{company.nameCompany}</h2>
              <p>{company.description}</p>
              <div className="d-flex justify-content-center">
                <Link to={company.webSite}>Visitar</Link>
              </div>
            </div>
          </article>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{companys}</div>
      </div>
    );
  }
}
export default Companies;
