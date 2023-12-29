import React from 'react';
import {addPostActionCreator, changeNewPostTemplateTextActionCreator} from "../../../redux/profileReducer";
import NewPost from "./NewPost";


const NewPostContainer = (props) => {

    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const changeTextInput = (text) => {
        props.store.dispatch(changeNewPostTemplateTextActionCreator(text));
    };

    return (
        <NewPost
            addPost={addPost}
            changeTextInput={changeTextInput}
            avatarImgSrc={state.profileData.accountInfo.avatarImgSrc}
            text={state.profileData.newPostTemplate.text}
        />
    );
}

export default NewPostContainer;
