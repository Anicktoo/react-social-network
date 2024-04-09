import React from 'react';
import { NavLink } from "react-router-dom";
import defaultAvatar from '../../../img/defaultUser.svg';
import Preloader from '../../common/Preloader/Preloader';
import s from './UserItem.module.css';

const UserItem = ({ id, isFetching, photos, fullName, followed, status, name, isFollowingInProgress, follow, unfollow }) => {
    const linkPath = '/profile/' + id;
    return (
        <div className={s.userItem}>
            <div className={s.imgContainer}>
                {isFetching ? <Preloader /> :
                    <NavLink to={linkPath}>
                        <img src={photos.small != null ? photos.small : defaultAvatar}
                            alt={fullName + "'s avatar"} />
                    </NavLink>
                }
            </div>
            <div className={s.infoContainer}>
                {isFetching ?
                    <>
                        <Preloader content={'#'.repeat(20)} />
                        <Preloader content={'#'.repeat(10)} />
                        <Preloader content={'follow'} />
                    </>
                    :

                    <>
                        <NavLink to={linkPath}>
                            <span className={s.userName}>{name}</span>
                        </NavLink>
                        <span>{status}</span>

                        {followed ?
                            <button
                                disabled={isFollowingInProgress}
                                onClick={() => { unfollow(id) }}
                                className={"inlineButton"}>
                                Unfollow
                            </button>
                            :
                            <button
                                disabled={isFollowingInProgress}
                                onClick={() => { follow(id) }}
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
