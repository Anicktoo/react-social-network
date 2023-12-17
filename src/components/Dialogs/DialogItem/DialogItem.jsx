import React from "react";
import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css"
import {classNameFunction} from "../../../tools/classNameCompiler";

const cName = classNameFunction(s);

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`;

    return (
        <NavLink to={path}
                 className={(nd) => cName(['dialog'], nd)}>
            <span className={s.dialogText}>{props.name}</span>
        </NavLink>
    );
}

export default DialogItem;

