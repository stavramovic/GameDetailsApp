import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {GenreAPI} from '../Components/GenreApi.jsx';


class RPG extends Component {
    constructor(genre) {
        super(genre)
        this.genre = '5';
    }
    render() {
        return (
            <>
                <Sidebar />
                <h1 className='text'>RPG</h1>
                <GenreAPI genre={this.genre} />
            </>
        );
    }
}

export default RPG;