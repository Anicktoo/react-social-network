import s from "./MessageContainer.module.css";
import React from "react";
import {ReactComponent as SendIcon} from '../../../img/send.svg';
import {sendMessageActionCreator, changeNewMessageTemplateTextActionCreator} from "../../../redux/store";

import Message from "./Message/Message";

const MessageContainer = (props) => {
    const messageInput = React.createRef();
    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator(props.id));
        messageInput.current.innerHTML = '';
    }

    const changeNewMessageTemplateText = () => {
        const cur = messageInput.current;
        props.dispatch(changeNewMessageTemplateTextActionCreator(props.id, cur.innerText));
    }

    const keyDown = (event) => {
        if (event.key === 'Enter' && event.shiftKey) {
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

    return (
        <div onKeyDown={keyDown} className={s.messageContainer}>
            <header className={s.messageHeader}>
                <span className={s.messageHeaderText}>{props.userName}</span>
                <img className={s.userImg} src={props.userImg} alt="user"/>
            </header>
            <div className={s.messageItems}>
                {messages}
            </div>
            <div className={s.writingPanel}>
                <div className={s.inputWrapper}>
                    <div onInput={changeNewMessageTemplateText} ref={messageInput} className={s.textInput}
                         aria-label='your message...'
                         contentEditable="true" role="textbox" aria-multiline="true">
                        {props.template}
                    </div>
                </div>
                <button onClick={sendMessage} className={s.sendButtonContainer}>
                    <SendIcon/>
                </button>
            </div>
        </div>
    );
}

export default MessageContainer;

