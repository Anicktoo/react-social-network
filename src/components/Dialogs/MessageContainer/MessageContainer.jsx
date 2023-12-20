import s from "./MessageContainer.module.css";
import React from "react";
import {ReactComponent as SendIcon} from '../../../img/send.svg';

import Message from "./Message/Message";

const MessageContainer = (props) => {
    const messageInput = React.createRef();
    const sendMessage = () => {
        const text = messageInput.current.innerText;
        alert(text);
    }

    return (
        <div className={s.messageContainer}>
            <header className={s.messageHeader}>
                <span className={s.messageHeaderText}>{props.userName}</span>
                <img className={s.userImg} src={props.userImg} alt="user's image"/>
            </header>
            <div className={s.messageItems}>
                {props.messages.map((m) =>
                    <Message message={m} userImg={props.userImg} userName={props.userName}/>
                )}
            </div>
            <div className={s.writingPanel}>
                <div className={s.inputWrapper}>
                    <div ref={messageInput} className={s.textInput} aria-label='your message...'
                         contentEditable="true" role="textbox" aria-multiline="true">
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

