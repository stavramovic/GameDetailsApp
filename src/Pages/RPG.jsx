import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {GenreAPI} from '../Components/GenreApi.jsx';


class RPG extends Component {
    constructor(props) {
        super(props);
        this.state = { genre: '5' }
    }
    render() {
        return (
            <>
                <Sidebar />
                <h1 className='text'>RPG</h1>
                <GenreAPI genre={this.state.genre} />
            </>
        );
    }
}

export default RPG;