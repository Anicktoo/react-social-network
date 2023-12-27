import s from "./MessageContainer.module.css";
import React from "react";
import {ReactComponent as SendIcon} from '../../../img/send.svg';

import Message from "./Message/Message";
import TextareaAutosize from "react-textarea-autosize";
import {changeNewMessageTemplateTextActionCreator, sendMessageActionCreator} from "../../../redux/dialogsReducer";

const MessageContainer = (props) => {
    const messageInput = React.createRef();
    const messagesEnd = React.createRef();
    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator(props.id));
    }

    const scrollToBottom = () => {
        messagesEnd.current.scrollIntoView({block: "end"});
    }

    const changeNewMessageTemplateText = () => {
        props.dispatch(changeNewMessageTemplateTextActionCreator(props.id, messageInput.current.value));
    }

    const keyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    }

    const messages = props.messages.map((m) =>
        m.your ?
            <Message
                message={m.text}
                userImg={props.profileData.userAvatarSrc}
                userName={props.profileData.userName}
            /> :
            <Message
                message={m.text}
                userImg={props.userImg}
                userName={props.userName}
            />
    );

    //REFACTOR ONLOAD LATER

    return (
        <div onKeyDown={keyDown} onLoad={scrollToBottom} className={s.messageContainer}>
            <header className={s.messageHeader}>
                <span className={s.messageHeaderText}>{props.userName}</span>
                <img className={s.userImg} src={props.userImg} alt="user"/>
            </header>
            <div className={s.messageItems}>
                {messages}
                <div ref={messagesEnd} className={s.messagesEnd}></div>
            </div>
            <div className={s.writingPanel}>
                <div className={s.inputWrapper}>
                    <TextareaAutosize
                        ref={messageInput}
                        className={s.textInput}
                        onInput={changeNewMessageTemplateText}
                        value={props.template.text}
                        maxRows={12}
                    />
                    <span className={s.placeholder}
                          hidden={props.template.text}>Write your message...</span>
                </div>
                <button onClick={sendMessage} className={s.sendButtonContainer}>
                    <SendIcon/>
                </button>
            </div>
        </div>
    );
}

export default MessageContainer;

