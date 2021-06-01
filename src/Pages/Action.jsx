import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {ActionAPI} from '../Components/GenreApi.jsx';



class Action extends Component {
    render () {
        return (
            <>
                <Sidebar />
                <h1 className='text'>Action</h1>
                <ActionAPI />
            </>
        );
    }
}

export default Action;