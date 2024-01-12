import React from 'react';
import s from './UserItem.module.css';
import defaultAvatar from '../../../img/defaultAvatar.png';

const UserItem = (props) => {
    return (
        <div className={s.userItem}>
            <div className={s.imgContainer}>
                <img src={props.photos.small != null ? props.photos.small : defaultAvatar}
                     alt={props.name + "'s avatar"}/>
            </div>
            <div className={s.infoContainer}>
                <span className={s.userName}>{props.name}</span>
                <span>{props.status}</span>
                {props.followed ?
                    <button onClick={props.removeFriend.bind(null, props.id)}
                            className={s.secondaryButton}>Unfollow</button> :
                    <button onClick={props.addFriend.bind(null, props.id)}
                            className={s.secondaryButton}>Follow</button>
                }
            </div>
        </div>
    );
};

export default UserItem;
