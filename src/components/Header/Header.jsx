import React from 'react';
import { ReactComponent as Logo } from '../../img/logo.svg'
import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import defUser from '../../img/defaultUser.svg';
import arrow from '../../img/uiActions/arrow.svg';
import logout from '../../img/uiActions/logout.svg';

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
                            <div className={s.loginBlockInner} onClick={props.handleButtonClick}>
                                <img className={s.loginImage} src={props.image ?? defUser} alt="user avatar" />
                                {props.login}
                                <img className={s.downArrow} src={arrow} alt="" />
                            </div>
                            {props.isPopupVisible ?
                                <div className={s.loginActionsContainer + ' ' + 'stdBlock'} ref={props.popupRef}>
                                    <div className={s.loginActionItem}>
                                        <button onClick={props.logout} className={s.loginActionItemInner + ' ' + s.logoutBtn}>
                                            <span>Logout</span>
                                            <img src={logout} alt="" />
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