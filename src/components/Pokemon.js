import React, { Component } from 'react';
import '../stylesheets/pokemon.scss'
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
        const typesJSX = this.props.types.map((item,index) => {
            const upperCaseType = item.toUpperCase();
            return (
                <li key={index} className={`types_item ${upperCaseType}`}>
                    {upperCaseType}
                </li>
            )
        })

        return (   
            <div className="card">
                <img src={this.props.imgURL} alt={this.props.name} />
                <h3 className="name">{this.props.name}</h3>
                <ul className="types_container">{typesJSX}</ul>
            </div>
        );
    }
}

Pokemon. propTypes = {
    types: PropTypes.array,
    imgURL: PropTypes.string,
    name: PropTypes.string,
}

export default Pokemon;