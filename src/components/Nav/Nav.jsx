import React from "react";
import styles from './Nav.module.css'
import classLister from 'css-module-class-lister';

const c = classLister(styles);

const Nav = () => {
    return (
        <nav className={c('nav')}>
            <a href='/profile' className={c('item')}>
                <span className={c('link')}>Profile</span>
            </a>
            <a href='/dialogs' className={c('item')}>
                <span className={c('link')}>Messages</span>
            </a>
            <a href='#n' className={c('item')}>
                <span className={c('link')}>News</span>
            </a>
            <a href='#mu' className={c('item')}>
                <span className={c('link')}>Music</span>
            </a>
            <a href='#s' className={c('item', 'item_divided')}>
                <span className={c('link')}>Settings</span>
            </a>
        </nav>
    );
}

export default Nav;
