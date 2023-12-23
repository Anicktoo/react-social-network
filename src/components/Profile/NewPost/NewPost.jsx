import React from 'react';
import s from './NewPost.module.css';
import {classNameFunction} from "../../../tools/classNameCompiler";
import {addPostActionCreator, changeNewPostTemplateTextActionCreator} from "../../../redux/store";

const cName = classNameFunction(s);

const NewPost = (props) => {

    const contentRef = React.createRef();
    const placeholderRef = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
        contentRef.current.innerHTML = '';
        switchPlaceholderVisibility();
    };

    const changeTextInput = () => {
        props.dispatch(changeNewPostTemplateTextActionCreator(contentRef.current.innerText));
        switchPlaceholderVisibility();
    };

    const switchPlaceholderVisibility = () => {
        const cur = contentRef.current;
        if (cur.innerText && cur.innerHTML !== '<br>') {
            placeholderRef.current.style.display = 'none';
        } else {
            placeholderRef.current.style.display = 'inline';
        }
    }

    return (
        <article onLoad={switchPlaceholderVisibility} className={cName(['new-post', 'stdBlock'])}>
            <div className={s.imageContainer}>
                <img src={props.avatarImgSrc} alt="profile avatar"/>
            </div>
            <div className={cName('new-post-wrapper')}>
                <span ref={contentRef} className={cName('text-area')} aria-label='your text...'
                      contentEditable="true" role="textbox" aria-multiline="true"
                      onInput={changeTextInput}
                      suppressContentEditableWarning={true}
                >{props.text}</span>
                <span ref={placeholderRef} className={s.placeholder}>Write your post...</span>
                <button onClick={addPost} className={cName('mainButton')}>Send
                </button>
            </div>
        </article>
    );
}

export default NewPost;
