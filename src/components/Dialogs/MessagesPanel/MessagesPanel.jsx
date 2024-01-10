import s from "./MessagesPanel.module.css";
import React from "react";
import {ReactComponent as SendIcon} from '../../../img/send.svg';
import TextareaAutosize from "react-textarea-autosize";
import MessageContainer from "./Message/MessageContainer";

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

    //FIXME: sending whole messages info to each message is wierd
    const messages = props.messages.map((m) => {
            return <MessageContainer key={m.id} id={m.id} userName={props.userName} userImg={props.userImg}
                                     messages={props.messages}/>
        }
    );

    //FIXME: fix onload later
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

