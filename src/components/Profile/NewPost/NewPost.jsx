import React from 'react';
import { classNameFunction } from "../../../utils/classNameCompiler";
import Preloader from './../../common/Preloader/Preloader';
import s from './NewPost.module.css';
import NewPostFormContainer from './NewPostForm/NewPostFormContainer';

const cName = classNameFunction(s);

const NewPost = ({ isFetching, photo, onSubmit }) => {
    return (
        <article className={cName(['new-post', 'stdBlock'])}>
            <div className={s.imageContainer}>
                {isFetching ?
                    <Preloader styles={{ minHeight: '50px' }} />
                    :
                    <img src={photo} alt="profile avatar" />
                }
            </div>
            <NewPostFormContainer isFetching={isFetching} onSubmit={onSubmit} />
        </article>
    );
}

export default NewPost;
