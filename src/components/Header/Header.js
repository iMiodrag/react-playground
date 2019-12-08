import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

class Header extends React.Component {
    render() {
        return (
            <header>
                Mio's header
                <Nav key="navbar-1"/>
           </header>
        );
    }
}

export default Header;