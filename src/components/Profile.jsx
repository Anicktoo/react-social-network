import React from 'react';
import NewPostInput from './NewPostInput';
import Post from './Post';

const Profile = () => {
    return (
        <main className='profile'>
            <section className='profile__account-data'>
                <div className='profile__wallpaper'>
                    <img className='profile-wallpaper-img' src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg" alt="" />
                </div>
                <div className='profile__info-container'>
                    <div className='profile__avatar'>
                        <img src="https://cs6.pikabu.ru/post_img/big/2015/03/14/9/1426346098_1794791727.jpg"></img>
                    </div>
                    <div className='profile__info'>
                        <span className='profile__info-header profile__name'>
                            Nikita T.
                        </span>
                        <span className='profile__info-data profile__date-of-birth'>
                            Date of Birth: 10 February
                        </span>
                        <span className='profile__info-data profile__city'>
                            City: Saint-Petersburg
                        </span>
                        <span className='profile__info-data profile__education'>
                            Education: ITMO University
                        </span>
                        <span className='profile__info-data profile__web-site'>
                            Web Site: <a href='https://github.com/Anicktoo'>https://github.com/Anicktoo</a>
                        </span>
                    </div>
                </div>
            </section>
            <div className='profile__feed'>
                <div className='profile__new-post'>
                    <div className='profile__new-post-label-container'>
                        <spam className='profile__label-text'>New Post</spam>
                    </div>
                    <NewPostInput />
                </div>
                <div className='profile__posts'>
                    <Post />
                </div>
            </div>
        </main>
    );
}

export default Profile;
