import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import logo from '../img/pokemon.jpg';
import { fetchData } from '../Redux/Homepage/Homepage';

const PokemonList = () => {
  const { data } = useSelector((state) => state.pokemon);
  const disptach = useDispatch();
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    disptach(fetchData());
    setTimeout(() => {
      setLoaded(false);
    }, 8000);
  }, [disptach]);

  if (loaded) {
    return (
      <div className="loading">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible
        />

      </div>
    );
  }
  return (
    <>
      <div className="logo-cont">
        {' '}
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="listContainer">
        {data.map((pokemon) => (
          <div key={pokemon.id} className="pokeContainer">
            <img src={pokemon.images.small} alt="img" className="imgList" />
            <div className="namelist">
              <h2 className="pokenamelist">{pokemon.name}</h2>
              <Link to={`/pokemonInfo/${pokemon.id}`} className="go"><FaArrowAltCircleRight /></Link>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};
export default PokemonList;
