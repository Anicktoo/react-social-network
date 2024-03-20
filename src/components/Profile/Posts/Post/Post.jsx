import React from 'react';
import s from './Post.module.css';
import { classNameFunction } from "../../../../utils/classNameCompiler";

const cName = classNameFunction(s);

const Post = (props) => {
    return (
        <article className={cName(['post', 'stdBlock'])}>
            <div className={s.imageContainer}>
                <img src={props.avatarImgSrc} alt="profile avatar" />
            </div>
            <div className={s.content}>
                <p className={s.text}>{props.text}</p>
                <p className={s.likes}>likes: {props.likes}</p>
            </div>
        </article>
    );
}

export default Post;
