import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return [
    <nav>
      <div>
      <a href="https://italobgg.github.io/pokedex-pokeapi/"><img alt="PokeAPI" src={logoImg} className="navbar-img" /></a>
      </div>
    </nav>,
     <div className="favorites-numb"> Favoritos ❤️ {favoritePokemons.length} </div>,
  ];
};

export default Navbar;
