import React from 'react';
import s from './NewPost.module.css';
import {classNameFunction} from "../../../tools/classNameCompiler";

const cName = classNameFunction(s);

const NewPost = () => {

    const newPostInput = React.createRef();
    const addPost = () => {
        const text = newPostInput.current.innerText;
        alert(text)
    };

    return (
        <div className={cName(['new-post', 'stdBlock'])}>
            <div className={cName('label-container')}>
                <span className={cName('label-text')}>New Post</span>
            </div>
            <div className={cName('new-post-input')} id="newPost">
                <div ref={newPostInput} className={cName('text-area')} aria-label='your text...'
                     contentEditable="true" role="textbox" aria-multiline="true">
                </div>
                <button onClick={addPost} className={cName('mainButton')}>Send
                </button>
            </div>
        </div>);
}

export default NewPost;
