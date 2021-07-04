import React from 'react';
import Moment from 'react-moment';
import {withRouter} from 'react-router-dom';
import '../sass/main.scss';


  
    
   
const Card = ({name, relDate, genre, backgroundImage, history, slug}) => {

    return (
            <div className='card-container' onClick={()=> history.push(`/details/${slug}`)}>  
                <img className='pictures' alt='games' src={backgroundImage}/>
                <h5 className='nameInfo'>{name}</h5>
                <h5 className='left'><i>Release date:</i><div className='right'><Moment format="DD/MM/YYYY">{relDate}</Moment></div></h5>
                <h5 className='left'><i>Genres:</i><div className='right'>{genre}</div></h5>
            </div>
    )
}

export default withRouter(Card);




