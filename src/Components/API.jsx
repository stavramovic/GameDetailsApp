import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import '../sass/main.scss';



function API() {

  const [games, setGames] = useState([]);

  let date = new Date().toISOString().slice(0,10);

  let d = new Date();
  d.setMonth(d.getMonth() - 3);
  let oldDate = d.toISOString().slice(0,10);


  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.rawg.io/api/games?key=026d2b8347454a658ee73fac07c67f6b&ordering=-added&page_size=20&dates=${oldDate},${date}`,
    };
  
      axios.request(options).then(response => {
      console.log(response.data);
      setGames(response.data.results);
    })
    .catch(error => console.log(error));
  }, [date, oldDate]);


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
