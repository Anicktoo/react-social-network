import React from 'react';
import s from './Profile.module.css';
import {classNameFunction} from "../../tools/classNameCompiler";
import NewPostContainer from "./NewPost/NewPostContainer";
import AccountDataContainer from "./AccountData/AccountDataContainer";
import PostsContainer from "./Posts/PostsContainer";

const cName = classNameFunction(s);
const Profile = (props) => {
    return (
        <main className={cName(['profile'])}>
            <AccountDataContainer/>
            <NewPostContainer/>
            <PostsContainer/>
        </main>
    );
}

export default Profile;
