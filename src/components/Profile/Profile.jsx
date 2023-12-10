import React from 'react';
import Post from '../Post/Post';
import styles from './Profile.module.css';
import NewPost from './NewPost/NewPost';
import classLister from 'css-module-class-lister';

const c = classLister(styles);

const Profile = () => {
    return (
        <main className={c('profile')}>
            <section className={c('account-data')}>
                <div className={c('wallpaper')}>
                    <img src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"
                        alt="user's background wallpaper" />
                </div>
                <div className={c('info-container')}>
                    <div className={c('avatar')}>
                        <img src="https://cs6.pikabu.ru/post_img/big/2015/03/14/9/1426346098_1794791727.jpg"
                            alt="user's avatar"></img>
                    </div>
                    <div className={c('info')}>
                        <span className={c('info-header name')}>
                            Nikita T.
                        </span>
                        <span className={c('info-data date-of-birth')}>
                            Date of Birth: 10 February
                        </span>
                        <span className={c('info-data city')}>
                            City: Saint-Petersburg
                        </span>
                        <span className={c('info-data education')}>
                            Education: ITMO University
                        </span>
                        <span className={c('info-data web-site')}>
                            Web Site: <a href='https://github.com/Anicktoo'>https://github.com/Anicktoo</a>
                        </span>
                    </div>
                </div>
            </section>
            <div className={c('feed')}>
                <NewPost />
                <div className={c('posts')}>
                    <Post />
                </div>
            </div>
        </main >
    );
}

export default Profile;
