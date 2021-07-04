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
      url: `https://api.rawg.io/api/games/${gameId}/screenshots?key=026d2b8347454a658ee73fac07c67f6b`,
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
          <Zoom zoomMargin={40} overlayBgColorEnd={'rgba(255,255,255,0'}>
            <img
              key={screen.id}
              src={screen.image} 
              alt='' 
              className='box3' 
            />
          </Zoom>
        );
      })}
    </div>
  )
}
export { ScreenshotsApi };