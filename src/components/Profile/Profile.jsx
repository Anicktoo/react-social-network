import React from 'react';
import s from './Profile.module.css';
import { classNameFunction } from "../../tools/classNameCompiler";
import AccountData from "./AccountData/AccountData";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";

const cName = classNameFunction(s);
const Profile = (props) => {
    return (
        <main className={cName(['profile'])}>
            <AccountData {...props.accountInfo}
                {...props.common} />
            <NewPost {...props.newPost}
                {...props.common}
                addPost={props.addPost}
                changeTextInput={props.changeTextInput} />
            <Posts posts={props.posts}
                {...props.common} />
        </main>
    );
}

export default Profile;
