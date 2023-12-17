import React from 'react';
import {ReactComponent as Logo} from '../../img/logo.svg'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <NavLink to='/profile' className={s.logoContainer}>
                    <Logo className={s.logo}/>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;