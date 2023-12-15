import React from 'react';
import {ReactComponent as Logo} from '../../img/logo.svg'
import c from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.container}>
                <NavLink to='/profile' className={c.logoContainer}>
                    <Logo className={c.logo}/>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;