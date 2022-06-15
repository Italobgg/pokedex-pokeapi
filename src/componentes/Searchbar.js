import React, { useState } from "react";
import { searchPokemon } from "./api";

const Searchbar = () => {
  const [search, setSearch] = useState("ditto");
  const [pokemon, setPokemon] = useState();
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Quem é esse pokemon?" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
      {pokemon ? (
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <img src={pokemon.sprites.back_default} alt={pokemon.name} />
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />

          <div>
            <b>Nome: </b>
            {pokemon.name}
          </div>
          <div>
            <b>peso: </b>
            {pokemon.weight} Kg
          </div>
          <div>
            <b>Tamanho: </b>
            {pokemon.height} M
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
