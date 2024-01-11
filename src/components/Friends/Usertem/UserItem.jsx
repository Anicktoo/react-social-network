import React from 'react';
import s from './UserItem.module.css';

const UserItem = (props) => {

    return (
        <div className={s.userItem}>
            <div className={s.imgContainer}>
                <img src={props.userImg} alt={props.userName + "'s avatar"}/>
            </div>
            <div className={s.infoContainer}>
                <span className={s.userName}>{props.userName}</span>
                <span>{props.status}</span>
                {props.isFriend ?
                    <button onClick={props.removeFriend.bind(null, props.id)}
                            className={s.secondaryButton}>Remove friend</button> :
                    <button onClick={props.addFriend.bind(null, props.id)}
                            className={s.secondaryButton}>Add friend</button>
                }
            </div>
        </div>
    );
};

export default UserItem;
