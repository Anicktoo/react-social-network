import React from "react";
import s from './NavButton.module.css'
import {NavLink} from "react-router-dom";
import {classNameFunction} from "../../../tools/classNameCompiler";

const cName = classNameFunction(s);
const NavButton = (props) => {
    return (
        <NavLink
            to={props.to}
            className={(nd) => cName(['item', props.divided ? 'item_divided' : ''], nd)}
        >
            <span className={cName(['link'])}>{props.text}</span>
        </NavLink>
    );
}

export default NavButton;
