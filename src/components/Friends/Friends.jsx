import React from 'react';
import s from './Friends.module.css';
import {classNameFunction} from "../../tools/classNameCompiler";
import Friend from "./Friend/Friend";

const cName = classNameFunction(s);


const Friends = (props) => {

    const friendList = props.friends.map(el => <Friend {...el} />);

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
