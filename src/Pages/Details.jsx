import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import {GameDetailsApi} from '../Components/GameDetailsApi.jsx';


class Details extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <GameDetailsApi />
            </>
        );
    }
}

export default Details;