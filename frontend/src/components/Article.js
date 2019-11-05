import React from 'react';

class Article extends React.Component{
    render(){
        return(
            <article className="card">
                <div className="p-3 text-left ">
                    <h2 className="h5">{this.props.title}</h2>
                    <p>{this.props.resumen}</p>
                    <div className="d-flex justify-content-between">
                        <a href={this.props.link}>{this.props.linkText}</a>
                    </div>
                </div>
            </article>
        )
    }
}

export default Article;