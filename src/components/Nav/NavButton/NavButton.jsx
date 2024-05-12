import React from "react";
import { NavLink } from "react-router-dom";
import { classNameFunction } from "../../../utils/classNameCompiler";
import s from './NavButton.module.css';

const cName = classNameFunction(s);
const NavButton = ({ to, divided, text }) => {
    return (
        <NavLink
            to={to}
            className={cName(['item', divided ? 'item_divided' : ''])}
        >
            <span className={cName(['link'])}>{text}</span>
        </NavLink>
    );
}

export default NavButton;
