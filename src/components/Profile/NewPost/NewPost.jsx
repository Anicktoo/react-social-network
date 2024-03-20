import React from 'react';
import s from './NewPost.module.css';
import { classNameFunction } from "../../../utils/classNameCompiler";
import NewPostFormContainer from './NewPostForm/NewPostFormContainer';

const cName = classNameFunction(s);

const NewPost = (props) => {
    return (
        <article className={cName(['new-post', 'stdBlock'])}>
            <div className={s.imageContainer}>
                <img src={props.photos.small} alt="profile avatar" />
            </div>
            <NewPostFormContainer onSubmit={props.onSubmit} />
        </article>
    );
}

export default NewPost;
