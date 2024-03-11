import React from 'react';
import { ReactComponent as Logo } from '../../img/logo.svg'
import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import defUser from '../../img/defaultUser.svg'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <NavLink to='/profile' className={s.logoContainer}>
                    <Logo className={s.logo} />
                </NavLink>
                <div className={s.loginContainer}>
                    {props.isLogged ?
                        <div className={s.loginBlock}>
                            <img className={s.loginImage} src={props.image ?? defUser} alt="user avatar" />
                            {props.login}
                        </div>
                        :
                        <NavLink to='/login' >
                            <div className="secondaryButton">Login</div>
                        </NavLink>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;