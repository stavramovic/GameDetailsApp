import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {SportsAPI} from '../Components/GenreApi.jsx';


class Sports extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <h1 className='text'>Sports</h1>
                <SportsAPI />
            </>
        );
    }
}

export default Sports;