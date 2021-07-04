import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameDetails from './GameDetails.jsx';
import {useParams} from 'react-router-dom';
import '../sass/main.scss';

function GameDetailsApi() {

  const [details, setDetails] = useState([]);
  const {gameId} = useParams();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.rawg.io/api/games/${gameId}?key=026d2b8347454a658ee73fac07c67f6b`,
    };
  
      axios.request(options).then(response => {
      console.log(response.data);
      setDetails([response.data]);
    })
    .catch(error => console.log(error));
  }, [gameId]);

  
  return ( 
    <div>
      {details.map(detail => { 
        return (
          <GameDetails 
            key={detail.id}
            name={detail.name}                       
            description={detail.description_raw}                   
            backgroundImage={detail.background_image}           
            relDate={detail.released}                          
            metacritic={detail.metacritic}  

            developer={detail.developers.map(developer => {    
              return (
                <div key={developer.id}>
                  {developer.name}</div>
              )})}

            genre={detail.genres.map(genre =>{       
              return (
                <div key={genre.id} >
                  {genre.name}&nbsp;</div>
            )})}

            platform={detail.platforms.slice(0,3).map(platform =>{
              return (
                <div key={platform.platform.id} >
                  {platform.platform.name}&nbsp;</div>
            )})}

            tags={detail.tags.slice(0,5).map(tag =>{     
              return (
                <div className='tagDiv' key={tag.id} >
                  {tag.name}</div>
            )})}
        
            website={detail.website} 
          />
        );
      })}
    </div>
  )
}

export { GameDetailsApi };