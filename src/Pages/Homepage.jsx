import React, {Component} from 'react';
import Sidebar from '../Components/sidebar.jsx';
import API from '../Components/API.jsx';



class Homepage extends Component {
    render() {
        return (
            <>
                <Sidebar />
		        <h1 className='text'>New and trending</h1>
                <API />
            </>
        );
    }
}

export default Homepage;

