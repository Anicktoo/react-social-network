import React from 'react';
import s from './UserItem.module.css';
import defaultAvatar from '../../../img/defaultUser.svg';
import Loader from "../../common/Loader/Loader";
import { NavLink } from "react-router-dom";
import axios from 'axios';

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
                    <button onClick={() => {
                        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + props.id, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '8071910a-4ccb-4953-80de-82b2dd251ba0'
                            }
                        })
                            .then(response => {

                                if (response.data.resultCode === 0) {
                                    props.unfollow(props.id);
                                }
                            })
                    }}
                        className={s.secondaryButton}>Unfollow</button> :
                    <button onClick={() => {
                        axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + props.id, {}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '8071910a-4ccb-4953-80de-82b2dd251ba0'
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(props.id);
                                }
                            })
                    }}
                        className={s.secondaryButton}>Follow</button>
                }
            </div>
        </div>
    );
};

export default UserItem;
