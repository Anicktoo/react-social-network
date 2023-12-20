import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {

    return (
        <div className={s.friendItem}>
            <div className={s.imgContainer}>
                <img src={props.userImg} alt={props.userName + "'s avatar"}/>
            </div>
            <div className={s.infoContainer}>
                <span className={s.userName}>{props.userName}</span>
                <span>Some info</span>
                <span>Write a message</span>
            </div>
        </div>
    );
};

export default Friend;
