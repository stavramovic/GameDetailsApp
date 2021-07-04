import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenreCard from './GenreCard.jsx';
import '../sass/main.scss';
  

var date = new Date().toISOString().slice(0,10);


function ActionAPI() {

  const [games, setGames] = useState([]);
  
  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.rawg.io/api/games?key=026d2b8347454a658ee73fac07c67f6b&page_size=20&genres=action&ordering=-metacritic&dates=2016-01-01,${date}`,
    };
  
      axios.request(options).then(response => {
      console.log(response.data);
      setGames(response.data.results);
    })
    .catch(error => console.error(error));
  }, []);

return ( 
<div className='card-list'>
  {games.map(game => { 
    return (
      <GenreCard 
        key={game.id}
        name={game.name}
        backgroundImage={game.background_image}
        relDate={game.released}
        metacritic={game.metacritic}
        gameId={game.id}
        slug={game.slug}
      />
    );
  })}
  </div>
  )
}

function RacingAPI() {

  const [games, setGames] = useState([]);


  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.rawg.io/api/games?key=026d2b8347454a658ee73fac07c67f6b&page_size=20&genres=racing&ordering=-metacritic&dates=2016-01-01,${date}`,
    };
  
      axios.request(options).then(response => {
      console.log(response.data);
      setGames(response.data.results);
    })
    .catch(error => console.error(error));
  }, []);


return ( 
<div className='card-list'>
  {games.map(game => { 
    return (
      <GenreCard 
        key={game.id}
        name={game.name}
        backgroundImage={game.background_image}
        relDate={game.released}
        metacritic={game.metacritic}
        gameId={game.id}
        slug={game.slug}
      />
    );
  })}
  </div>
  )
}

function RpgAPI() {

  const [games, setGames] = useState([]);


  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.rawg.io/api/games?key=026d2b8347454a658ee73fac07c67f6b&page_size=20&genres=5&ordering=-metacritic&dates=2016-01-01,${date}`,
    };
  
      axios.request(options).then(response => {
      console.log(response.data);
      setGames(response.data.results);
    })
    .catch(error => console.error(error));
  }, []);


return ( 
<div className='card-list'>
  {games.map(game => { 
    return (
      <GenreCard 
        key={game.id}
        name={game.name}
        backgroundImage={game.background_image}
        relDate={game.released}
        rating={game.rating}
        gameId={game.id}
        metacritic={game.metacritic}
        slug={game.slug}
      />
    );
  })}
  </div>
  )
}


function ShooterAPI() {

  const [games, setGames] = useState([]);


  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.rawg.io/api/games?key=026d2b8347454a658ee73fac07c67f6b&page_size=20&genres=shooter&ordering=-metacritic&dates=2016-01-01,${date}`,
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
      <GenreCard 
        key={game.id}
        name={game.name}
        backgroundImage={game.background_image}
        relDate={game.released}
        rating={game.rating}
        gameId={game.id}
        metacritic={game.metacritic}
        slug={game.slug}
      />
    );
  })}
  </div>
  )
}


function SportsAPI() {

  const [games, setGames] = useState([]);


  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.rawg.io/api/games?key=026d2b8347454a658ee73fac07c67f6b&page_size=20&genres=sports&ordering=-metacritic&dates=2020-01-01,${date}`,
    };
  
      axios.request(options).then(response => {
      console.log(response.data);
      setGames(response.data.results);
    })
    .catch(error => console.error(error));
  }, []);


return ( 
<div className='card-list'>
  {games.map(game => { 
    return (
      <GenreCard 
        key={game.id}
        name={game.name}
        backgroundImage={game.background_image}
        relDate={game.released}
        rating={game.rating}
        gameId={game.id}
        metacritic={game.metacritic}
        slug={game.slug}
      />
    );
  })}
  </div>
  )
}


export { ActionAPI, RacingAPI, RpgAPI, ShooterAPI, SportsAPI };
