import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return [
    <nav>
      <div>
        <img alt="PokeAPI" src={logoImg} className="navbar-img" />
      </div>
    </nav>,
     <div className="favorites-numb"> Favoritos ❤️ {favoritePokemons.length} </div>
  ];
};

export default Navbar;
