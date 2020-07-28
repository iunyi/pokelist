import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokeList extends Component {
    render() {
        const pokemonJSX = this.props.pokemon.map(item => {
            return (
                    <li key={item.id}>
                        <Pokemon 
                            name={item.name}
                            types={item.types}
                            evolution={item.evolution}
                            imgURL={item.url}
                        />
                    </li>


            )
        })
        return (
            <React.Fragment>
                <h1>Pokedex</h1>
                <ul>{pokemonJSX}</ul>
            </React.Fragment>
        );
    }
}

export default PokeList;