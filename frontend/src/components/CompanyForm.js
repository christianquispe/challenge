import React from 'react';

class CompanyForm extends React.Component{

    state = {
        nameCompany: "",
        rucCompany: "",
    };

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
                <h2>Create <br/> <span className="text-uppercase">New company</span> </h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name Company</label>
                        <input onChange={this.handleChange} name="nameCompany" type="text" className="form-control" value={this.state.names}/>
                    </div>
                    <div className="form-group">
                        <label>RUC</label>
                        <input onChange={this.handleChange} name="rucCompany" type="text" className="form-control" value={this.state.names}/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary text-uppercase">{this.props.textButtom}</button>
                </form>
            </div>
        );
    }
}


export default CompanyForm;