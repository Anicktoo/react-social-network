import React from 'react';
import { classNameFunction } from "../../utils/classNameCompiler";
import AccountData from "./AccountData/AccountData";
import NewPostContainer from "./NewPost/NewPostContainer";
import Posts from "./Posts/Posts";
import s from './Profile.module.css';

const cName = classNameFunction(s);
const Profile = ({ accountInfo, common, updateUserStatus, isFetching, newPost, addPost, changeTextInput, posts }) => {
    return (
        <main className={cName(['profile'])}>
            <AccountData {...accountInfo}
                {...common}
                updateUserStatus={updateUserStatus}
                isFetching={isFetching} />
            <NewPostContainer {...newPost}
                photo={common.photos.small}
                addPost={addPost}
                changeTextInput={changeTextInput}
                isFetching={isFetching} />
            <Posts posts={posts}
                photo={common.photos.small}
                isFetching={isFetching} />
        </main>
    );
}

export default Profile;
