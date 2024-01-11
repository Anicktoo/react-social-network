import React from 'react';
import s from './Friends.module.css';
import {classNameFunction} from "../../tools/classNameCompiler";
import UserItemContainer from "./Usertem/UserItemContainer";
import {NavLink, Route, Routes} from "react-router-dom";
import FriendItemContainer from "./Friendtem/FriendItemContainer";

const cName = classNameFunction(s);


const Friends = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 5,
                userName: 'Luke Skywalker',
                userImg: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Luke-Skywalker.Star-Wars-Series.webp',
                status: 'I AM A JEDI, like my father before me',
                isFriend: false,
            },
            {
                id: 6,
                userName: 'Yoda',
                userImg: 'https://www.looper.com/img/gallery/yodas-story-explained/intro-1675881384.jpg',
                status: 'Listening to music sometimes, a window opens and happy you are.',
                isFriend: false,
            },
        ]);
    }
    const friendList = props.friends.map(el => <FriendItemContainer key={el.id} id={el.id}/>);
    const allUsersList = props.users.map(el => <UserItemContainer key={el.id} id={el.id}/>);

    return (
        <main className={s.friends}>
            <Routes>
                <Route path={'/'} element={
                    <div className={cName(['friendsContainer', 'stdBlock'])}>
                        <header className={s.header}>
                            <span>My Friends</span>
                            <NavLink to={'/friends/search'}>
                                <button className={'mainButton'}>Find user</button>
                            </NavLink>
                        </header>
                        <div className={s.usersList}>
                            {friendList}
                        </div>
                    </div>
                }/>
                <Route path={'/search'} element={
                    <div className={cName(['friendsContainer', 'stdBlock'])}>
                        <header className={s.header}>
                            <span>All Users</span>
                            <NavLink to={'/friends'}>
                                <button className={'mainButton'}>My friends</button>
                            </NavLink>
                        </header>
                        <div className={s.usersList}>
                            {allUsersList}
                        </div>
                    </div>
                }/>
            </Routes>
        </main>
    );
};

export default Friends;
