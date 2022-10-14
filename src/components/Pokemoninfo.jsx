import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';
import { fetchDetailsData } from '../Redux/Details/Details';

function PokemonInfo() {
  const { data } = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(true);
  const pokeId = window.location.pathname.slice(13);
  useEffect(() => {
    dispatch(fetchDetailsData(pokeId));
    setTimeout(() => {
      setLoaded(false);
    }, 3000);
  }, [dispatch, pokeId]);

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
      <div key={data.id}>
        <h2 className="pokename">{data.name}</h2>

        <img src={data.images.small} alt="img" className="pokeimg" />
        <ul className="pokelist">
          <li>
            <p>
              Series :

              {data.set.series}
            </p>
          </li>
          <li>
            <p>
              Types :

              {data.types[0]}
            </p>
          </li>
          <li>
            <p>
              Rarity :
              {data.rarity}

            </p>
          </li>
          <li>
            <p>
              Artist :

              {data.artist}
            </p>
          </li>
          <li>
            <p>
              Cardmarket Average Selling Price :

              {data.cardmarket.prices.averageSellPrice}

              $
            </p>
          </li>
        </ul>
      </div>

    </>
  );
}
export default PokemonInfo;
