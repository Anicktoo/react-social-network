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
            <div className={s.imgContainer}>
                <img className={s.userImg} src={props.userImg} alt="user"/>
            </div>
            <div className={s.dialogText}>
                <div className={s.preview}>
                    <span className={s.userName}>{props.userName}</span>
                </div>
                <div className={s.preview}>
                    <span className={s.lastMessage}>{props.messages[0].text}</span>
                </div>
            </div>
        </NavLink>
    );
}

export default DialogItem;

