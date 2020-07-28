import React, { Component } from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/pokeList.scss';

class PokeList extends Component {
    render() {
        const pokemonJSX = this.props.pokemon.map(item => {
            return (
                <li key={item.id} className="pokeList_item">
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
            <div className="top">
                <h1 className="h1">Pokedex</h1>
                <ul className="pokeList">{pokemonJSX}</ul>

            </div>
        );
    }
}

export default PokeList;