import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {GenreAPI} from '../Components/GenreApi.jsx';



class Action extends Component {
    constructor(genre) {
        super(genre)
        this.genre = 'action';
    }

    render () {
        return (
            <>
                <Sidebar />
                <h1 className='text'>Action</h1>
                <GenreAPI genre={this.genre}/>
            </>
        );
    }
}

export default Action;