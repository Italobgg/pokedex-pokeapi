import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "./componentes/api";
import "./App.css";
import Navbar from "./componentes/Navbar";
import Pokedex from "./componentes/Pokedex";
import Searchbar from "./componentes/Searchbar";
import { FavoriteProvider } from "./contexts/favoritesContext";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState ([])

  const itensPerPage = 24;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updateFavorite = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >=0) {
      updateFavorite.slice(favoriteIndex, 1);
    }else {
      updateFavorite.push(name);
    }
    setFavorites(updateFavorite);
  }

  return (
    <FavoriteProvider
     value={{
      favoritePokemons: favorites,
      updateFavoritePokemons: updateFavoritePokemons
     }}
    >
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
    </FavoriteProvider>
  );
}

export default App;
