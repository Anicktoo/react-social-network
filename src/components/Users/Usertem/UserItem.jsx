import React from 'react';
import s from './UserItem.module.css';
import defaultAvatar from '../../../img/defaultUser.svg';
import Loader from "../../common/Loader/Loader";
import { NavLink } from "react-router-dom";
import { followAPI } from '../../../api/api';

const UserItem = (props) => {
    const linkPath = '/profile/' + props.id;
    return (
        <div className={s.userItem}>
            <div className={s.imgContainer}>
                {props.isFetching ? <Loader /> :
                    <NavLink to={linkPath}>
                        <img src={props.photos.small != null ? props.photos.small : defaultAvatar}
                            alt={props.fullName + "'s avatar"} />
                    </NavLink>
                }
            </div>
            <div className={s.infoContainer}>
                <NavLink to={linkPath}>
                    <span className={s.userName}>{props.name}</span>
                </NavLink>
                <span>{props.status}</span>
                {props.followed ?
                    <button disabled={props.isFollowingInProgress} onClick={() => {
                        props.setFollowingState(true, props.id);
                        followAPI.unfollow(props.id).then(data => {
                            if (data.resultCode === 0) {
                                props.unfollow(props.id);
                            }
                            props.setFollowingState(false, props.id);
                        })
                    }}
                        className={"inlineButton"}>Unfollow</button> :
                    <button disabled={props.isFollowingInProgress} onClick={() => {
                        props.setFollowingState(true, props.id);
                        followAPI.follow(props.id).then(data => {
                            if (data.resultCode === 0) {
                                props.follow(props.id);
                            }
                            props.setFollowingState(false, props.id);
                        })
                    }}
                        className={"inlineButton"}>Follow</button>
                }
            </div>
        </div >
    );
};

export default UserItem;
