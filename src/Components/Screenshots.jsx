import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import '../sass/main.scss';

function ScreenshotsApi() {

  const [screens, setScreens] = useState([]);
  const {gameId} = useParams();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.rawg.io/api/games/${gameId}/screenshots?key=${process.env.REACT_APP_API_KEY}`,
    };
  
      axios.request(options).then(response => {
      console.log(response.data);
      setScreens(response.data.results);
    })
    .catch(error => console.error(error));
  }, [gameId]);

  return ( 
    <div className='groupOfPictures'>
      {screens.slice(0,4).map(screen => { 
        return (
          <Zoom key={screen.id} zoomMargin={40} overlayBgColorEnd={'rgba(255,255,255,0.3'}>
            <img
              src={screen.image} 
              alt='' 
              className='small-pictures' 
            />
          </Zoom>
        );
      })}
    </div>
  )
}
export { ScreenshotsApi };