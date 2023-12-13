import React from 'react';
import c from './Post.module.css';


const Post = (props) => {
    return (
        <article className={c.post}>
            <div className={c.imageContainer}>
                <img src={props.avatarImgSrc} alt="profile avatar" />
            </div>
            <div className={c.content}>
                <p className={c.text}>{props.message}</p>
            </div>
        </article>
    );
}

export default Post;
