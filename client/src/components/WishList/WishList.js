import react from 'react';
import List from '@material-ui/core/List';

const WishList = () => (
    <Fragment>
        <header className="header">
            <img src={require("./logo.png")} alt="logo" className="logo"></img>
            <div className="user-nav__user">
                <img src={require("./maggie.png")} alt="User" className="user-nav__user-photo"></img>
                <span className="user-nav__user-name">Maggie</span>
            </div>
        </header>
    </Fragment>
);

export default WishList;
