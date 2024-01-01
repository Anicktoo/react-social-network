import React from 'react';
import s from './Friends.module.css';
import {classNameFunction} from "../../tools/classNameCompiler";
import FriendItem from "./FriendItem/FriendItem";
import FriendItemContainer from "./FriendItem/FriendItemContainer";

const cName = classNameFunction(s);


const Friends = (props) => {

    const friendList = props.friends.map(el => <FriendItemContainer key={el.id} id={el.id}/>);

    return (
        <main className={s.friends}>
            <div className={cName(['friendsContainer', 'stdBlock'])}>
                <header className={s.header}>
                    <span>My Friends</span>
                </header>
                <div className={s.friendList}>
                    {friendList}
                </div>
            </div>
        </main>
    );
};

export default Friends;
