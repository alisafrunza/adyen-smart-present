import React, { Fragment } from 'react';
import './style.css';

const Header = () => (
    <Fragment>
        <header className="header">
            <img src={require("./logo.png")} alt="logo" className="logo"></img>
            {/* <span className="money_donated">Donated so far</span>
            <span className="user-nav__user-name">Maggie's wishlist</span>
            <img src={require("./maggie.png")} alt="User" className="user-photo"></img> */}
        </header>
    </Fragment>
);

export default Header;



