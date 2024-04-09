import React from "react";
import { NavLink } from "react-router-dom";
import { classNameFunction } from "../../../utils/classNameCompiler";
import s from "./DialogItem.module.css";

const cName = classNameFunction(s);

const DialogItem = ({ id, userImg, userName, messagePreview }) => {
    const path = `/dialogs/${id}`;

    return (
        <NavLink to={path}
            className={(nd) => cName(['dialog'], nd)}>
            <div className={s.imgContainer}>
                <img className={s.userImg} src={userImg} alt="user" />
            </div>
            <div className={s.dialogText}>
                <div className={s.preview}>
                    <span className={s.userName}>{userName}</span>
                </div>
                <div className={s.preview}>
                    <span className={s.lastMessage}>{messagePreview}</span>
                </div>
            </div>
        </NavLink>
    );
}

export default DialogItem;

