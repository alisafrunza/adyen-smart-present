import React, { Fragment } from 'react';
import './style.css';

const Header = () => (
    <Fragment>
        <header class="header">

            <img src="./logo.png" alt="logo" class="logo"></img>
            <div class="user-nav__user">
                <img src="img/user.jpg" alt="User photo" class="user-nav__user-photo"></img>
                <span class="user-nav__user-name">Maggy</span>
            </div>
        </header>
    </Fragment>
);

export default Header;



