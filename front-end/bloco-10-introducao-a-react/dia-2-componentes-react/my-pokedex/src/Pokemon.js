import { Component } from "react";

class Pokemon extends Component {
  render() {
    const { name, type, image, averageWeight } = this.props.monster;
    return (
      <div className="pokeCard">
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
      </div>
    );
  }
}

export default Pokemon;