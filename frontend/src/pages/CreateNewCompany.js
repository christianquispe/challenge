import React from "react";

import "./styles/CreateNewCompany.css";

import CompanyForm from "../components/CompanyForm";


class CreateNewCompany extends React.Component{
    render(){
        return(
            <div className="NewCompany__body">
                 <div className="NewCompany__box-form">
                     <CompanyForm textButtom="Update now"/>
                 </div>
            </div>
        );
    }
}
export default CreateNewCompany;