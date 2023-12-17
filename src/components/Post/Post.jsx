import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <article className={s.post}>
            <div className={s.imageContainer}>
                <img src={props.avatarImgSrc} alt="profile avatar"/>
            </div>
            <div className={s.content}>
                <p className={s.text}>{props.message}</p>
            </div>
        </article>
    );
}

export default Post;
