import React from 'react';
import s from './NewPost.module.css';
import { classNameFunction } from "../../../utils/classNameCompiler";
import NewPostFormContainer from './NewPostForm/NewPostFormContainer';
import Preloader from './../../common/Preloader/Preloader';

const cName = classNameFunction(s);

const NewPost = (props) => {
    return (
        <article className={cName(['new-post', 'stdBlock'])}>
            <div className={s.imageContainer}>
                {props.isFetching ?
                    <Preloader styles={{ minHeight: '50px' }} />
                    :
                    <img src={props.photo} alt="profile avatar" />
                }
            </div>
            <NewPostFormContainer isFetching={props.isFetching} onSubmit={props.onSubmit} />
        </article>
    );
}

export default NewPost;
