import React from 'react';
import s from './NewPost.module.css';
import {classNameFunction} from "../../../tools/classNameCompiler";
import TextareaAutosize from 'react-textarea-autosize';

const cName = classNameFunction(s);

const NewPost = (props) => {

    const contentRef = React.createRef();

    const onPostAdd = () => {
        props.addPost();
    };

    const onTextInput = () => {
        props.changeTextInput(contentRef.current.value);
    };

    return (
        <article className={cName(['new-post', 'stdBlock'])}>
            <div className={s.imageContainer}>
                <img src={props.photos.small} alt="profile avatar"/>
            </div>
            <div className={cName('new-post-wrapper')}>
                <TextareaAutosize
                    ref={contentRef}
                    className={cName('text-area')}
                    onInput={onTextInput}
                    value={props.text}
                />
                <span className={s.placeholder}
                      hidden={props.text}>Write your post...</span>
                <button onClick={onPostAdd} className={cName('mainButton')}>Send
                </button>
            </div>
        </article>
    );
}

export default NewPost;
