import React from 'react';
import { classNameFunction } from "../../../../utils/classNameCompiler";
import s from './Post.module.css';

const cName = classNameFunction(s);

const Post = ({ avatarImgSrc, text, likes }) => {
    return (
        <article className={cName(['post', 'stdBlock'])}>
            <div className={s.imageContainer}>
                <img src={avatarImgSrc} alt="profile avatar" />
            </div>
            <div className={s.content}>
                <p className={s.text}>{text}</p>
                <p className={s.likes}>likes: {likes}</p>
            </div>
        </article>
    );
}

export default Post;
