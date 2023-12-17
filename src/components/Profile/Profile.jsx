import React from 'react';
import Post from '../Post/Post';
import s from './Profile.module.css';
import NewPost from './NewPost/NewPost';
import {classNameFunction} from "../../tools/classNameCompiler";
import AccountData from "./AccountData/AccountData";

const cName = classNameFunction(s);
const avatarSrc = 'https://assets1.ignimgs.com/2019/05/30/revan-galaxy-of-heroes-tall-1536x864-1559249534297.jpg';
const wallpaperSrc = "https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg";
const Profile = (props) => {
    return (
        <main className={cName(['profile'])}>
            <AccountData avatarImgSrc={avatarSrc} wallpaperImgScr={wallpaperSrc}/>
            <NewPost/>
            <div className={cName(['posts'])}>
                <Post avatarImgSrc={avatarSrc} message='Hey, React seems cool! I love it!'/>
                <Post avatarImgSrc={avatarSrc} message='My first post1!'/>
                <Post avatarImgSrc={avatarSrc} message='My first post2!'/>
                <Post avatarImgSrc={avatarSrc} message='My first post3!'/>
                <Post avatarImgSrc={avatarSrc} message='My first post4!'/>
            </div>
        </main>
    );
}

export default Profile;
