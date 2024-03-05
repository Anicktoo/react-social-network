import React from "react";
import s from './Nav.module.css'
import NavButton from "./NavButton/NavButton";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavButton to='/profile' text='Profile'/>
            <NavButton to='/dialogs' text='Messages'/>
            <NavButton to='/users' text='Users'/>
            <NavButton to='/' text='News'/>
            <NavButton to='/' text='Music'/>
            <NavButton to='/' text='Settings' divided={true}/>
        </nav>
    );
}

export default Nav;
