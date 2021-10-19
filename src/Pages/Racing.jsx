import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {GenreAPI} from '../Components/GenreApi.jsx';


class Racing extends Component {
    constructor(props) {
        super(props);
        this.state = { genre: 'racing' }
    }
    render() {
        return (
            <>
                <Sidebar />
                <h1 className='text'>Racing</h1>
                <GenreAPI genre={this.state.genre} />
            </>
        );
    }      
}
export default Racing;


