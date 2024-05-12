import React from 'react';
import { classNameFunction } from "../../utils/classNameCompiler";
import AccountData from "./AccountData/AccountData";
import NewPostContainer from "./NewPost/NewPostContainer";
import Posts from "./Posts/Posts";
import s from './Profile.module.css';

const cName = classNameFunction(s);
const Profile = ({ accountInfo, common, updateUserStatus, newPost, addPost, changeTextInput, posts, isOwner, savePhoto }) => {
    return (
        <main className={cName(['profile'])}>
            <AccountData {...accountInfo}
                {...common}
                updateUserStatus={updateUserStatus}
                isFetching={accountInfo.isFetching}
                isOwner={isOwner}
                savePhoto={savePhoto} />
            {isOwner && <NewPostContainer {...newPost}
                photo={common.photos.small}
                addPost={addPost}
                changeTextInput={changeTextInput}
                isFetching={accountInfo.isFetching} />}
            <Posts posts={posts}
                photo={common.photos.small}
                isFetching={accountInfo.isFetching}
                isOwner={isOwner} />
        </main>
    );
}

export default Profile;
