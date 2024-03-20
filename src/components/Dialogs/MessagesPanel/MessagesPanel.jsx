import s from "./MessagesPanel.module.css";
import React from "react";
import MessageContainer from "./Message/MessageContainer";
import AddMessageFormContainer from "./AddMessageForm/AddMessageFormContainer";



const MessagesPanel = (props) => {
    const messagesEnd = React.createRef();

    const scrollToBottom = () => {
        messagesEnd.current.scrollIntoView({ block: "end" });
    }

    const messages = props.messages.map((m) => {
        const userName = m.your ? props.myName : props.userName;
        const userPicture = m.your ? props.myImage : props.userImg;

        return <MessageContainer key={m.id} {...m} userName={userName} userImg={userPicture}
            messages={props.messages} />
    });

    //FIXME: fix onload later
    return (
        <div onLoad={scrollToBottom} className={s.messageContainer}>
            <header className={s.messageHeader}>
                <span className={s.messageHeaderText}>{props.userName}</span>
                <img className={s.userImg} src={props.userImg} alt="user" />
            </header>
            <div className={s.messageItems}>
                {messages}
                <div ref={messagesEnd} className={s.messagesEnd}></div>
            </div>
            <AddMessageFormContainer key={props.id} onSubmit={props.onSubmit} />
        </div>
    );
}

export default MessagesPanel;

