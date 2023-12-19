import React from 'react';
import s from './Profile.module.css';
import NewPost from './NewPost/NewPost';
import {classNameFunction} from "../../tools/classNameCompiler";
import AccountData from "./AccountData/AccountData";
import Posts from "./Posts/Posts";

const cName = classNameFunction(s);
const Profile = (props) => {
    return (
        <main className={cName(['profile'])}>
            <AccountData {...props.accountInfo}/>
            <NewPost/>
            <Posts posts={props.posts} avatarImgSrc={props.accountInfo.avatarImgSrc}/>
        </main>
    );
}

export default Profile;
