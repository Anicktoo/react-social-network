import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {classNameFunction} from "../../tools/classNameCompiler";

const cName = classNameFunction(s);
const Nav = () => {
    return (
        <nav className={cName(['nav'])}>
            <NavLink to='/profile' className={(nd) => cName(['item'], nd)}>
                <span className={cName(['link'])}>Profile</span>
            </NavLink>
            <NavLink to='/dialogs' className={(nd) => cName(['item'], nd)}>
                <span className={cName(['link'])}>Messages</span>
            </NavLink>
            <NavLink to='/' className={(nd) => cName(['item'], nd)}>
                <span className={cName(['link'])}>News</span>
            </NavLink>
            <NavLink to='/' className={(nd) => cName(['item'], nd)}>
                <span className={cName(['link'])}>Music</span>
            </NavLink>
            <NavLink to='/' className={(nd) => cName(['item', 'item_divided'], nd)}>
                <span className={cName(['link'])}>Settings</span>
            </NavLink>
        </nav>
    );
}

export default Nav;
