import React from 'react';
import s from './FriendItem.module.css';
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {

    return (
        <div className={s.friendItem}>
            <div className={s.imgContainer}>
                <img src={props.userImg} alt={props.userName + "'s avatar"}/>
            </div>
            <div className={s.infoContainer}>
                <span className={s.friendName}>{props.userName}</span>
                <span>{props.status}</span>
                <NavLink to={`/dialogs/${props.id}`} className={s.link}>
                    <span>{'Write a message'}</span>
                </NavLink>
            </div>
        </div>
    );
};

export default FriendItem;
