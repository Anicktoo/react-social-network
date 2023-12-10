import React from 'react';
import MainButton from '../../MainButton/MainButton';
import styles from './NewPost.module.css';
import classLister from 'css-module-class-lister';

const c = classLister(styles);

const NewPost = () => {
    return (
        <div className={c('new-post')}>
            <div className={c('label-container')}>
                <span className={c('label-text')}>New Post</span>
            </div>
            <div className={c('new-post-input')} id="newPost">
                <div className={c('text-area')} aria-label='your text...'
                    contentEditable="true" role="textbox" aria-multiline="true">
                </div>
                <MainButton />
            </div>
        </div>);
}

export default NewPost;
