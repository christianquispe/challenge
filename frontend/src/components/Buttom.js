import React from "react";

import "./styles/Buttom.css"

class Buttom extends React.Component{
    render(){
        return(
            <a className="Buttom text-uppercase" href={this.props.link}>{this.props.linkText}</a>
        );
    }
}
export default Buttom;