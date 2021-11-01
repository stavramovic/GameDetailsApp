import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {GenreAPI} from '../Components/GenreApi.jsx';


class Racing extends Component {
    constructor(genre) {
        super(genre)
        this.genre = 'racing';
    }
    render() {
        return (
            <>
                <Sidebar />
                <h1 className='text'>Racing</h1>
                <GenreAPI genre={this.genre} />
            </>
        );
    }      
}
export default Racing;


