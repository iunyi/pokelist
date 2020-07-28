import React from 'react';
import dataFromApi from'../data/pokemon.json';
import Pokelist from './PokeList';
import '../stylesheets/App.scss';
import psyduck from '../images/psyduck.gif';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      pokemon: dataFromApi
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(){
    const wildPokemon = document.querySelector('.psyduck_img');
    wildPokemon.classList.remove('hidden');
  }

  render() {
    return (
      <div className="App">
        <Pokelist pokemon={this.state.pokemon} />
        <div className="wild_pkm3 " onMouseOver={this.handleMouseOver}>
          <img className="psyduck_img hidden" src={psyduck} alt="Psyduck"/>
        </div>
      
      </div>
    );
  }
}

export default App;
