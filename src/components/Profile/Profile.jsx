import React from 'react';
import s from './Profile.module.css';
import { classNameFunction } from "../../tools/classNameCompiler";
import AccountData from "./AccountData/AccountData";
import NewPostContainer from "./NewPost/NewPostContainer";
import Posts from "./Posts/Posts";

const cName = classNameFunction(s);
const Profile = (props) => {
    return (
        <main className={cName(['profile'])}>
            <AccountData {...props.accountInfo}
                {...props.common}
                updateUserStatus={props.updateUserStatus} />
            <NewPostContainer {...props.newPost}
                {...props.common}
                addPost={props.addPost}
                changeTextInput={props.changeTextInput} />
            <Posts posts={props.posts}
                {...props.common} />
        </main>
    );
}

export default Profile;
