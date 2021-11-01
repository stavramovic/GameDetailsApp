import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {GenreAPI} from '../Components/GenreApi.jsx';


class Shooter extends Component {
    constructor(genre) {
        super(genre)
        this.genre = 'shooter';
    }
    render() {
        return (
            <>
                <Sidebar />
                <h1 className='text'>Shooter</h1>
                <GenreAPI genre={this.genre} />
            </>
        );
    }
}

export default Shooter;