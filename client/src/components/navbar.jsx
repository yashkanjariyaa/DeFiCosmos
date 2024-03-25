import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './navbar.css'; // Import CSS file for styling

// Navbar component
const Navbar = ({ onLogout }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('walletAddress');
        setIsLoggedIn(false);
    };
    
    const handleSearch = async () => {
        // Your search logic here
        try {
            const response = await fetch(`/server/api/search?q=${searchQuery}`);
            const data = await response.json();
            setSearchResults(data.results);
            localStorage.setItem('searchedUser', data.results);
            Navigate("/user");
            console.log(searchResults);
        } catch (error) {
            console.error('Error searching:', error);
        }
        console.log("Searching for:", searchQuery);
    };

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/home" className="nav-link">Home</Link></li>
                    <li><Link to="/chats" className="nav-link">Chats</Link></li>
                    <li>
                        <div className="input-field">
                            <input id="search" type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} required />
                            <button onClick={handleSearch}>Search</button>
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </li>
                    <li><a onClick={handleLogout} className="nav-link">Logout</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
