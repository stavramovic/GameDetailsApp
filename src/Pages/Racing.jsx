import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {RacingAPI} from '../Components/GenreApi.jsx';


class Racing extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <h1 className='text'>Racing</h1>
                <RacingAPI />
            </>
        );
    }      
}
export default Racing;


