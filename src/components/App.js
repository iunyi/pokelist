import React from 'react';
import dataFromApi from'../data/pokemon.json';
import Pokelist from './PokeList';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      pokemon: dataFromApi
    }
  }

  render() {
    return (
      <div className="App">
        <Pokelist pokemon={this.state.pokemon} />      
      </div>
    );
  }
}

export default App;
