import React from "react";
import AddMessageFormContainer from "./AddMessageForm/AddMessageFormContainer";
import MessageContainer from "./Message/MessageContainer";
import s from "./MessagesPanel.module.css";



const MessagesPanel = ({ messages, myName, myImage, userName, userImg, id, onSubmit }) => {
    const messagesEnd = React.createRef();

    const scrollToBottom = () => {
        messagesEnd.current.scrollIntoView({ block: "end" });
    }

    const messageItems = messages.map((m) => {
        const realName = m.your ? myName : userName;
        const realImg = m.your ? myImage : userImg;

        return <MessageContainer key={m.id} {...m} userName={realName} userImg={realImg}
            messages={messages} />
    });

    //FIXME: fix onload later
    return (
        <div onLoad={scrollToBottom} className={s.messageContainer}>
            <header className={s.messageHeader}>
                <span className={s.messageHeaderText}>{userName}</span>
                <img className={s.userImg} src={userImg} alt="user" />
            </header>
            <div className={s.messageItems}>
                {messageItems}
                <div ref={messagesEnd} className={s.messagesEnd}></div>
            </div>
            <AddMessageFormContainer key={id} onSubmit={onSubmit} />
        </div>
    );
}

export default MessagesPanel;

