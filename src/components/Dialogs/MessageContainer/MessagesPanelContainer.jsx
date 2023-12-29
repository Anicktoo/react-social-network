import React from "react";
import {changeNewMessageTemplateTextActionCreator, sendMessageActionCreator} from "../../../redux/dialogsReducer";
import MessagesPanel from "./MessagesPanel";

const MessagesPanelContainer = (props) => {
    const state = props.store.getState();
    const sendMessage = (id) => {
        props.store.dispatch(sendMessageActionCreator(id));
    }

    const changeNewMessageTemplateText = (id, value) => {
        props.store.dispatch(changeNewMessageTemplateTextActionCreator(id, value));
    }

    return (
        <MessagesPanel
            sendMessage={sendMessage}
            changeNewMessageTemplateText={changeNewMessageTemplateText}
            id={props.id}
            messages={props.messages}
            myImage={state.profileData.accountInfo.avatarImgSrc}
            myName={state.profileData.accountInfo.name}
            userImg={props.userImg}
            userName={props.userName}
            messageText={props.template.text}
        />
    );
}

export default MessagesPanelContainer;

