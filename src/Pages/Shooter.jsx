import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {ShooterAPI} from '../Components/GenreApi.jsx';



class Shooter extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <h1 className='text'>Shooter</h1>
                <ShooterAPI />
            </>
        );
    }
}

export default Shooter;