import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import './card.styles.css';



function API() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.rawg.io/api/games?key=026d2b8347454a658ee73fac07c67f6b&ordering=-added&page_size=20&dates=2021-03-01,2021-05-31',
    };
  
      axios.request(options).then(response => {
      console.log(response.data);
      setGames(response.data.results);
    })
    .catch(error => console.log(error));
  }, []);


  return ( 
    <div className='card-list'>
      {games.map(game => { 
        return (
          <Card 
            key={game.id}
            name={game.name}
            slug={game.slug}
            relDate={game.released}
            backgroundImage={game.background_image}
            genre={game.genres.map(genre =>{
              return (
                <div key={genre.id} >
                  &nbsp;&nbsp;{genre.name}</div>
              )})}
          />
        );
      })}
  </div>
  )
}



export default API;
