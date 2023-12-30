import React from 'react';
import {addPostActionCreator, changeNewPostTemplateTextActionCreator} from "../../../redux/profileReducer";
import NewPost from "./NewPost";
import StoreContext from "../../../StoreContext";


const NewPostContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();
                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };
                    const changeTextInput = (text) => {
                        store.dispatch(changeNewPostTemplateTextActionCreator(text));
                    };
                    return (<NewPost
                        addPost={addPost}
                        changeTextInput={changeTextInput}
                        avatarImgSrc={state.profileData.accountInfo.avatarImgSrc}
                        text={state.profileData.newPostTemplate.text}
                    />)
                }
            }
        </StoreContext.Consumer>
    );
}

export default NewPostContainer;
