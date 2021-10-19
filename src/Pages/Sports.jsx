import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {GenreAPI} from '../Components/GenreApi.jsx';


class Sports extends Component {
    constructor(props) {
        super(props);
        this.state = { genre: 'sports' }
    }
    render() {
        return (
            <>
                <Sidebar />
                <h1 className='text'>Sports</h1>
                <GenreAPI genre={this.state.genre} />
            </>
        );
    }
}

export default Sports;