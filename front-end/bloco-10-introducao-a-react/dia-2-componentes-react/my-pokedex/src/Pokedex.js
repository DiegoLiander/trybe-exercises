import { Component } from "react";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return pokemons.map((pokemon) => {
      return <Pokemon monster = {pokemon} key = {pokemons.id} />;
    });
  }
}

export default Pokedex;
