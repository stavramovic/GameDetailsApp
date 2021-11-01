import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {GenreAPI} from '../Components/GenreApi.jsx';


class Sports extends Component {
    constructor(genre) {
        super(genre)
        this.genre = 'sports';
    }
    render() {
        return (
            <>
                <Sidebar />
                <h1 className='text'>Sports</h1>
                <GenreAPI genre={this.genre} />
            </>
        );
    }
}

export default Sports;