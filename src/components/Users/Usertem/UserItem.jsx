import React from 'react';
import s from './UserItem.module.css';
import defaultAvatar from '../../../img/defaultUser.svg';
import { NavLink } from "react-router-dom";
import Preloader from '../../common/Preloader/Preloader';

const UserItem = (props) => {
    const linkPath = '/profile/' + props.id;
    return (
        <div className={s.userItem}>
            <div className={s.imgContainer}>
                {props.isFetching ? <Preloader /> :
                    <NavLink to={linkPath}>
                        <img src={props.photos.small != null ? props.photos.small : defaultAvatar}
                            alt={props.fullName + "'s avatar"} />
                    </NavLink>
                }
            </div>
            <div className={s.infoContainer}>
                {props.isFetching ?
                    <>
                        <Preloader classes={s.userName} content={'#'.repeat(20)} />
                        <Preloader content={'#'.repeat(10)} />
                        <Preloader classes={s.inlineButton} content={'follow'} />
                    </>
                    :

                    <>
                        <NavLink to={linkPath}>
                            <span className={s.userName}>{props.name}</span>
                        </NavLink>
                        <span>{props.status}</span>

                        {props.followed ?
                            <button
                                disabled={props.isFollowingInProgress}
                                onClick={() => { props.unfollow(props.id) }}
                                className={"inlineButton"}>
                                Unfollow
                            </button>
                            :
                            <button
                                disabled={props.isFollowingInProgress}
                                onClick={() => { props.follow(props.id) }}
                                className={"inlineButton"}>
                                Follow
                            </button>
                        }
                    </>
                }
            </div>
        </div >
    );
};

export default UserItem;
