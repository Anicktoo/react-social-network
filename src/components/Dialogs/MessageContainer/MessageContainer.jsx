import s from "./MessageContainer.module.css";
import React from "react";
import Message from "./Message/Message";

const MessageContainer = (props) => {
    return (
        <div className={s.messageContainer}>
            <header className={s.messageHeader}>
                <span className={s.messageHeaderText}>{props.userName}</span>
            </header>
            <div className={s.messageItems}>
                {props.messages.map((m) =>
                    <Message message={m} userImg={props.userImg} userName={props.userName}/>
                )}
            </div>
            <div className={s.writingPanel}>
                <div className={s.inputWrapper}>
                    <div className={s.textInput} aria-label='your message...'
                         contentEditable="true" role="textbox" aria-multiline="true">
                    </div>
                </div>
                <div className={s.sendButtonContainer}>
                    <img
                        src='https://static-00.iconduck.com/assets.00/send-icon-2048x1993-sijmumqa.png'
                        alt="send button"/>
                </div>
            </div>
        </div>
    );
}

export default MessageContainer;

