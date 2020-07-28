import React, { Component } from 'react';
import '../stylesheets/pokemon.scss'

class Pokemon extends Component {
    render() {
        const typesJSX = this.props.types.map((item,index) => {
            const upperCaseType = item.toUpperCase();
            return (
                <li key={index} className="types_item">
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

// // propTypes
// h3.propTypes = {
//     name: propTypes.
// }

export default Pokemon;