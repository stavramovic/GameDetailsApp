import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {RpgAPI} from '../Components/GenreApi.jsx';



class RPG extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <h1 className='text'>RPG</h1>
                <RpgAPI />
            </>
        );
    }
}

export default RPG;