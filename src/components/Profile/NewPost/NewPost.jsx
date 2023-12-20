import React from 'react';
import MainButton from '../../MainButton/MainButton';
import s from './NewPost.module.css';
import {classNameFunction} from "../../../tools/classNameCompiler";

const cName = classNameFunction(s);

const NewPost = () => {
    return (
        <div className={cName(['new-post', 'stdBlock'])}>
            <div className={cName('label-container')}>
                <span className={cName('label-text')}>New Post</span>
            </div>
            <div className={cName('new-post-input')} id="newPost">
                <div className={cName('text-area')} aria-label='your text...'
                     contentEditable="true" role="textbox" aria-multiline="true">
                </div>
                <MainButton text='Send'/>
            </div>
        </div>);
}

export default NewPost;
