import React from 'react';
import s from './Profile.module.css';
import NewPost from './NewPost/NewPost';
import {classNameFunction} from "../../tools/classNameCompiler";
import AccountData from "./AccountData/AccountData";
import Posts from "./Posts/Posts";

const cName = classNameFunction(s);
const avatarSrc = 'https://assets1.ignimgs.com/2019/05/30/revan-galaxy-of-heroes-tall-1536x864-1559249534297.jpg';
const wallpaperSrc = "https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg";
const Profile = (props) => {

    const postsData = {
        avatarImgSrc: avatarSrc,
        posts: [
            {
                id: 0,
                text: 'Hey, React seems cool! I love it!',
                likes: 112,
            },
            {
                id: 1,
                text: 'My post1!',
                likes: 22,
            },
            {
                id: 2,
                text: 'My post2!',
                likes: 41,
            },
            {
                id: 3,
                text: 'My post3!',
                likes: 51,
            },
        ],
    }

    return (
        <main className={cName(['profile'])}>
            <AccountData avatarImgSrc={avatarSrc} wallpaperImgScr={wallpaperSrc}/>
            <NewPost/>
            <Posts {...postsData}/>
        </main>
    );
}

export default Profile;
