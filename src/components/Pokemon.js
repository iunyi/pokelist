import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        const typesJSX = this.props.types.map((item,index) => {
            return (
                <li key={index} className="types_item">
                    <div className="types_box">{item}</div>
                </li>
            )
        })
        return (
            <div className="card">
                <img src={this.props.imgURL} />
                <h3>{this.props.name}</h3>
                <ul className="types_container">{typesJSX}</ul>
            </div>
        );
    }
}

export default Pokemon;