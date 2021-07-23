import React from 'react';
import Moment from 'react-moment';
import { ScreenshotsApi } from './Screenshots';
import '../sass/main.scss';


const GameDetails = ({name, backgroundImage, description, relDate, developer, website, tags, genre, metacritic, platform}) => {
    return (
            <div className='container'>
                <div className='box'>
                    <p className='letters'>{name}</p>
                    <img src={backgroundImage} alt='' className='box2'></img>
                    
                    <ScreenshotsApi></ScreenshotsApi>
                              
                    <div className='group'>
                        <div className='leftSide'>
                            <p className='aboutLetters'>About:</p>
                            <div className='descriptionStyle'>
                                {`${description.substring(0, 500)}...`}  
                            </div>                                                                           
                            <div className='text-font'>Tags:&nbsp;{tags}</div>
                        </div>

                        <div className='rightSide'>
                            <p className='detailsSize'>Game Details:</p>
                            <div className='devs'>Developer:&nbsp;{developer}</div>   
                            <div className='text-font'>Released:&nbsp;<Moment format="DD/MM/YYYY">{relDate}</Moment></div>
                            <div className='genres'>Genres:&nbsp;{genre}</div> 
                            <div className='platforms'> Platforms:&nbsp;{platform}</div>
                            <div className='text-font'>Metacritic score: {metacritic}</div>
                            <div className='text-font'>Link: <a  className='website' href={website}>View the website</a></div>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default GameDetails;