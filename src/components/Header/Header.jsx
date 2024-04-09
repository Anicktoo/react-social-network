import React from 'react';
import { NavLink } from "react-router-dom";
import defUser from '../../img/defaultUser.svg';
import { ReactComponent as Logo } from '../../img/logo.svg';
import arrow from '../../img/uiActions/arrow.svg';
import logoutImg from '../../img/uiActions/logout.svg';
import s from './Header.module.css';

const Header = ({ isLogged, handleButtonClick, image, login, logout, isPopupVisible, popupRef }) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <NavLink to='/profile' className={s.logoContainer}>
                    <Logo className={s.logo} />
                </NavLink>
                <div className={s.loginContainer}>
                    {isLogged ?
                        <div className={s.loginBlock}>
                            <div className={s.loginBlockInner} onClick={handleButtonClick}>
                                <img className={s.loginImage} src={image ?? defUser} alt="user avatar" />
                                {login}
                                <img className={s.downArrow} src={arrow} alt="" />
                            </div>
                            {isPopupVisible ?
                                <div className={s.loginActionsContainer + ' stdBlock'} ref={popupRef}>
                                    <div className={s.loginActionItem}>
                                        <button onClick={logout} className={s.loginActionItemInner + ' ' + s.logoutBtn}>
                                            <span>Logout</span>
                                            <img src={logoutImg} alt="" />
                                        </button>
                                    </div>
                                </div>
                                :
                                ''
                            }
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