import s from "./MessagesPanel.module.css";
import React from "react";
import {ReactComponent as SendIcon} from '../../../img/send.svg';
import Message from "./Message/Message";
import TextareaAutosize from "react-textarea-autosize";

const MessagesPanel = (props) => {
    const messageInput = React.createRef();
    const messagesEnd = React.createRef();
    const onSendMessage = () => {
        props.sendMessage(props.id);
    }

    const onMessageInput = () => {
        props.changeNewMessageTemplateText(props.id, messageInput.current.value);
    }

    const keyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            onSendMessage();
        }
    }

    const scrollToBottom = () => {
        messagesEnd.current.scrollIntoView({block: "end"});
    }

    const messages = props.messages.map((m) =>
        m.your ?
            <Message
                message={m.text}
                userImg={props.myImage}
                userName={props.myName}
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
                        onInput={onMessageInput}
                        value={props.messageText}
                        maxRows={12}
                    />
                    <span className={s.placeholder}
                          hidden={props.messageText}>Write your message...</span>
                </div>
                <button onClick={onSendMessage} className={s.sendButtonContainer}>
                    <SendIcon/>
                </button>
            </div>
        </div>
    );
}

export default MessagesPanel;

