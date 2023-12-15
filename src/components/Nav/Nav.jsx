import React from "react";
import styles from './Nav.module.css'
import classLister from 'css-module-class-lister';
import {NavLink} from "react-router-dom";

const c = classLister(styles);

const isActiveItem = (dataNav) => dataNav.isActive ? styles.active : '';

const Nav = () => {
    return (
        <nav className={c('nav')}>
            <NavLink to='/profile' className={(isActive) => c('item', isActiveItem(isActive))}>
                <span className={c('link')}>Profile</span>
            </NavLink>
            <NavLink to='/dialogs' className={(isActive) => c('item', isActiveItem(isActive))}>
                <span className={c('link')}>Messages</span>
            </NavLink>
            <NavLink to='/news' className={(isActive) => c('item', isActiveItem(isActive))}>
                <span className={c('link')}>News</span>
            </NavLink>
            <NavLink to='/music' className={(isActive) => c('item', isActiveItem(isActive))}>
                <span className={c('link')}>Music</span>
            </NavLink>
            <NavLink to='/settings' className={(isActive) => c('item', 'item_divided', isActiveItem(isActive))}>
                <span className={c('link')}>Settings</span>
            </NavLink>
        </nav>
    );
}

export default Nav;
