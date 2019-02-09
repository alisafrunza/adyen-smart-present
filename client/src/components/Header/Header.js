import React, { Fragment } from 'react';
import './style.css';
import './'

const Header = () => (
    <Fragment>
        <header className="header">
            <img src="./logo.png" alt="logo" className="logo"></img>
            <div className="user-nav__user">
                <img src="./maggie.png" alt="User" className="user-nav__user-photo"></img>
                <span className="user-nav__user-name">Maggy</span>
            </div>
        </header>
    </Fragment>
);

export default Header;



